/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
 
const fragmentShader = `
varying vec2 vUvs; 
uniform float u_time;
uniform vec3 collabColor;
 
 
 
void main() {
  vec3 colorB =  vec3(1.0,1.0,1.0);
   
  vec3 colorA =vec3(0.0,1.0,1.0);



  vec3 blue = vec3(0.784, 0.314, 1);   
  float speed = 1.0;
  float sinWave =   sin(vUvs.x * 10.0 + (u_time * speed) );
  vec3 color = mix(colorA,colorB,sinWave);
  
  gl_FragColor = vec4(color, sinWave + 1.1);
}

`;
 
const vertexShader = `
varying vec2 vUvs; 
void main() {
    vec4 localPosition = vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * localPosition;
    vUvs = uv;
}
`
export  default function AnimatedPath(props) {
  const { nodes, materials } = useGLTF('/models/AnimatedPath.gltf')
  const mesh = useRef()

  const uniforms = useMemo(
    () => ({
        u_time: {
            value: 100.0,
        },
       
    }), []
);
useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
});
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AnimatedPath.geometry}
        material={nodes.AnimatedPath.material}
        scale={25}
        ref={mesh}
      ><shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} transparent={true} opacity={0.2} /></mesh>
    </group>
  )
}

useGLTF.preload('/models/AnimatedPath.gltf')
