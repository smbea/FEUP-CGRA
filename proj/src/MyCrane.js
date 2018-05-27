class MyCrane extends CGFobject{

	constructor(scene)
	{
		super(scene);

    this.cylinder = new MyFullCylinder(this.scene);
		this.body = new MyUnitCubeQuad(this.scene);
		this.car = new MyVehicle(this.scene);

		this.metalDefault = new CGFappearance(this.scene);
		this.metalDefault.setAmbient(0.3,0.3,0.3,1);
		this.metalDefault.setDiffuse(0.8,0.8,0.8,1);
		this.metalDefault.setSpecular(0.3,0.3,0.3,1);
    this.metalDefault.setShininess(100);
		this.metalDefault.loadTexture("../res/metal.jpeg");

		this.turningAppearance = new CGFappearance(this.scene);
    this.turningAppearance.setAmbient(0.3,0.3,0.3,1);
		this.turningAppearance.setDiffuse(0.8,0.8,0.8,1);
		this.turningAppearance.setSpecular(0.3,0.3,0.3,1);
    this.turningAppearance.setShininess(100);
		this.turningAppearance.loadTexture("../res/metal.jpg");

		this.baseAppearance = new CGFappearance(this.scene);
    this.baseAppearance.setAmbient(0.3,0.3,0.3,1);
		this.baseAppearance.setDiffuse(0.3,0.3,0.3,1);
		this.baseAppearance.setSpecular(0.3,0.3,0.3,1);
    this.baseAppearance.setShininess(100);
		this.baseAppearance.loadTexture("../res/metal.jpeg");

		this.magnetppearance = new CGFappearance(this.scene);
    this.magnetppearance.setAmbient(0.3,0.3,0.3,1);
		this.magnetppearance.setDiffuse(0.8,0.8,0.8,1);
		this.magnetppearance.setSpecular(0.3,0.3,0.3,1);
    this.magnetppearance.setShininess(100);
    this.magnetppearance.loadTexture("../res/red.jpg");

		//Variables used for the animation/Diplay

		//Angle by which the entire crane will turn left and right
		this.orientation = 0;
		//Whether the animtion in ON or OFF
		this.moving = false;
		this.firstPillarDegree = Math.PI/5.2;
		this.firstPillarSize = 8;
		this.secondPillarDegree = -Math.PI / 2.5;
		this.secondPillarSize = 4;
		this.stringSize = 2;
		this.secondPillarHeight = 0;

		//Whether the Crane is holding the car or not
		this.hasCar = false;
		//Backwards movement of animation
		this.goBack = false;
		//Stop drawing the car
		this.hideCar = false;
	};

	display()
	{
		this.scene.pushMatrix();
			this.scene.translate(-6,0,-4);

			//Base of Crane
    	this.scene.pushMatrix();
				this.scene.scale(2,1,2);
				this.baseAppearance.apply();
    		this.cylinder.display();
    	this.scene.popMatrix();
			this.scene.translate(0,1,0);

			this.scene.pushMatrix();
				this.scene.rotate(this.orientation,0,1,0);
					this.scene.pushMatrix();
						if(this.hasCar){
							this.car.setY(this.firstPillarSize * Math.cos(this.firstPillarDegree) - this.secondPillarSize * Math.cos(this.secondPillarDegree) - this.stringSize - 2.15);
							this.scene.translate(0,0,this.firstPillarSize * Math.sin(this.firstPillarDegree)- this.secondPillarSize * Math.sin(this.secondPillarDegree) );
							this.car.display();
						}
					this.scene.popMatrix();

					//First Turning Cilinder
					this.scene.pushMatrix();
						this.turningAppearance.apply();
						this.cylinder.display();
    			this.scene.popMatrix();

					this.scene.pushMatrix();
						this.scene.translate(0,0.5,0);
						//First Pillar
							this.scene.pushMatrix();
								this.scene.rotate(this.firstPillarDegree,1,0,0);
								this.scene.scale(0.8,this.firstPillarSize,0.8);
								this.scene.translate(0,0.5,0);
								this.metalDefault.apply();
								this.body.display();
							this.scene.popMatrix();

							//Second Turning Cilinder
							this.scene.pushMatrix();
								this.scene.translate(0,this.firstPillarSize * Math.cos(this.firstPillarDegree),this.firstPillarSize * Math.sin(this.firstPillarDegree));
								this.scene.rotate(Math.PI/2,0,0,1);
								this.scene.scale(0.8,1,0.8);
								this.scene.rotate(-this.secondPillarDegree,0,1,0);
								this.scene.translate(0,-0.5,0);
								this.turningAppearance.apply();
   							this.cylinder.display();
   	 					this.scene.popMatrix();

							//Second Pillar
							this.scene.pushMatrix();
								//this.scene.translate(0,7,8.4);
								this.scene.translate(0,this.firstPillarSize * Math.cos(this.firstPillarDegree),this.firstPillarSize * Math.sin(this.firstPillarDegree));
								this.scene.rotate(this.secondPillarDegree + Math.PI,1,0,0);
								this.scene.scale(0.8,this.secondPillarSize,0.8);
								this.scene.translate(0,0.5,0);
								this.metalDefault.apply();
								this.body.display();
							this.scene.popMatrix();

							//String attached to the magnet
							this.scene.pushMatrix();
	  						this.scene.translate(0,this.firstPillarSize * Math.cos(this.firstPillarDegree) - this.secondPillarSize * Math.cos(this.secondPillarDegree)  ,this.firstPillarSize * Math.sin(this.firstPillarDegree)- this.secondPillarSize * Math.sin(this.secondPillarDegree) );
								this.scene.scale(0.05,this.stringSize,0.05);
								this.scene.translate(0,-1,0);
								this.baseAppearance.apply();
								this.cylinder.display();
							this.scene.popMatrix();

							//Magnet
							this.scene.pushMatrix();
								this.scene.translate(0,this.firstPillarSize * Math.cos(this.firstPillarDegree) - this.secondPillarSize * Math.cos(this.secondPillarDegree) - this.stringSize,this.firstPillarSize * Math.sin(this.firstPillarDegree)- this.secondPillarSize * Math.sin(this.secondPillarDegree) );
								this.scene.scale(1.4,0.5,1.4);
								this.scene.translate(0,-0.5,0);
								this.magnetppearance.apply();
								this.cylinder.display();
							this.scene.popMatrix();

						this.scene.popMatrix();
					this.scene.popMatrix();
				this.scene.popMatrix();

	};
	update(){

		if(this.moving){
			if(!this.goBack){
				this.orientation+= Math.PI/50;
			if(this.orientation > Math.PI){
				this.orientation = Math.PI;

				if(!this.hasCar){
					this.secondPillarDegree += Math.PI/50;
				}
				//Lowering the arm of the crane
				if(this.secondPillarDegree >= -Math.PI / 6 && !this.hasCar){
					this.secondPillarDegree = -Math.PI / 6;
					this.hasCar = true;
				}
				if(this.hasCar){
					this.secondPillarDegree -= Math.PI/100;
					this.car.startCraneMovement();
					this.hideCar = true;
				}
				if(this.secondPillarDegree <=  -Math.PI / 2.5){
					this.secondPillarDegree =  -Math.PI / 2.5;
					this.goBack = true;
				}
			}
		}
				if(this.goBack){
					this.orientation -= Math.PI/50;
					if(this.orientation < 0){
						this.orientation = 0;
						this.hideCar = false;
						this.moving = false;
						this.hasCar = false;
						this.goBack = false;
						this.car.startFalling();
					}
				}
				return this.hideCar;
			}

		}

	pickUp(car){
		this.moving = true;
		this.car = car;
	}


};
