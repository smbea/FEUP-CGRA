/**
 * MyTrapezoid
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTrapezoid extends CGFobject
{
	constructor(scene, side, minS, maxS, minT, maxT)
	{
		super(scene);
		this.minS = minS || 0;
        this.maxS = maxS || 1;
        this.minT = minT || 0;
        this.maxT = maxT || 1;
        this.side = side;
		this.initBuffers();
	};

	initBuffers()
	{
		this.vertices = [
            -3, -0.5, 0,
            3, -0.5, 0,
            0.9, 0.5, 0,
            -3, 0.5, 0
          ];

          if(this.side == 1){

          this.indices = [
            3,2,1,
            3, 1, 0
          ];
        }else {
            this.indices = [
                1,2,3,
                0, 1, 3
              ];
        }

          this.normals = [
              0, 0, 1,
              0, 0, 1,
              0, 0, 1,
              0, 0, 1
          ];

          this.texCoords = [
              0,1,
              1,1,
              5/6,0,
              1/6,0
          ];

		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
