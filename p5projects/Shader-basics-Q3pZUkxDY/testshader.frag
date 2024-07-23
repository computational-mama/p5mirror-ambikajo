#ifdef GL_ES
precision mediump float;
#endif
  
uniform vec2 u_resolution;
  
void main() {

    // Make a blue color. In shaders, the RGB color goes from 0 - 1 instead of 0 - 255

    // vec3 color = vec3(0.6, 1.0, 1.0);
    // gl_FragColor = vec4(color, 1.0);

  
  //make gradient in shader with resolution uniform
   vec2 st = gl_FragCoord.xy/u_resolution.xy; 
      
      gl_FragColor = vec4(1.0,st.x,st.y,1.0);
  
}