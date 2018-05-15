class MyWheel extends CGFobject{

	constructor(scene)
	{
		super(scene);
		this.cylinder  = new MyCylinder(this.scene,20,1);
    this.surface = new MyPolygon(this.scene,20);


	};

	display()
	{

        var ang=(2*Math.PI)/180;

        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
		this.cylinder.display();
		this.scene.scale(0.5,0.5);
		this.scene.popMatrix();

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
		this.cylinder.display();
		this.scene.scale(0.5,0.5);
		this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.6);
        this.scene.scale(0.2,0.2,0);
        this.surface.display();
        this.scene.popMatrix();

	};


};
