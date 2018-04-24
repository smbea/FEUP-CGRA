
class myClock extends CGFobject{

	constructor(scene) 
	{
		super(scene);
		this.cylinder  = new MyCylinder(this.scene,12,1);
		//this.surface = new MyClockSurface(this.scene, slices);
		this.clockAppearence = new CGFappearance(this.scene);
	this.clockAppearence.setAmbient(0.3,0.3,0.3,1);
	this.clockAppearence.setDiffuse(0.8,0.8,0.8,1);
	this.clockAppearence.setSpecular(0.1,0.1,0.1,1);
	this.clockAppearence.setShininess(10);
	this.clockAppearence.loadTexture("resources/images/clock.png");

	};

	display()
	{
		this.cylinder.display();
		this.scene.pushMatrix();
	this.scene.translate(0,0,1);
	this.clockAppearence.apply();
	//this.surface.display();
	this.scene.popMatrix();
	};

};