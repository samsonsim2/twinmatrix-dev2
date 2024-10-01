import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GUI } from 'dat.gui'
import * as THREE from "three";
 
export default function SecondaryTrees(props) {
    const { nodes, materials } = useGLTF('/models/SecondaryTrees.gltf')
    const tree = useRef()
    const geometryBaseColor = {
        trees: "#c9e4be",

    }

    const uniforms = {
        color: { value: new THREE.Color(geometryBaseColor.hex) }
    }


    useEffect(() => {
        const gui = new GUI({
            width: 100
        });
        const colorFolder = gui.addFolder("SecondaryTrees")
        const treeColor = colorFolder.addColor(geometryBaseColor, "trees")
        treeColor.onChange((value) => {
            tree.current.material.color = new THREE.Color(value)
        })




        return () => {
            gui.destroy()
        }
    }, []);

    return (
        <group {...props} dispose={null}>
            <mesh
                ref={tree}
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
