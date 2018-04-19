/**
 * myLeg
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

 class myLeg extends CGFobject
 {
 	constructor(scene)
 	{
 		super(scene);
    this.cube=new MyUnitCubeQuad(this.scene);
    this.scene.materialMetal = new CGFappearance(this.scene);
    this.scene.materialMetal.setAmbient(0.3,0.3,0.3,1);
    this.scene.materialMetal.setDiffuse(0.4,0.4,0.4,1);
    this.scene.materialMetal.setSpecular(0.8,0.8,0.8,1);
    this.scene.materialMetal.setShininess(400);
 	};
  display()
  {

    this.scene.pushMatrix();
    this.scene.materialMetal.apply();
    this.scene.scale(0.3,3.5,0.3);
    this.scene.translate(0,0.5,0);
    this.cube.display();
    this.scene.popMatrix();
  }

 };
