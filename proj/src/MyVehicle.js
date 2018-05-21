/**
 * MyCar
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyVehicle extends CGFobject
{
  constructor(scene)
  {
    super(scene);
    this.frontWheel = new MyWheel(this.scene);
    this.backWheel = new MyWheel(this.scene);
    this.body = new MyUnitCubeQuad(this.scene);
    this.quad = new MyQuad(this.scene);
    this.triangle = new MyTriangle(this.scene);
    this.headlight = new MySemisphere(this.scene, 20,5);

    this.default = new CGFappearance(this.scene);

    this.bodyAppearance = new CGFappearance(this.scene);
    this.bodyAppearance.setAmbient(0.8,0.8,0.8,1);
		this.bodyAppearance.setDiffuse(1,1,1,1);
		this.bodyAppearance.setSpecular(0.8,0.8,0.8,1);
    this.bodyAppearance.setShininess(100);
    this.bodyAppearance.loadTexture("../res/navy.jpg");

    this.baseAppearance = new CGFappearance(this.scene);
    this.baseAppearance.setAmbient(0.3,0.3,0.3,1);
		this.baseAppearance.setDiffuse(0.1,0.1,0.1,1);
		this.baseAppearance.setSpecular(0.3,0.3,0.3,1);
    this.baseAppearance.setShininess(100);
    this.baseAppearance.loadTexture("../res/metal.jpg");

    this.mirrorAppearance = new CGFappearance(this.scene);
    this.mirrorAppearance.setAmbient(0.8,0.8,0.8,1);
		this.mirrorAppearance.setDiffuse(2,2,2,1);
		this.mirrorAppearance.setSpecular(0.3,0.3,0.3,1);
    this.mirrorAppearance.setShininess(100);
    this.mirrorAppearance.loadTexture("../res/mirror.jpg");

    this.headlightAppearance = new CGFappearance(this.scene);

    //The vehicle position
    this.x = 0;
    this.y = 0;
    this.z = 0;

    //The norm of the speed vector
    this.speed = 0;
    //The angle that the wheels will rotate forward/backward
    this.rotation = 0;
    //The angle that the front wheels rotate in comparison to the vehicle
    this.turn = 0;
    //The orientation of the vehicle relative to the origin
    this.orientation = 0;
  }

  display()
	{
        this.scene.pushMatrix();
        //Translate to the current location
        this.scene.translate(this.x,this.y,this.z);
        //Rotate to the current orientation
        this.scene.rotate(this.orientation,0,1,0);
        this.scene.translate(1.3,0,0);

        //right back wheel
       this.scene.pushMatrix();
       this.scene.translate(0,0.5,0);
       this.scene.translate(-1.6, 0, 1);
       this.scene.scale(0.5,0.5,0.5);
       this.backWheel.display();
       this.scene.popMatrix();

       //left back wheel
       this.scene.pushMatrix();
       this.scene.translate(0,0.5,0);
       this.scene.translate(-1.6, 0, -1);
       this.scene.scale(0.5,0.5,0.5);
       this.backWheel.display();
       this.scene.popMatrix();

        //left front wheel
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.translate(1.2, 0,1);
        this.scene.scale(0.5,0.5,0.5);
        this.frontWheel.display();
        this.scene.popMatrix();

        //right front wheel
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.translate(1.2, 0, -1);
        this.scene.scale(0.5,0.5,0.5);
        this.frontWheel.display();
        this.scene.popMatrix();

        //body
        //Base of the car
        this.scene.pushMatrix();
        this.scene.translate(-0.3,0.8,0);
        this.scene.scale(4.55,0.5,2.05);
        this.baseAppearance.apply();
        this.body.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.35,1.2,0);
        this.scene.scale(4,0.001,1.8);
        this.bodyAppearance.apply();
        this.body.display();
        this.scene.popMatrix();

        //Bumper
        this.scene.pushMatrix();
        this.scene.translate(1.25,1.3,0);
        this.scene.scale(1.4,0.8,2);
        this.bodyAppearance.apply();
        this.body.display();
        this.scene.popMatrix();

        //Main Block of the car
        this.scene.pushMatrix();
        this.scene.translate(0,1.7,0);
        this.scene.scale(1.2,1.4,2);
        this.body.display();
        this.scene.popMatrix();
        
        //right side of trunk
        this.scene.pushMatrix();
        this.scene.translate(-1.4,1.2,-0.2*(1/0.2)+0.1);
        this.scene.scale(2.23,1,0.2);
        this.body.display();
        this.scene.popMatrix();
        
        //left side of trunk
        this.scene.pushMatrix();
        this.scene.translate(-1.4,1.2,+0.2*(1/0.2)-0.1);
        this.scene.scale(2.23,1,0.2);
        this.body.display();
        this.scene.popMatrix();
       
        //back side of trunk
        this.scene.pushMatrix();
        this.scene.translate(-2.45,1.2,0);
        this.scene.scale(0.2,1,2);
        this.body.display();
        this.scene.popMatrix();

        //front
        this.scene.pushMatrix();
        this.scene.translate(0.95,2.05,0);
        this.scene.rotate(Math.PI/2, 0,1,0);
        this.scene.rotate(-Math.PI/4, 1,0,0);
        this.scene.scale(2,1,0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.96,2.06,0);
        this.scene.rotate(Math.PI/2, 0,1,0);
        this.scene.rotate(-Math.PI/4, 1,0,0);
        this.scene.scale(1.9,0.9,0);
        this.mirrorAppearance.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.6,1.35,1);
        this.scene.scale(0.7,0.7,0);
        this.bodyAppearance.apply();
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.63,1.4,1.01);
        this.scene.scale(0.64,0.64,0);
        this.mirrorAppearance.apply();
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,1,0,0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.scene.translate(1.7,0.25,1);
        this.scene.scale(0.7,0.7,0);
        this.bodyAppearance.apply();
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,1,0,0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.scene.translate(1.72,0.3,1.01);
        this.scene.scale(0.64,0.64,0);
        this.mirrorAppearance.apply();
        this.triangle.display();
        this.scene.popMatrix();

        //headlights
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.translate(-0.8,1.5,1.9);
        this.scene.scale(0.15,0.15,0.15);
        this.headlightAppearance.apply();
        this.headlight.display();
        this.scene.popMatrix();

        //headlights
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.translate(0.8,1.5,1.9);
        this.scene.scale(0.15,0.15,0.15);
        this.headlightAppearance.apply();
        this.headlight.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
        };


    update(){
      //Calculates the speed in the x axis
      this.x += this.speed * Math.cos(this.orientation);
      //Calculate the speed in the z axis
      this.z += this.speed * Math.sin(-this.orientation);
      //The orientation of the vehicle will depend on the angle of the wheels and its speed
      this.orientation += this.turn * this.speed * 0.3;
      //Calculates how many degrees in radians the wheel must turn relative to the speed
      this.rotation += 2 * this.speed;
      //Set the spinning angle of all wheels
      this.backWheel.setSpinningAngle(-this.rotation);
      this.frontWheel.setSpinningAngle(-this.rotation);
      //Set the angle that the front wheels turn relative to the vehicle
      this.frontWheel.setAngle(this.turn);
      //Resets the wheels gradually if the car is not turning
      if(this.turn > 0){
        this.turn -= Math.PI / 50;
      }
      if(this.turn < 0){
        this.turn += Math.PI / 50;
      }

    }
    accelerate(acel){
      this.speed += 0.005*acel;
      //Maximum speed of the car
      if(this.speed >= 0.7){
        this.speed = 0.7;
      }
    }
    brake(acel){
      this.speed += -0.005*acel;
      //Maximum speed of the car when moving backwards
      if(this.speed <= -0.4){
        this.speed = -0.4;
      }
    }
    turnLeft(){
      this.turn += (Math.PI / 10);
      //Wheels should not turn more than 60 degrees
      if(this.turn >= Math.PI/3){
        this.turn = Math.PI/3;
      }
    }
    turnRight(){
      this.turn -= (Math.PI / 10);
      //Wheels should not turn more than 60 degrees
      if(this.turn <= -Math.PI/3){
        this.turn = -Math.PI/3;
      }
    }
};
