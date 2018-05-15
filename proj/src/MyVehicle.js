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

  }

  display()
	{
      //left back wheel
        this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.scene.translate(-3, 0, 1.5);
        this.wheel.display();
        this.scene.popMatrix();

        //right back wheel
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,1,0);
        this.scene.translate(3, 0, 1.5);
        this.wheel.display();
        this.scene.popMatrix();

        //left front wheel 
        this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.scene.translate(3, 0,1.5);
        this.wheel.display();
        this.scene.popMatrix();

        //right front wheel
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,1,0);
        this.scene.translate(-3, 0, 1.5);
        this.wheel.display();
        this.scene.popMatrix();


	};
};
