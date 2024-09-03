
'use client'
import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GUI } from 'dat.gui'
import * as THREE from "three";
  
export default function Streets(props) {
  const streets = useRef()
  const geometryBaseColor = {
    color: "#7292a0",

  }



  useEffect(() => {

    if (typeof window !== 'undefined') {
      const gui = new GUI({
        width: 100
      });
      const colorFolder = gui.addFolder("Streets")
      const streetsColor = colorFolder.addColor(geometryBaseColor, "color")
      streetsColor.onChange((value) => {
        streets.current.material.color = new THREE.Color(value)
      })

      return () => {
        gui.destroy()
      }
    }

 
  }, [window]);

  return (
    <>
      <mesh
        scale={100}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0.0, -0.5, 0.0]}
        ref={streets}

      >
        
        <meshStandardMaterial color={"#7292a0"} />

        <planeGeometry></planeGeometry>
      </mesh></>

  );
}


