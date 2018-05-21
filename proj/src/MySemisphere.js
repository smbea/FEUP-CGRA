/**
 * MySemisphere
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MySemisphere extends CGFobject
{
    constructor(scene, slices, stakcs)
  {
    super(scene);
    this.slices = slices;
    this.stakcs = stakcs;
    this.initBuffers();
  }


  initBuffers()
	{
        this.vertices = [];
 	this.normals = [];
 	this.indices = [];
 	this.texCoords = [];
	
	var ang=(2*Math.PI)/this.slices;
	var angHor=(Math.PI/2)/this.stacks;
	var radiusTexture = 0;
    var incRadiusTexture = 0.5/this.stacks;
    var i;

	for(i = 0; i <= this.stacks; i++) {
		for(j = 0; j < this.slices; j++) {
			var x = Math.cos(ang*j) * Math.cos(angHor*i);
			var y = Math.sin(ang*j) * Math.cos(angHor*i);
			this.vertices.push(x ,y, Math.sin(angHor*i));
			this.normals.push(Math.cos(ang*j) * Math.cos(angHor*i),Math.sin(ang*j) * Math.cos(angHor*i),0);
			this.texCoords.push(x * 0.5 + 0.5, y * 0.5 + 0.5);
		}
		radiusTexture += incRadiusTexture;

	}	
		
	for(i = 0; i < this.stacks; i++) {
		for(j = 0; j < this.slices - 1; j++) {
			this.indices.push(i*this.slices + j, i*this.slices + j+1, (i+1)*this.slices + j);
			this.indices.push(i*this.slices + j+1, (i+1)*this.slices + j+1, (i+1)*this.slices + j);
		}

		this.indices.push(i*this.slices + this.slices - 1, i*this.slices, (i+1)*this.slices + this.slices - 1);
		this.indices.push(i*this.slices, i*this.slices + this.slices, (i+1)*this.slices + this.slices - 1);
	}


 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
    };
};
