
import React, { useRef, useState } from 'react'
import { SpriteAnimator, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Color } from 'three';
import gsap from "gsap";
export default function Trees(props) {
    const { nodes, materials } = useGLTF('/models/Trees.gltf')
    const [hovered, setHover] = useState(false)
    const mesh = useRef()
    const hoverColor = new Color('yellow');
    const defaultColor = new Color('#c5d388');
    const colorRef = useRef(defaultColor.clone());
    const sprite1 = useRef()
    const sprite2 = useRef()

    let scale = 0.0
    const hoverTrees = () => {

        gsap.to(sprite1.current.scale, {
            x: 0.4,
            y: 0.4,
            y: 0.4,
            duration: 1,
            ease: "power1.inOut",
        });

        
        gsap.to(sprite2.current.scale, {
            x: 0.4,
            y: 0.4,
            y: 0.4,
            duration: 1,
            ease: "power1.inOut",
        });



    };



    const offTrees = () => {


        gsap.to(sprite1.current.scale, {
            x: 0.,
            y: 0.,
            y: 0.,
            duration: 1,
            ease: "power1.inOut",
        });
        
        gsap.to(sprite2.current.scale, {
            x: 0.,
            y: 0.,
            y: 0.,
            duration: 1,
            ease: "power1.inOut",
        });




    };


    // Handle color interpolation based on hover state
    useFrame(() => {
        if (hovered) {
            colorRef.current.lerp(hoverColor, 0.1); // Interpolate towards yellow
        } else {
            colorRef.current.lerp(defaultColor, 0.1); // Interpolate back to green
        }
        if (mesh.current) {
            mesh.current.material.color.set(colorRef.current);
        }
        
    });
    return (<>
        <SpriteAnimator
            position={[-6, 2.2, 0]}
            visible={hovered ? true : false}
            ref={sprite1}
            scale={0.0}
            startFrame={0}
            scaleFactor={0.01}
            autoPlay={true}
            loop={true}
            numberOfFrames={1}
            transparent={true}
            textureImageURL={'/textures/eastereggs-01.png'}
        />

<SpriteAnimator
            position={[-5, 2.2, 2]}
            visible={hovered ? true : false}
            ref={sprite2}
            scale={0.0}
            startFrame={0}
            scaleFactor={0.01}
            autoPlay={true}
            loop={true}
            numberOfFrames={1}
            textureImageURL={'/textures/eastereggs-02.png'}
        />
        <group {...props} dispose={null}>
            <mesh
                ref={mesh}
                castShadow
                receiveShadow
                geometry={nodes.Trees.geometry}
                material={nodes.Trees.material}
                scale={25}
                position={[0, 0.3, 0]}
                onPointerOver={(e) => (e.stopPropagation(), setHover(true), hoverTrees())} onPointerOut={(e) => (setHover(false) , offTrees())}

            ><meshStandardMaterial color={"#c5d388"} />


            </mesh>
        </group>
    </>
    )
}

useGLTF.preload('/models/Trees.gltf')
