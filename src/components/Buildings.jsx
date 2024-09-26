
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Buildings(props) {
  const { nodes, materials } = useGLTF('/models/Buildings.gltf')
  return (
    <group {...props} dispose={null} scale={25}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Buildings.geometry}
         
      ><meshStandardMaterial color={"#f5f5f5"}/></mesh>
    </group>
  )
}

useGLTF.preload('/models/Buildings.gltf')
