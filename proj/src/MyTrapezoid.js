/**
 * MyTrapezoid
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTrapezoid extends CGFobject
{
    constructor(scene)
  {
    super(scene);
    this.initBuffers();
  }


initBuffers()
	{
		this.vertices = [
            -3, -0.5, 0,
            3, -0.5, 0,
              2, 0.5, 0,
              -2, 0.5, 0
      
          ];
      
          this.indices = [
            1,2,3,
              0, 1, 3
          ];
      
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
  