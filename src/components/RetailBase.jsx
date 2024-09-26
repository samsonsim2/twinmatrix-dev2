 
import React, { useEffect, useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { DoubleSide, TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import gsap from "gsap";
 
export function RetailBase({props,cameraState}) {
  const { nodes, materials } = useGLTF('/models/RetailBase.gltf')
  const diffuseMap = useLoader(TextureLoader, '/textures/Retail-01.png')
  diffuseMap.flipY = false
  const mesh = useRef(null)


  const revealRetail = () => {
    gsap.to(mesh.current.position, {
        y:3,        
        duration: 2,
        ease: "power1.inOut",
    });
     
};

const hideRetail = () => {
  gsap.to(mesh.current.position, {
      y:0,        
      duration: 2,
      ease: "power1.inOut",
  });
   
};

useEffect(() => {
  if (cameraState === 3) {
     revealRetail()
  }  
   else{
      hideRetail()
  }

}, [cameraState])

  return (
    <group {...props} dispose={null}>
      <mesh
      scale={25}
        castShadow
        receiveShadow
        geometry={nodes.Retail_Base.geometry}
         ref={mesh}
      ><meshStandardMaterial side={DoubleSide} opacity={1} transparent={true}    /></mesh>
    </group>
  )
}

useGLTF.preload('/models/RetailBase.gltf')
