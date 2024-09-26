import React, { useEffect, useRef } from 'react'
import { SpriteAnimator, useGLTF } from '@react-three/drei'
import gsap from "gsap";

export default function FacilityFacade({ props, cameraState }) {
  const { nodes, materials } = useGLTF('/models/FacilityFacade.gltf')
  const mesh = useRef(null)
  const sprite1 = useRef(null)
  const sprite2 = useRef(null)
  const sprite3= useRef(null)

  let scale = 0.0
  const revealFacility = () => {
    console.log(mesh.current.material.opacity)
    gsap.to(mesh.current.material, {
      opacity: 0.1,
      duration: 1,
      ease: "power1.inOut",
    });
 
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
    gsap.to(sprite3.current.scale, {
      x: 0.4,
      y: 0.4,
      y: 0.4,
      duration: 1,
      ease: "power1.inOut",
    });

  };



  const hideFacility = () => {
    gsap.to(mesh.current.material, {
      opacity: 1.0,
      duration: 1,
      ease: "power1.inOut",
    });


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

    gsap.to(sprite3.current.scale, {
      x: 0.,
      y: 0.,
      y: 0.,
      duration: 1,
      ease: "power1.inOut",
    });




  };

  useEffect(() => {
    if (cameraState === 4) {
      revealFacility()
    }
    else {
      hideFacility()
    }

  }, [cameraState])

  return (<>
    <group {...props} dispose={null}>
      <mesh
        ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.FacilityFacade.geometry}
        material={nodes.FacilityFacade.material}
        scale={25}
      ><meshStandardMaterial color={"white"} opacity={1.0} transparent={true} /></mesh>
    </group>

    <SpriteAnimator
      position={[-2.4, 1, 7]}
 


      ref={sprite1}
      scale={0.0}
      startFrame={0}
      scaleFactor={0.01}
      autoPlay={true}
      loop={true}
      numberOfFrames={1}
      textureImageURL={'/textures/facilities-01.png'}
    />

    <SpriteAnimator
      position={[-2.4, 2.2, 8]}
      visible={cameraState == 4 ? true : false}

      ref={sprite2}
      scale={0.0}
      startFrame={0}
      scaleFactor={0.01}
      autoPlay={true}
      loop={true}
      numberOfFrames={1}
      textureImageURL={'/textures/facilities-03.png'}
    />

    <SpriteAnimator
      position={[-2.3, 3, 7]}
      visible={cameraState == 4 ? true : false}


      
      ref={sprite3}
      scale={0.0}
      startFrame={0}
      scaleFactor={0.01}
      autoPlay={true}
      loop={true}
      numberOfFrames={1}
      textureImageURL={'/textures/facilities-02.png'}
    />
  </>



  )
}

useGLTF.preload('/models/FacilityFacade.gltf')
