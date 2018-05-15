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

		this.Light1=true;
		this.Light2=false;
		this.Light3=false;
		this.Light4=false;
		this.speed=3;
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

		this.floor = new MyTerrain(this);

		// Scene elements
		this.car = new MyVehicle(this);

		// Materials
		this.materialDefault = new CGFappearance(this);

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
		this.lights[0].setVisible(true); // show marker on light position (different from enabled)

		this.lights[1].setPosition(-4, 6.0, -5.0, 1.0);
		this.lights[1].setVisible(true); // show marker on light position (different from enabled)

		this.lights[2].setPosition(-4, 6.0, 5.0, 1.0);
		this.lights[2].setVisible(true);

		//this.lights[1].setVisible(true); // show marker on light position (different from enabled)
		this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
		this.lights[3].setVisible(true); // show marker on light position (different from enabled)

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
		this.lights[2].setConstantAttenuation(0);
	  this.lights[2].setLinearAttenuation(1);
	  this.lights[2].setQuadraticAttenuation(0);
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

		if(this.Light1){
			this.lights[0].enable();
		} else {
			this.lights[0].disable();
		}

		if(this.Light2){
			this.lights[1].enable();
		} else {
			this.lights[1].disable();
		}

		if(this.Light3){
			this.lights[2].enable();
		} else {
			this.lights[2].disable();
		}

		if(this.Light4){
			this.lights[3].enable();
		} else {
			this.lights[3].disable();
		}

		// Update all lights used
		this.updateLights();

		// Draw axis
		//this.axis.display();

		this.materialDefault.apply();

		// ---- END Background, camera and axis setup


		// ---- BEGIN Scene drawing section
		this.car.display();
		this.floor.display();

	};

	doSomething()
	{
		console.log("Doing something...");
	};
};
