/**
 * MyUnitCube
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
 class MyUnitCube extends CGFobject
 {
 	constructor(scene)
 	{
 		super(scene);
 		this.initBuffers();
 	};

 	initBuffers()
 	{
 		this.vertices = [
 				-0.5, -0.5, -0.5,
 				0.5, -0.5, -0.5,
 				0.5, 0.5, -0.5,
 				-0.5, 0.5, -0.5,
        -0.5, -0.5, 0.5,
 				0.5, -0.5, 0.5,
 				0.5, 0.5, 0.5,
 				-0.5, 0.5, 0.5,
 				];

 		this.indices = [
        //
 				2,1,0,
        0,3,2,
        //
        4,5,6,
        6,7,4,
        //
        2,3,7,
        6,2,7,
        //
        4,3,0,
        7,3,4,
        //
        1,2,6,
        5,1,6,
        //
        5,0,1,
        5,4,0,

 			];

 		this.primitiveType=this.scene.gl.TRIANGLES;
 		this.initGLBuffers();
 	};
 };
