/**
 * MyPrism
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyPrism extends CGFobject
{
  constructor(scene, slices, stacks)
  {
    super(scene);
    this.slices = slices;
    this.stacks = stacks;
    this.initBuffers();
  }

	initBuffers()
	{
		this.vertices = [];
    this.indices = [];
    this.normals = [];

    var ang = 2*Math.PI/this.slices;
    for(let j =0; j <= this.stacks; j++){
     for(let i=0; i < this.slices; i++){

      this.vertices.push(Math.cos(ang *i),Math.sin(ang*i),j*1/this.stacks);
      this.vertices.push(Math.cos((i+1)*ang),Math.sin((i+1)*ang),j*1/this.stacks);
      
      this.normals.push(Math.cos(ang*i+ang/2),Math.sin(ang*i+ang/2),0);
      this.normals.push(Math.cos(ang*i+ang/2),Math.sin(ang*i+ang/2),0);
    }
  }

  var nPontos = 2 * this.slices * this.stacks;

  for(let i = 0; i < nPontos; i+=2){
    this.indices.push(i, i + 1, i + 1 + this.slices * 2);
    this.indices.push(i, i + 1 + this.slices * 2, i + this.slices * 2);
  }


		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
