class MyBasicAppearence extends CGFobject
{
	constructor(scene)
	{
        super(scene);

        this.bodyAppearance = new CGFappearance(this.scene);
		this.bodyAppearance.setAmbient(0.8,0.8,0.8,1);
		this.bodyAppearance.setDiffuse(0.8,0.8,0.8,1);
		this.bodyAppearance.setSpecular(0.8,0.8,0.8,1);
		this.bodyAppearance.setShininess(100);
		this.bodyAppearance.loadTexture("../res/navy.jpg");

		this.mirrorAppearance = new CGFappearance(this.scene);
        this.mirrorAppearance.setAmbient(0.8,0.8,0.8,1);
		this.mirrorAppearance.setDiffuse(2,2,2,1);
		this.mirrorAppearance.setSpecular(0.3,0.3,0.3,1);
    this.mirrorAppearance.setShininess(100);
    this.mirrorAppearance.loadTexture("../res/mirror.jpg");


    this.wheelAppearance = new CGFappearance(this.scene);
    this.wheelAppearance.setAmbient(0.3,0.3,0.3,1);
    this.wheelAppearance.setDiffuse(0.8,0.8,0.8,1);
    this.wheelAppearance.setSpecular(0.1,0.1,0.1,1);
    this.wheelAppearance.setShininess(50);
    this.wheelAppearance.loadTexture("../res/wheel.png");

    this.matriculaAppearance = new CGFappearance(this.scene);
    this.matriculaAppearance.setAmbient(0.8,0.8,0.8,1);
		this.matriculaAppearance.setDiffuse(2,2,2,1);
		this.matriculaAppearance.setSpecular(0.3,0.3,0.3,1);
    this.matriculaAppearance.setShininess(100);
    this.matriculaAppearance.loadTexture("../res/plate.png");

        this.initBuffers();
    };
};