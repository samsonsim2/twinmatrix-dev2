import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Shelves(props) {
  const { nodes, materials } = useGLTF('/models/Shelves.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shelves.geometry}
        
        scale={25}
      ><meshStandardMaterial color={"f5f5f5"}/></mesh>
    </group>
  )
}

useGLTF.preload('/models/Shelves.gltf')
