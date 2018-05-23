class MyCrane extends CGFobject{

	constructor(scene)
	{
		super(scene);
    this.cylinder = new MyFullCylinder(this.scene);
		this.body = new MyUnitCubeQuad(this.scene);
		this.orientation = 0;
		this.leftAnimation = true;
		this.rightAnimation = false;
		this.moving = false;
		this.firstPillarDegree = Math.PI/5.2;
		this.firstPillarSize = 8;
		this.secondPillarDegree = -Math.PI / 2.5;
		this.secondPillarSize = 4;
		this.stringSize = 2;
		//END this.secondPillarDegree = -Math.PI / 6
		this.secondPillarHeight = 0;
		this.hasCar = false;
	};

	display()
	{
		this.scene.pushMatrix();
		//this.scene.translate(-6,0,-4);
		//Base of Crane
    this.scene.pushMatrix();
    this.scene.scale(2,1,2);
    this.cylinder.display();
    this.scene.popMatrix();
		this.scene.translate(0,1,0);

		this.scene.pushMatrix();
		this.scene.rotate(this.orientation,0,1,0);

		//First Turning Cilinder
		this.scene.pushMatrix();
    this.cylinder.display();
    this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.5,0);
		//First Pillar
		this.scene.pushMatrix();
		this.scene.rotate(this.firstPillarDegree,1,0,0);
		this.scene.scale(0.8,this.firstPillarSize,0.8);
		this.scene.translate(0,0.5,0);
		this.body.display();
		this.scene.popMatrix();

		//Second Turning Cilinder
		this.scene.pushMatrix();
		this.scene.translate(0,this.firstPillarSize * Math.cos(this.firstPillarDegree),this.firstPillarSize * Math.sin(this.firstPillarDegree));
		this.scene.rotate(Math.PI/2,0,0,1);
		this.scene.scale(0.8,1,0.8);
		this.scene.translate(0,-0.5,0);
    this.cylinder.display();
    this.scene.popMatrix();

		//Second Pillar
		this.scene.pushMatrix();
		//this.scene.translate(0,7,8.4);
		this.scene.translate(0,this.firstPillarSize * Math.cos(this.firstPillarDegree),this.firstPillarSize * Math.sin(this.firstPillarDegree));
		this.scene.rotate(this.secondPillarDegree + Math.PI,1,0,0);
		this.scene.scale(0.8,this.secondPillarSize,0.8);
		this.scene.translate(0,0.5,0);
		this.body.display();
		this.scene.popMatrix();

		//String attached to the magnet
		this.scene.pushMatrix();
	  this.scene.translate(0,this.firstPillarSize * Math.cos(this.firstPillarDegree) - this.secondPillarSize * Math.cos(this.secondPillarDegree)  ,this.firstPillarSize * Math.sin(this.firstPillarDegree)- this.secondPillarSize * Math.sin(this.secondPillarDegree) );
		this.scene.scale(0.05,this.stringSize,0.05);
		this.scene.translate(0,-1,0);
		this.cylinder.display();
		this.scene.popMatrix();

		//Magnet
		this.scene.pushMatrix();
		 this.scene.translate(0,this.firstPillarSize * Math.cos(this.firstPillarDegree) - this.secondPillarSize * Math.cos(this.secondPillarDegree) - this.stringSize,this.firstPillarSize * Math.sin(this.firstPillarDegree)- this.secondPillarSize * Math.sin(this.secondPillarDegree) );
		this.scene.scale(1.4,0.5,1.4);
		this.scene.translate(0,-0.5,0);
		this.cylinder.display();
		this.scene.popMatrix();

		this.scene.popMatrix();
		this.scene.popMatrix();
		this.scene.popMatrix();

	};
	update(){
		if(this.moving){
			this.orientation+= Math.PI/50;
			if(this.orientation > Math.PI){
				this.orientation = Math.PI;
				this.secondPillarDegree += Math.PI/50;
				if(this.secondPillarDegree >= -Math.PI / 6){
					this.secondPillarDegree = -Math.PI / 6;
				}

			}

		}
	}

	pickUp(){
		this.moving = true;
	}


};
