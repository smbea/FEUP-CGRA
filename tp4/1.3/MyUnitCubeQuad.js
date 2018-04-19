/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

 class MyUnitCubeQuad extends CGFobject
 {
 	constructor(scene)
 	{
 		super(scene);
    this.quad=new MyQuad(this.scene);
    this.quad.initBuffers();
 	};
  display()
  {
    this.deg2rad=Math.PI/180.0;
    this.scene.pushMatrix();
    this.scene.translate(0,0,0.5);
    this.quad.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0,0,-0.5);
    this.scene.rotate(180.0 * this.deg2rad,0,1,0);
    this.quad.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0,0.5,0);
    this.scene.rotate(270.0*this.deg2rad,1,0,0);
    this.quad.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0,-0.5,0);
    this.scene.rotate(90.0*this.deg2rad,1,0,0);
    this.quad.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-0.5,0,0);
    this.scene.rotate(270.0*this.deg2rad,0,1,0);
    this.quad.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0.5,0,0);
    this.scene.rotate(90.0*this.deg2rad,0,1,0);
    this.quad.display();
    this.scene.popMatrix();
  }

 };
