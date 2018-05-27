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
    this.texCoords = [];


    var ang = 2*Math.PI/this.slices;
    for(let j =0; j <= this.stacks; j++){
     for(let i=0; i < this.slices; i++){

      this.vertices.push(Math.cos(ang *i),Math.sin(ang*i),j*1/this.stacks);
      this.texCoords.push(i * 1 / this.slices, j * 1 / this.stacks);
      this.normals.push(Math.cos(ang*i),Math.sin(ang*i),0);
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
