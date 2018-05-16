/**
 * MyTerrain
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTerrain extends Plane
{
  constructor(scene, nrDivs, altimetry)
  {
    super(scene,nrDivs);
    this.groundAppearance = new CGFappearance(this.scene);
		this.groundAppearance.setAmbient(0.3,0.3,0.3,1);
		this.groundAppearance.setDiffuse(0.8,0.8,0.8,1);
		this.groundAppearance.setSpecular(0.1,0.1,0.1,1);
		this.groundAppearance.setShininess(50);
    this.groundAppearance.loadTexture("../res/floor.png");
    this.altimetry = altimetry;
    this.applyAltimetry();
  }

  applyAltimetry()
  {
    let count = 2;
    for(let i = 0; i< this.altimetry.length; i++){
      for(let j = 0; j < this.altimetry[i].length; j++){
        this.vertices[count] = this.altimetry[i][j];
        count += 3;
      }
    }
    super.initGLBuffers();
  }


  display()
	{
    this.deg2rad=Math.PI/180.0;

    this.scene.pushMatrix();
    this.scene.rotate(-90 * this.deg2rad, 1, 0, 0);
    this.scene.scale(50, 50, 0.2);
    this.groundAppearance.apply();
    super.display();
    this.scene.popMatrix();


	};
};
