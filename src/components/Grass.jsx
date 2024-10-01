import React, { useEffect, useRef, useState } from 'react'
import { SpriteAnimator, useGLTF } from '@react-three/drei'
import { GUI } from 'dat.gui'
import { Color } from 'three';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';
import gsap from "gsap";
export default function Grass(props) {
  const { nodes, materials } = useGLTF('/models/Grass.gltf')
  const grass = useRef()
  const water = useRef()
  const geometryBaseColor = {
    grass: "#c9e4be",
    water: "#c6d6ff"
  }

  const uniforms = {
    color: { value: new THREE.Color(geometryBaseColor.hex) }
  }


  useEffect(() => {
    const gui = new GUI({
      width: 100
    });
    const colorFolder = gui.addFolder("Grass")
    const grassColor = colorFolder.addColor(geometryBaseColor, "grass")
    grassColor.onChange((value) => {
      grass.current.material.color = new THREE.Color(value)
    })

    const waterColor = colorFolder.addColor(geometryBaseColor, "water")
    waterColor.onChange((value) => {
      water.current.material.color = new THREE.Color(value)
    })


    return () => {
      gui.destroy()
    }
  }, []);



  const [hovered, setHover] = useState(false)
  const sprite1 = useRef()
  const sprite2 = useRef()
  const hoverColor = new Color('#8effe4');
  const defaultColor = new Color('#c6d6ff');
  const colorRef = useRef(defaultColor.clone());

  useFrame(() => {
    if (hovered) {
      colorRef.current.lerp(hoverColor, 0.1); // Interpolate towards yellow
    } else {
      colorRef.current.lerp(defaultColor, 0.1); // Interpolate back to green
    }
    if (water.current) {
      water.current.material.color.set(colorRef.current);
    }

  });

  let scale = 0.0
  const hoverRiver = () => {

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



  const offRiver = () => {


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

  return (<>
    <group {...props} dispose={null} scale={0.25}>
      <group position={[0, 0.8, 0]}>
        <mesh ref={water}
          castShadow
          receiveShadow
          geometry={nodes['Grass-Mat5'].geometry}
          onPointerOver={(e) => (e.stopPropagation(), setHover(true),hoverRiver())} onPointerOut={(e) => (setHover(false),offRiver())}

        >
          <meshBasicMaterial color={"#c6d6ff"} side={THREE.DoubleSide} />
        </mesh>
        <mesh ref={grass}
          castShadow
          receiveShadow
          geometry={nodes['Grass-Mat'].geometry}


        >
          <meshBasicMaterial color={"#d1efbf"} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>

    <SpriteAnimator
      position={[-5, 2, -1]}
      visible={hovered ? true : false}
      ref={sprite1}
      scale={0.0}
      startFrame={0}
      scaleFactor={0.01}
      autoPlay={true}
      loop={true}
      numberOfFrames={1}
      transparent={true}
      textureImageURL={'/textures/eastereggs-03.png'}
    />

    <SpriteAnimator
      position={[-5, 2,3]}
      visible={hovered ? true : false}
      ref={sprite2}
      scale={0.0}
      startFrame={0}
      scaleFactor={0.01}
      autoPlay={true}
      loop={true}
      numberOfFrames={1}
      textureImageURL={'/textures/eastereggs-04.png'}
    />
  </>
  )
}

useGLTF.preload('/models/Grass.gltf')
