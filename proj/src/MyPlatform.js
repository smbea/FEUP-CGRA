class MyPlatform extends CGFobject{

	constructor(scene)
	{
		super(scene);
    this.cylinder = new MyCylinder(this.scene,20,1);
    this.top = new MyPolygon(this.scene,30);
	};

	display()
	{
    //Base of Crane
    this.scene.pushMatrix();
    this.scene.translate(0,0.1,0);
    this.scene.scale(2.5,1,2.5);
    this.scene.rotate(Math.PI / 2, 1, 0, 0);
    this.cylinder.display();
    this.scene.pushMatrix();
    this.scene.translate(0,0,1);
    this.top.display()
    this.scene.popMatrix();
    this.scene.rotate(Math.PI,1,0,0);
    this.top.display();
    this.scene.popMatrix();
	};

};
