class MyCrane extends CGFobject{

	constructor(scene)
	{
		super(scene);
    this.cylinder = new MyFullCylinder(this.scene);
		this.body = new MyUnitCubeQuad(this.scene);
		this.orientation = 0;
		this.left = true;
		this.right = false;
		this.moving = false;
	};

	display()
	{
		this.scene.pushMatrix();
		this.scene.translate(-6,0,-4);
		//Base of Crane
    this.scene.pushMatrix();
    this.scene.scale(2,1,2);
    this.cylinder.display();
    this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(this.orientation,0,1,0);

		//First Turning Cilinder
		this.scene.pushMatrix();
		this.scene.translate(0,1,0);
    this.cylinder.display();
    this.scene.popMatrix();

		//First Pillar
		this.scene.pushMatrix();
		this.scene.translate(0,1.8,0);
		this.scene.rotate(Math.PI/8,1,0,0);
		this.scene.scale(0.8,8,0.8);
		this.scene.translate(0,0.5,0);
		this.body.display();
		this.scene.popMatrix();

		//Second Turning Cilinder
		this.scene.pushMatrix();
		this.scene.translate(0.5,9,3);
		this.scene.rotate(Math.PI/2,0,0,1);
		this.scene.scale(0.8,1,0.8);
    this.cylinder.display();
    this.scene.popMatrix();

		//Second Pillar
		this.scene.pushMatrix();
		this.scene.translate(0,7.5,7);
		this.scene.rotate(-Math.PI/2.5,1,0,0);
		this.scene.scale(0.8,4,0.8);
		this.scene.translate(0,0.5,0);
		this.body.display();
		this.scene.popMatrix();

		//String attached to the magnet
		this.scene.pushMatrix();
		this.scene.translate(0,4.5,7);
		this.scene.scale(0.05,2,0.05);
		this.scene.translate(0,0.5,0);
		this.cylinder.display();
		this.scene.popMatrix();

		//Magnet
		this.scene.pushMatrix();
		this.scene.translate(0,5,7);
		this.scene.scale(1.4,0.5,1.4);
		this.scene.translate(0,0.5,0);
		this.cylinder.display();
		this.scene.popMatrix();

		this.scene.popMatrix();
		this.scene.popMatrix();

	};
	update(){
		if(this.moving && this.left){
			this.orientation += Math.PI/50;
		}
		if(this.moving && this.right){
			this.orientation -= Math.PI/50;
		}
		if(this.orientation >= Math.PI){
			this.moving = false;
			this.left = !this.left
			this.right = !this.right;
		}
		if(this.orientation < 0){
			this.moving = false;
			this.left = !this.left;
			this.right = !this.right;
		}
	}

	pickUp(){
		this.moving = true;
	}


};
