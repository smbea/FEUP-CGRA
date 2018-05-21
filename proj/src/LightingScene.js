var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 60;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

class LightingScene extends CGFscene
{
	constructor()
	{


		super();
	};

	init(application)
	{

		this.altimetry= [[ 30.0 , 20.0 , 5.0, 10.0, 0.0, 0.0, 0.0, 0.0 ],
						[ 0.0 , 25.0 , 15.0, 5.0, 0.0, 0.0, 0.0, 0.0 ],
						[ 0.0 , 0.0 , 0.0, 10.0, 0.0, 0.0, 0.0, 0.0 ],
						[ 0.0 , 0.0 , 0.0, 18.0, 8.0, 0.0, 0.0, 0.0 ],
						[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 25.0, 0.0, 0.0 ],
						[ 0.0 , 0.0 , 0.0,0.0, 0.0, 0.0, 30.0, 0.0 ],
						[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
						[ 5.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 25.0 ],
						[ 10.0 , 15.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
						];

		this.fps = 60;
		this.Light1=true;
		this.Light2=true;
		this.Light3=true;
		this.Light4=true;
		this.acceleration=2.5;
		this.textures = [this.texture1,this.texture2,this.texture3];
		super.init(application);

		this.initCameras();
    	this.enableTextures(true);
		this.initLights();

		this.gl.clearColor(0.431, 0.772, 0.913, 1.0);
		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);

		this.axis = new CGFaxis(this);
		this.axisToggled = false;

		// Scene elements
		this.car = new MyVehicle(this);
		this.s = new MySemisphere(this, 8,20);

		// Materials
		this.materialDefault = new CGFappearance(this);
		this.floor = new MyTerrain(this, 8, this.altimetry);
		this.setUpdatePeriod(1000/this.fps);

	};

	initCameras()
	{
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	initLights()
	{
		this.setGlobalAmbientLight(0,0,0, 1.0);

		// Positions for four lights
		this.lights[0].setPosition(4, 6, -5, 1);
		this.lights[0].setVisible(false); // show marker on light position (different from enabled)

		this.lights[1].setPosition(-4, 6.0, -5.0, 1.0);
		this.lights[1].setVisible(false); // show marker on light position (different from enabled)

		this.lights[2].setPosition(-4, 6.0, 5.0, 1.0);
		this.lights[2].setVisible(false);

		//this.lights[1].setVisible(true); // show marker on light position (different from enabled)
		this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
		this.lights[3].setVisible(false); // show marker on light position (different from enabled)

		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].setSpecular(1,1,0,1);
		this.lights[0].enable();

		this.lights[1].setAmbient(0, 0, 0, 1);
		this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[1].enable();

		this.lights[2].setAmbient(0, 0, 0, 1);
		this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[2].setSpecular(1,1,1,1);
		/*this.lights[2].setConstantAttenuation(0);
	  	this.lights[2].setLinearAttenuation(1);
	  	this.lights[2].setQuadraticAttenuation(0);*/
		this.lights[2].enable();

		this.lights[3].setAmbient(0, 0, 0, 1);
		this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[3].setSpecular(1,1,0,1);
		this.lights[3].setConstantAttenuation(0);
	  	this.lights[3].setLinearAttenuation(0);
	  	this.lights[3].setQuadraticAttenuation(0.2);
		this.lights[3].enable();




	};

	updateLights()
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();
	}

	update(currTime)
	{
			this.checkKeys();
			this.car.update();
	}

	display()
	{
		// ---- BEGIN Background, camera and axis setup

		// Clear image and depth buffer everytime we update the scene
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		// Initialize Model-View matrix as identity (no transformation)
		this.updateProjectionMatrix();
		this.loadIdentity();

		// Apply transformations corresponding to the camera position relative to the origin
		this.applyViewMatrix();
		//Enable Light 1 based on the Inteface Tickboxes
		if(this.Light1){
			this.lights[0].enable();
		} else {
			this.lights[0].disable();
		}
		//Enable Light 2 based on the Inteface Tickboxes
		if(this.Light2){
			this.lights[1].enable();
		} else {
			this.lights[1].disable();
		}
		//Enable Light 3 based on the Inteface Tickboxes
		if(this.Light3){
			this.lights[2].enable();
		} else {
			this.lights[2].disable();
		}
		//Enable Light 4 based on the Inteface Tickboxes
		if(this.Light4){
			this.lights[3].enable();
		} else {
			this.lights[3].disable();
		}

		// Update all lights used
		this.updateLights();

		// Draw axis if it is toggled On
		if(this.axisToggled){
			this.axis.display();
		}

		this.materialDefault.apply();

		// ---- END Background, camera and axis setup


		// ---- BEGIN Scene drawing section
		this.car.display();
		this.floor.display();
		this.s.display();


	};

	ToggleAxis()
	{
		//If the button is pressed switch state
		if(this.axisToggled){
			this.axisToggled = false;
		} else {
			this.axisToggled = true;
		}
	};

	checkKeys()
	{

		if (this.gui.isKeyPressed("KeyW"))
		{
			this.car.accelerate(this.acceleration);
		}
		if (this.gui.isKeyPressed("KeyS"))
		{
			this.car.brake(this.acceleration);
		}
		if (this.gui.isKeyPressed("KeyA"))
		{
			this.car.turnLeft();
		}
		if (this.gui.isKeyPressed("KeyD"))
		{
			this.car.turnRight();
		}
	 }
};
