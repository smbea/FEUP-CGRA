/**
 * MyCylinder
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCylinder extends CGFobject
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
      //this.vertices.push(Math.cos((i+1)*ang),Math.sin((i+1)*ang),j*1/this.stacks);

      this.normals.push(Math.cos(ang*i),Math.sin(ang*i),0);
      //this.normals.push(Math.cos(ang*(i+1)),Math.sin(ang*(i+1)),0);
    }
  }

  var nPontos = this.slices * this.stacks;

  for(let i = 0; i < nPontos; i++){
    if((i+1)%this.slices==0){
      this.indices.push(i,i+1, i+this.slices);
     this.indices.push(i,i+1-this.slices, i+1);
   }
   else {
    this.indices.push(i, i + 1, i + 1 + this.slices);
    this.indices.push(i, i + 1 + this.slices, i + this.slices);
  }
}


		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
