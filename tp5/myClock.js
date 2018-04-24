
class myClock extends CGFobject{

	constructor(scene) 
	{
		super(scene);
		this.cylinder  = new MyCylinder(this.scene,12,1);
		this.surface = new MyPolygon(this.scene,12);
		this.clockAppearence = new CGFappearance(this.scene);
		this.hours = new MyClockHand(this.scene, 0.025, 0.5);

	this.minutes = new MyClockHand(this.scene, 0.025, 0.6);
	this.seconds = new MyClockHand(this.scene, 0.0125, 0.8);
	this.hours.setAngle(Math.PI/2);
	this.minutes.setAngle(Math.PI);
	this.seconds.setAngle(3*Math.PI/2);

	this.materialBlackPointer = new CGFappearance(this.scene);
	this.materialBlackPointer.setSpecular(0,0,0,1);
	this.materialBlackPointer.setShininess(1);
	this.materialBlackPointer.setDiffuse(0,0,0,1);

	this.materialYellowPointer = new CGFappearance(this.scene);
	this.materialYellowPointer.setSpecular(1,1,0,1);
	this.materialYellowPointer.setShininess(1);
	this.materialYellowPointer.setDiffuse(1,1,0,1);

	this.clockAppearence.setAmbient(0.3,0.3,0.3,1);
	this.clockAppearence.setDiffuse(0.8,0.8,0.8,1);
	this.clockAppearence.setSpecular(0.1,0.1,0.1,1);
	this.clockAppearence.setShininess(10);
	this.clockAppearence.loadTexture("resources/images/clock.png");

	};

	display()
	{
		this.scene.pushMatrix();
		this.cylinder.display();
		this.scene.scale(0.5,0.5);
		this.scene.popMatrix();
	this.hours.display();
	this.minutes.display();
	this.seconds.display();

	this.scene.pushMatrix();

		this.materialYellowPointer.apply();
		this.hours.display();
		this.materialBlackPointer.apply();
		this.minutes.display();
		this.seconds.display();
		this.clockAppearence.apply();
		this.surface.display();
	this.scene.popMatrix();
	};

	update(currTime) {
	
		this.timeToSetAngle = (currTime - this.timeSinceUpdate) + this.timeToSetAngle;
		this.timeSinceUpdate = currTime;
	
		//console.log(this.timeToSetAngle);
		
		if(this.timeToSetAngle >= 1000){
			this.timeToSetAngle -= 1000;
			this.hours.setAngle(this.hours.getAngle() - (((2*Math.PI)/60)/60)/60);
			this.minutes.setAngle(this.minutes.getAngle() - ((2*Math.PI)/60)/60);
			this.seconds.setAngle(this.seconds.getAngle() - (2*Math.PI)/60);
		}
	};

};