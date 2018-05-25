class MyWheel extends CGFobject{

	constructor(scene)
	{
		super(scene);
		this.cylinder  = new MyCylinder(this.scene,30,1);
        this.surface = new MyPolygon(this.scene,30);
        this.wheelAppearance = new CGFappearance(this.scene);

        this.cylinderAppearance = new CGFappearance(this.scene);
        this.cylinderAppearance.setAmbient(0,0,0,1);
		this.cylinderAppearance.setDiffuse(0,0,0,1);
		this.cylinderAppearance.setSpecular(0.1,0.1,0.1,1);
        this.cylinderAppearance.setShininess(50);
		this.turnAngle = 0;
		this.spinAngle = 0;
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

        this.wheelAppearance.apply();

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.surface.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI, 0,1,0);
        this.surface.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.scene.scale(0.2,0.2,0);
        this.scene.popMatrix();
		this.scene.popMatrix();

	};
	setAngle(angle){
		this.turnAngle = angle;
	}
	setSpinningAngle(angle){
		this.spinAngle = angle;
	}

	setTexture(texture){
		this.wheelAppearance = texture.wheelAppearance;
	}

};
