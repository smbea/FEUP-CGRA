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
    this.scene.translate(0,3.5+0.15,0);
    this.scene.scale(5,0.3,3);
    this.cube.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(2.5-0.15,0,-1.5+0.15);
    this.leg.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(2.5-0.15,0,1.5-0.15);
    this.leg.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-2.5+0.15,0,1.5-0.15);
    this.leg.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-2.5+0.15,0,-1.5+0.15);
    this.leg.display();
    this.scene.popMatrix();
  }

 };
