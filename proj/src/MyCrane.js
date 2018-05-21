class MyCrane extends CGFobject{

	constructor(scene)
	{
		super(scene);
    this.cylinder = new MyFullCylinder(this.scene);
		this.body = new MyUnitCubeQuad(this.scene);
	};

	display()
	{
    //Base of Crane
    this.scene.pushMatrix();
    this.scene.scale(2,1,2);
    this.cylinder.display();
    this.scene.popMatrix();

		//First Turning Cilinder
		this.scene.pushMatrix();
		this.scene.translate(0,1,0);
    this.cylinder.display();
    this.scene.popMatrix();

		//First Pillar
		this.scene.pushMatrix();
		this.scene.translate(0,1.8,0);
		this.scene.rotate(Math.PI/8,1,0,0);
		this.scene.scale(0.8,8,0.8);
		this.scene.translate(0,0.5,0);
		this.body.display();
		this.scene.popMatrix();

		//Second Turning Cilinder
		this.scene.pushMatrix();
		this.scene.translate(0.5,9,3);
		this.scene.rotate(Math.PI/2,0,0,1);
		this.scene.scale(0.8,1,0.8);
    this.cylinder.display();
    this.scene.popMatrix();

		//Second Pillar
		this.scene.pushMatrix();
		this.scene.translate(0,7,5);
		this.scene.rotate(-Math.PI/4,1,0,0);
		this.scene.scale(0.8,3,0.8);
		this.scene.translate(0,0.5,0);
		this.body.display();
		this.scene.popMatrix();

		//String attached to the magnet
		this.scene.pushMatrix();
		this.scene.translate(0,4.1,5);
		this.scene.scale(0.05,2,0.05);
		this.scene.translate(0,0.5,0);
		this.cylinder.display();
		this.scene.popMatrix();

		//Magnet
		this.scene.pushMatrix();
		this.scene.translate(0,4.5,5);
		this.scene.scale(1,0.5,1);
		this.scene.translate(0,0.5,0);
		this.cylinder.display();
		this.scene.popMatrix();

	};

};
