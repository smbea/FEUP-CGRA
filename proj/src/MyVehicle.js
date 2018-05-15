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
    this.leftBackWheel = new MyCylinder(this.scene, 20, 8);
    this.rightBackWheel = new MyCylinder(this.scene, 20, 8);
    this.leftFrontWheel = new MyCylinder(this.scene, 20, 8);
    this.rightFrontWheel = new MyCylinder(this.scene, 20, 8);

  }

  display()
	{
        this.scene.pushMatrix();
        this.scene.translate(0,1,-0.5);
        this.scene.translate(-3, 0, 1.5);
        this.leftBackWheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,1,-0.5);
        this.scene.translate(-3, 0, -1.5);
        this.rightBackWheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,1,-0.5);
        this.scene.translate(3, 0, 1.5);
        this.leftBackWheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,1,-0.5);
        this.scene.translate(3, 0, -1.5);
        this.rightBackWheel.display();
        this.scene.popMatrix();


	};
};
