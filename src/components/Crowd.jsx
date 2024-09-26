import React, { useRef } from 'react'
import { SpriteAnimator, useGLTF } from '@react-three/drei'
 
export default function Crowd(props) {
    const { nodes, materials } = useGLTF('/models/Crowd.gltf')
    return (<>
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crowd.geometry}
                material={nodes.Crowd.material}
                scale={25}
            ><meshStandardMaterial color={"blue"} /></mesh>
        </group>
        <SpriteAnimator
            position={[3.25, 0.2,1.1]}

            scale={0.1}
            startFrame={0}
            scaleFactor={0.01}
            autoPlay={true}
            loop={true}
            numberOfFrames={1}
            textureImageURL={'/textures/customers-03.png'}
        />
        
        <SpriteAnimator
            position={[3.3, 0.2,0.38]}

            scale={0.1}
            startFrame={0}
            scaleFactor={0.01}
            autoPlay={true}
            loop={true}
            numberOfFrames={1}
            textureImageURL={'/textures/customers-03.png'}
        />
        
        
        <SpriteAnimator
            position={[3.85, 0.2,0.6]}

            scale={0.1}
            startFrame={0}
            scaleFactor={0.01}
            autoPlay={true}
            loop={true}
            numberOfFrames={1}
            textureImageURL={'/textures/customers-04.png'}
        /></>


    )
}

useGLTF.preload('/models/Crowd.gltf')
