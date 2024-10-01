import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function SecondaryTrees(props) {
  const { nodes, materials } = useGLTF('/models/SecondaryTrees.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SecondaryTrees.geometry}
        
        scale={25}
        position={[0, 0.3, 0]}
    ><meshStandardMaterial color={"#c5d388"} /></mesh>
    </group>
  )
}

useGLTF.preload('/models/SecondaryTrees.gltf')
