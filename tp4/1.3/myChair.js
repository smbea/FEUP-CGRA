/**
 * myLeg
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

 class myChair extends CGFobject
 {
 	constructor(scene)
 	{
 		super(scene);
    this.cube = new MyUnitCubeQuad(this.scene);
    this.leg = new myLeg(this.scene);
    this.scene.materialWood = new CGFappearance(this.scene);
    this.scene.materialWood.setAmbient(0.3,0.3,0.3,1);
    this.scene.materialWood.setDiffuse(0.6,0.3,0,1);
    this.scene.materialWood.setSpecular(0.1,0.1,0.1,1);
    this.scene.materialWood.setShininess(50);
 	};
  display()
  {
    this.deg2rad=Math.PI/180.0;

    this.scene.pushMatrix();
    this.scene.translate(-1,0,1);
    this.scene.scale(1,1.3,1);
    this.leg.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(1,0,1);
    this.scene.scale(1,1.3,1);
    this.leg.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-1,0,-1);
    this.scene.scale(1,0.7,1);
    this.leg.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(1,0,-1);
    this.scene.scale(1,0.7,1);
    this.leg.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(1,0,-1);
    this.scene.scale(1,0.7,1);
    this.leg.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(90 * this.deg2rad, 0,0,1);
    this.scene.scale(0.5,0.658,1)
    this.scene.translate(9,-1.75,1);5
    this.leg.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.materialWood.apply();
    this.scene.translate(0,2.5,0);
    this.scene.scale(2 + 0.5 * (0.3 * 2),0.5,2 + 0.5 * (0.3 * 2));
    this.cube.display();
    this.scene.popMatrix();
  }

 };
