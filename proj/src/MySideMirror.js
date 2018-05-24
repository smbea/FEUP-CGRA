class MySideMirror extends CGFobject
{
	constructor(scene)
	{
		super(scene);
        this.semi = new MySemisphere(this.scene, 20,5);
        this.cylinder = new MyCylinder(this.scene, 20,5);
        this.surface = new MyPolygon(this.scene, 20);

        this.bodyAppearance = new CGFappearance(this.scene);
        this.bodyAppearance.setAmbient(0.8,0.8,0.8,1);
		this.bodyAppearance.setDiffuse(1,1,1,1);
		this.bodyAppearance.setSpecular(0.8,0.8,0.8,1);
        this.bodyAppearance.setShininess(100);
        this.bodyAppearance.loadTexture("../res/navy.jpg");

        this.mirrorAppearance = new CGFappearance(this.scene);
        this.mirrorAppearance.setAmbient(0.8,0.8,0.8,1);
        this.mirrorAppearance.setDiffuse(2,2,2,1);
        this.mirrorAppearance.setSpecular(0.3,0.3,0.3,1);
        this.mirrorAppearance.setShininess(100);
        this.mirrorAppearance.loadTexture("../res/mirror.jpg");

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
        this.bodyAppearance=texture;
    }
};