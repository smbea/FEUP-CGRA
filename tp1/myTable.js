/**
 * myTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

 class myTable extends CGFobject
 {
 	constructor(scene)
 	{
 		super(scene);
    this.cube=new MyUnitCubeQuad(this.scene);
    this.leg = new myLeg(this.scene);
 	};
  display()
  {
    this.scene.pushMatrix();
    this.scene.scale(5,0.3,3);
    this.scene.translate(0,3.5/0.3,0);
    this.cube.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.leg.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
  }

 };
