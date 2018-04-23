/**
 * myTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

 class MyTable extends CGFobject
 {
 	constructor(scene)
 	{
 		super(scene);
    this.cube=new MyUnitCubeQuad(this.scene);
    this.leg = new myLeg(this.scene);

    this.scene.materialWood = new CGFappearance(this.scene);
    this.scene.materialWood.setAmbient(0.3,0.3,0.3,1);
    this.scene.materialWood.setDiffuse(0.6,0.3,0,1);
    this.scene.materialWood.setSpecular(0.1,0.1,0.1,1);
    this.scene.materialWood.setShininess(50);

    this.scene.tableAppearance = new CGFappearance(this.scene);
    this.scene.tableAppearance.setAmbient(0.3,0.3,0.3,1);
    this.scene.tableAppearance.setDiffuse(0.6,0.3,0,1);
    this.scene.tableAppearance.setSpecular(0.1,0.1,0.1,1);
    this.scene.tableAppearance.setShininess(50);
    this.scene.tableAppearance.loadTexture("resources/images/table.png");
 	};
  display()
  {

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

    this.scene.pushMatrix();
  //  this.scene.materialWood.apply();
    this.scene.tableAppearance.apply();
    this.scene.translate(0,3.5,0);
    this.scene.scale(5,0.3,3);
    this.scene.translate(0,0.5,0);
    this.cube.display();
    this.scene.popMatrix();
  }

 };
