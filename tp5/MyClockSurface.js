
class MyClockSurface extends CGFobject{

	constructor(scene, slices) 
	{
        super(scene);
        this.slices = slice;
        tis.initBuffers();
	};

	initBuffers()
	{
		this.indices = [];
	this.normals = [];
this.texCoords = [];

    this.vertices.push(0,0,0);
  	this.normals.push(0,0,1);
  	this.texCoords.push(0.5,0.5);

  	for (var i = 0; i < this.slices; i++) {
  		this.vertices.push(Math.cos(i*(2*Math.PI)/this.slices));
  		this.vertices.push(Math.sin(i*(2*Math.PI)/this.slices));
  		this.vertices.push(0);

  		this.normals.push(0);
  		this.normals.push(0);
  		this.normals.push(1);

  		this.texCoords.push(0.5+Math.cos(i*(2*Math.PI)/this.slices)/2);
  		this.texCoords.push(0.5-Math.sin(i*(2*Math.PI)/this.slices)/2);
  	}


  	for (var i = 0; i < this.slices; i++) {

  		if (i == this.slices - 1) {
  			this.indices.push(0);
  			this.indices.push(i + 1);
  			this.indices.push(1);
  		}
  		else {
  			this.indices.push(0);
  			this.indices.push(i + 1);
  			this.indices.push(i + 2);
  		}
  	}



 this.primitiveType = this.scene.gl.TRIANGLES;
 this.initGLBuffers();
	};

};