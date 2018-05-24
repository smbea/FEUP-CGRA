class MyLake extends CGFobject
{
	constructor(scene)
	{
        super(scene);

        this.lake = new MyPolygon(this.scene,20);
        this.angle = 0;

        this.waterAppearence = new CGFappearance(this.scene);
		this.waterAppearence.setAmbient(0.8,0.8,0.8,1);
		this.waterAppearence.setDiffuse(0.8,0.8,0.8,1);
		this.waterAppearence.setSpecular(0.8,0.8,0.8,1);
		this.waterAppearence.setShininess(100);
		this.waterAppearence.loadTexture("../res/water.jpg");

        this.initBuffers();
    };

    display(){
        this.scene.pushMatrix();
		this.scene.translate(10,-0.5,13);
		this.scene.scale(8,1,8);
		this.scene.rotate(-Math.PI/2,1,0,0);
        this.waterAppearence.apply();
        this.scene.rotate(this.angle,0,0,1);
		this.lake.display();
		this.scene.popMatrix();
    };


    setAngle(angle){
        this.angle = angle;
    }

    getAngle(){
        return this.angle;
    }
};