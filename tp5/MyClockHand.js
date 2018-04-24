
class MyClockHand extends CGFobject{

	constructor(scene, width, height) 
	{
        super(scene);
        this.pointer = new MyQuad(this.scene, 0, 1, 0, 1);
        this.width=width;

    this.height=height;

	this.angle = 0;

	};

	setAngle(angle)
	{
        this.angle = angle;
    };

    getAngle()
	{
        return this.angle;
    };
    
    display(){
        this.scene.pushMatrix();
		this.scene.rotate(this.angle, 0, 0 , 1);
		this.scene.scale(this.width, this.height, 1);
		this.scene.translate(0,0.5,0);
		this.pointer.display();
	this.scene.popMatrix();
    }

};