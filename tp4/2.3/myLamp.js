class myLamp extends CGFobject
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

    var teta=2*Math.PI/this.slices;
 	for(var j=0;j<=this.stacks;j++){
 		for(var i=0;i<this.slices;i++){
 		    var k=Math.sqrt(1-Math.pow(j/this.stacks,2));
 			this.vertices.push(k*Math.cos(i*teta));
 			this.vertices.push(k*Math.sin(i*teta));
 			this.vertices.push(Math.sqrt(1-k*k));
 			this.normals.push(k*Math.cos(i*teta));
 			this.normals.push(k*Math.sin(i*teta));
 			this.normals.push(Math.sqrt(1-k*k));
 		}
 	}

  var nPontos = this.slices * this.stacks;

  this.indices=[];

 	for(var j=0;j<this.stacks;j++){
 		for(var i=0;i<this.slices;i++){
 			this.indices.push((j+1)*this.slices+(i+1)%this.slices);
 			this.indices.push(j*this.slices+i);//+0.5
			this.indices.push(j*this.slices+(i+1)%this.slices);
			this.indices.push((j+1)*this.slices+i);//+0.5
 			this.indices.push(j*this.slices+i);//+0.5
 			this.indices.push((j+1)*this.slices+(i+1)%this.slices);
 		}
 	}


		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
