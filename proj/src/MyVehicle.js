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
    this.wheel = new MyWheel(this.scene);
    this.body = new MyUnitCubeQuad(this.scene);

  }

  display()
	{
      //left back wheel
        this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.scene.translate(-2.5, 0, 1.5);
        this.wheel.display();
        this.scene.popMatrix();

        //right back wheel
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,1,0);
        this.scene.translate(2.5, 0, 1.5);
        this.wheel.display();
        this.scene.popMatrix();

        //left front wheel 
        this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.scene.translate(2.5, 0,1.5);
        this.wheel.display();
        this.scene.popMatrix();

        //right front wheel
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,1,0);
        this.scene.translate(-2.5, 0, 1.5);
        this.wheel.display();
        this.scene.popMatrix();

        //body
        this.scene.pushMatrix();
        this.scene.scale(9,2,3.5);
        this.scene.translate(0,1,0);
        this.body.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.75,3.5,0);
        this.scene.scale(7,2,3); 
        this.body.display();
        this.scene.popMatrix();
      	};
};
