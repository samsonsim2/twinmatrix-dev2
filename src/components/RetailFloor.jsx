import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function RetailFloor(props) {
  const { nodes, materials } = useGLTF('/models/RetailFloor.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RetailFloor.geometry}
       
        scale={25}
      ><meshBasicMaterial color={"#cccccc"}/></mesh>
    </group>
  )
}

useGLTF.preload('/models/RetailFloor.gltf')
