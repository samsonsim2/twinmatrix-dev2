 

 
import { useGLTF, useAnimations } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import * as THREE from "three";
import gsap from "gsap";
export default function AnimatedPerson(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/AnimatedPerson .gltf')
  const { actions,names } = useAnimations(animations, group)
const mesh =useRef(null)
  useEffect(()=>{
    console.log(actions)
    console.log(names)
    actions[names[0]].reset().fadeIn(0.5).play()
    gsap.to(mesh.current.material, {
        opacity:1.0,     
        duration: 3,
        ease: "power1.inOut",
    });
  },[])
  return (
    <group ref={group} {...props} dispose={null}         scale={25}>
     <group>
        <mesh
          name="AnimatedPerson_"
          castShadow
          receiveShadow
          geometry={nodes.AnimatedPerson_.geometry}
          ref={mesh}
       
    
         ><meshStandardMaterial color={"blue"} opacity={0.0} transparent={true}/></mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/AnimatedPerson .gltf')