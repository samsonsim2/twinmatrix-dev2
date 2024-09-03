 
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GUI } from 'dat.gui'
import * as THREE from "three";
 
export default function Buildings(props) {
  const { nodes, materials } = useGLTF('/models/Buildings.gltf')
  const building1=useRef()
  const  building2=useRef()
  const geometryBaseColor = {
    building1: "#ffffff",
    building2:"#e8f4f7"
  }

  const uniforms= { 
    color: { value: new THREE.Color(geometryBaseColor.hex) }
  }

 
  useEffect(() => {
    const gui =new GUI({
      width : 100
  }); 
    const colorFolder = gui.addFolder("Buildings") 
    const building1Color = colorFolder.addColor(geometryBaseColor, "building1")
    building1Color.onChange((value) => {
      building1.current.material.color = new THREE.Color(value)
    })

    const building2Color = colorFolder.addColor(geometryBaseColor, "building2")
    building2Color.onChange((value) => {
      building2.current.material.color = new THREE.Color(value)
    })


    return () => {
      gui.destroy()
    }
  }, []);
  return (
    <group {...props} dispose={null} scale={0.25}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes['Buildings-Mat3'].geometry}
      ref={building1}
       
     >
      <meshStandardMaterial color={"white"}/>
    </mesh>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes['Buildings-Mat4'].geometry}
      ref={building2}
       
     ><meshStandardMaterial color={"#e8f4f7"}/></mesh>
  </group>
  )
}

useGLTF.preload('/models/Buildings.gltf')
