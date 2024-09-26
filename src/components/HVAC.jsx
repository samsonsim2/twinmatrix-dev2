
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function HVAC(props) {
  const { nodes, materials } = useGLTF('/models/HVAC .gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HVAC_.geometry}
        material={materials['Mat.6']}
        scale={25}
      />
    </group>
  )
}

useGLTF.preload('/models/HVAC .gltf')