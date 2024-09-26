import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function FacilityBase(props) {
  const { nodes, materials } = useGLTF('/models/FacilityBase.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FacilityBase.geometry}
        
        scale={25}
     ><meshStandardMaterial color={"white"} opacity={0.5} transparent={true}/></mesh>
    </group>
  )
}

useGLTF.preload('/models/FacilityBase.gltf')