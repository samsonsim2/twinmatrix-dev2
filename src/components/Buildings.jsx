
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GUI } from 'dat.gui'
import * as THREE from "three";
 
export default function Buildings(props) {
  const { nodes, materials } = useGLTF('/models/Buildings.gltf')
  const building = useRef()
  const geometryBaseColor = {
    buildings: "#f5f5f5",

}

const uniforms = {
    color: { value: new THREE.Color(geometryBaseColor.hex) }
}


useEffect(() => {
    const gui = new GUI({
        width: 100
    });
    const colorFolder = gui.addFolder("Buildings")
    const buildingColor = colorFolder.addColor(geometryBaseColor, "buildings")
   buildingColor.onChange((value) => {
        building.current.material.color = new THREE.Color(value)
    })




    return () => {
        gui.destroy()
    }
}, []);

  return (
    <group {...props} dispose={null} scale={25}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Buildings.geometry}
        ref={building}
         
      ><meshStandardMaterial color={"#f5f5f5"}/></mesh>
    </group>
  )
}

useGLTF.preload('/models/Buildings.gltf')
