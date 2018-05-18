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

    this.bodyAppearance = new CGFappearance(this.scene);
    this.bodyAppearance.setAmbient(0.3,0.3,0.3,1);
		this.bodyAppearance.setDiffuse(0.8,0.8,0.8,1);
		this.bodyAppearance.setSpecular(0.3,0.3,0.3,1);
    this.bodyAppearance.setShininess(100);
    this.bodyAppearance.loadTexture("../res/navy.jpg");

    this.x = 0;
    this.y = 0;
    this.z = 0;

    this.speed = 0;
    this.rotation = 0;
    this.turn = 0;
    this.orientation = 0;
  }

  display()
	{
        this.scene.pushMatrix();
        this.scene.translate(this.x,this.y,this.z);
        this.scene.rotate(this.orientation,0,1,0);
        this.scene.translate(1.3,0,0);

       //right back wheel
       this.scene.pushMatrix();
       this.scene.translate(0,0.5,0);
       this.scene.translate(-1.2, 0, 1);
       this.scene.scale(0.5,0.5,0.5);
       this.backWheel.display();
       this.scene.popMatrix();

       //left back wheel
       this.scene.pushMatrix();
       this.scene.translate(0,0.5,0);
       this.scene.translate(-1.2, 0, -1);
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
        this.scene.pushMatrix();
        this.scene.scale(4,1.2,2);
        this.scene.translate(0,1,0);
        this.bodyAppearance.apply();
        this.body.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5,2,0);
        this.scene.scale(2.5,0.8,1.5);
        this.body.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        };
        
        
    update(){
      this.x += this.speed * Math.cos(this.orientation);
      this.z += this.speed * Math.sin(-this.orientation);
      this.orientation += this.turn * this.speed * 0.3;
      this.rotation += 2 * this.speed;
      this.backWheel.setSpinningAngle(this.rotation);
      this.frontWheel.setSpinningAngle(this.rotation);
      this.frontWheel.setAngle(this.turn);
      if(this.turn > 0){
        this.turn -= Math.PI / 50;
      }
      if(this.turn < 0){
        this.turn += Math.PI / 50;
      }

    }
    accelerate(acel){
      this.speed += 0.005*acel;
      if(this.speed >= 0.7){
        this.speed = 0.7;
      }
    }
    brake(acel){
      this.speed += -0.005*acel;
      if(this.speed <= -0.4){
        this.speed = -0.4;
      }
    }
    turnLeft(){
      this.turn += (Math.PI / 10);
      if(this.turn >= Math.PI/3){
        this.turn = Math.PI/3;
      }
    }
    turnRight(){
      this.turn -= (Math.PI / 10);
      if(this.turn <= -Math.PI/3){
        this.turn = -Math.PI/3;
      }
    }
};
