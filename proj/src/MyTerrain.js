/**
 * MyTerrain
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTerrain extends CGFobject
{
  constructor(scene)
  {
    super(scene);
    this.floor = new Plane(this.scene, 100, 0, 6, 0, 6);
  }

  display()
	{
    this.deg2rad=Math.PI/180.0;

    this.scene.pushMatrix();
    this.scene.rotate(-90 * this.deg2rad, 1, 0, 0);
    this.scene.scale(50, 50, 0.2);
    //this.groundAppearance.apply();
    this.floor.display();
    this.scene.popMatrix();


	};
};
