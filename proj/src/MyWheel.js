class MyWheel extends CGFobject{

	constructor(scene)
	{
		super(scene);
		this.cylinder  = new MyCylinder(this.scene,20,1);
        this.surface = new MyPolygon(this.scene,20);
        this.surfaceAppearance = new CGFappearance(this.scene);
        this.surfaceAppearance.setAmbient(0.3,0.3,0.3,1);
		this.surfaceAppearance.setDiffuse(0.8,0.8,0.8,1);
		this.surfaceAppearance.setSpecular(0.1,0.1,0.1,1);
		this.surfaceAppearance.setShininess(50);
        this.surfaceAppearance.loadTexture("../res/wheel.png");

        this.cylinderAppearance = new CGFappearance(this.scene);
        this.cylinderAppearance.setAmbient(0,0,0,1);
		this.cylinderAppearance.setDiffuse(0,0,0,1);
		this.cylinderAppearance.setSpecular(0.1,0.1,0.1,1);
        this.cylinderAppearance.setShininess(50);

				this.turnAngle = 0;
				this.spinAngle = 0;
				this.speed = 0;
	};

	display()
	{

        var ang=(2*Math.PI)/180;
				this.scene.pushMatrix();
				 this.scene.rotate(this.turnAngle,0,1,0);
				 this.scene.rotate(this.spinAngle,0,0,1);

        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.cylinderAppearance.apply();
		this.cylinder.display();
		this.scene.scale(0.5,0.5);
        this.scene.popMatrix();


        this.surfaceAppearance.apply();

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.surface.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI, 0,1,0);
        this.surface.display();
        this.scene.popMatrix();

        //tiny wheel
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.scene.scale(0.2,0.2,0.05);
        this.cylinderAppearance.apply();
		this.cylinder.display();
		this.scene.scale(0.5,0.5);
		this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.scene.scale(0.2,0.2,0);
        this.surface.display();
        this.scene.popMatrix();
				this.scene.popMatrix();

	};
	setAngle(angle){
		this.turnAngle = angle;
	}
	setSpinningAngle(angle){
		this.spinAngle = angle;
	}


};
