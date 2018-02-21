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
				-0.5, 0.5, -0.5,
				0.5, -0.5, -0.5,
				0.5, 0.5, -0.5,
        -0.5, -0.5, 0.5,
				-0.5, 0.5, 0.5,
				0.5, -0.5, 0.5,
				0.5, 0.5, 0.5,
				];

		this.indices = [
				1,2,0,
        1,3,2,

        3,7,2,
        2,7,6,

        1,7,3,
        1,5,7,

        7,4,6,
        5,4,7,

        2,6,0,
        0,6,4,

        4,5,1,
        1,0,4

			];

		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
