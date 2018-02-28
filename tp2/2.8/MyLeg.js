/**
 * myLeg
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

 class MyLeg extends CGFobject
 {
 	constructor(scene)
 	{
 		super(scene);
    this.cube=new MyUnitCubeQuad(this.scene);
 	};
  display()
  {
    this.scene.pushMatrix();
    this.scene.scale(0.3,3.5,0.3);
    this.scene.translate(0,0.5,0);
    this.cube.display();
    this.scene.popMatrix();
  }

 };
