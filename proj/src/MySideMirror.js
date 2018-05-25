class MySideMirror extends CGFobject
{
	constructor(scene)
	{
		super(scene);
        this.semi = new MySemisphere(this.scene, 20,5);
        this.cylinder = new MyCylinder(this.scene, 20,5);
        this.surface = new MyPolygon(this.scene, 20);

        this.bodyAppearance = new CGFappearance(this.scene);

        this.mirrorAppearance = new CGFappearance(this.scene);

        this.initBuffers();
    };

    display(){
        this.scene.pushMatrix();
        this.scene.scale(0.02,0.02,0.1);
        this.bodyAppearance.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.05,0,0.12);
        this.scene.scale(0.1,0.1,0.12);
        this.scene.rotate(Math.PI/4,0,1,0);
        this.bodyAppearance.apply();
        this.semi.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.05,0,0.12);
        this.scene.scale(0.1,0.1,0.12);
        this.scene.rotate(Math.PI*5/4,0,1,0);
        this.mirrorAppearance.apply();
        this.surface.display();
        this.scene.popMatrix();
    };


    setTexture(texture){
        this.bodyAppearance = texture.bodyAppearance;
      this.mirrorAppearance = texture.mirrorAppearance;
    }
};