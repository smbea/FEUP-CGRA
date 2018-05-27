class MyInterface extends CGFinterface {


	/**
	 * MyInterface
	 * @constructor
	 */
 	constructor () {
 		super();
 	}

	/**
	 * init
	 * @param {CGFapplication} application
	 */
	init(application) {
		// call CGFinterface init
		super.init(application);

		// init GUI. For more information on the methods, check:
		//  http://workshop.chromeexperiments.com/examples/gui

		this.gui = new dat.GUI();

		var group=this.gui.addFolder("Lights Options");
		group.open();

    //Adding Elements to the Interface

		group.add(this.scene, 'Light1');
		group.add(this.scene, 'Light2');
    group.add(this.scene, 'Light3');
    group.add(this.scene, 'Light4');

		this.gui.add(this.scene, 'acceleration', 1, 5);
		this.gui.add(this.scene, 'ToggleAxis');
    this.gui.add(this.scene, 'carTexture',['basic','wood','holographic']);

    this.initKeys();

		return true;
	};

	/**
	 * processKeyboard
	 * @param event {Event}
	 */
   initKeys() {
     this.scene.gui=this;
     this.processKeyboard=function(){};
     this.activeKeys={};
   }
   processKeyDown(event) {
     this.activeKeys[event.code]=true;
   };
   processKeyUp(event) {
     this.activeKeys[event.code]=false;
   };
   isKeyPressed(keyCode) {
     return this.activeKeys[keyCode] || false;
   }
};
