/**
 * MyTerrain
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTerrain extends Plane
{
  constructor(scene)
  {
    super(scene,100,0,6,0,6);
  }

  display()
	{
    this.deg2rad=Math.PI/180.0;

    this.scene.pushMatrix();
    this.scene.rotate(-90 * this.deg2rad, 1, 0, 0);
    this.scene.scale(50, 50, 0.2);
    //this.groundAppearance.apply();
    super.display();
    this.scene.popMatrix();


	};
};
