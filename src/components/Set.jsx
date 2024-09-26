
import React, { useEffect, useMemo, useRef, useState } from 'react'


import {

    OrbitControls,
    OrthographicCamera,

} from "@react-three/drei";
import Buildings from './Buildings';
import Streets from './Streets';
import Grass from './Grass';
import Traffic from './Traffic';
import Base from './Base';
import AirportPlan from './AirportPlan';
import Tower from './Tower';
import Planes from './Planes';
import Airport from './Airport';
import AnimatedPlane from './AnimatedPlane';
import Data from './Data';
import Heatmap from './Heatmap';
import Lines from './Lines';
import Collaboration from './Collaboration';
import UpLines from './UpLines';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import useWindowSize from '../hooks/useWindowSize';
import { RetailBase } from './RetailBase';
import Shelves from './Shelves';
import FacilityBase from './FacilityBase';
import HVAC from './HVAC';
import Sewer from './Sewer';
import FacilityFacade from './FacilityFacade';
import RetailFloor from './RetailFloor';
import AnimatedPerson from './AnimatedPerson';
import Crowd from './Crowd';
import AnimatedPath from './AnimatedPath';
 
export default function Set({ cameraState, isMobile, isWide }) {

    const cameraRef = useRef()
    const mesh = useRef()

    const size = useWindowSize();
   

    const navigateAirport = () => {
        console.log(size.width)
        gsap.to(mesh.current.position, {
            x: isMobile ? 2 : 5,
            z: isMobile ? 4 : isWide?40:18, // 45 degrees in radians
            duration: 2,
            ease: "power1.inOut",
        });
        gsap.to(mesh.current.scale, {
            x: isMobile ? 1.3 : 1.5,
            y: isMobile ? 1.3 : 1.5,
            z: isMobile ? 1.3 : 1.55, // 45 degrees in radians
            duration: 2,
            ease: "power1.inOut",
        });
    };

    const navigateRetail = () => {
        gsap.to(mesh.current.position, {
            x: -10,
            z: 0, // 45 degrees in radians
            duration: 2,
            ease: "power1.inOut",
        });
        gsap.to(mesh.current.scale, {
            x: 2,
            y: 2,
            z: 2, // 45 degrees in radians
            duration: 2,
            ease: "power1.inOut",
        });
    };

    
    const navigateFacility = () => {
        gsap.to(mesh.current.position, {
            x: 8,
            z: -12, // 45 degrees in radians
            duration: 3,
            ease: "power1.inOut",
        });
        gsap.to(mesh.current.scale, {
            x: 1.5,
            y: 1.5,
            z: 1.5, // 45 degrees in radians
            duration: 3,
            ease: "power1.inOut",
        });
    };

    const navigateHome = () => {
        gsap.to(mesh.current.position, {
            x: 0,
            z: 0, // 45 degrees in radians
            duration: 2,
            ease: "power1.inOut",
        });
        gsap.to(mesh.current.scale, {
            x: 1,
            y: 1,
            z: 1, // 45 degrees in radians
            duration: 2,
            ease: "power1.inOut",
        });
    };


    useEffect(() => {
        if (cameraState === 1) {
            navigateHome()

        } else if(cameraState === 2) {
            navigateAirport()

        } else if(cameraState === 3) {
            navigateRetail()

        } else if(cameraState === 4) {
            navigateFacility()

        } 
        
        

    }, [cameraState])




    const items = [
        { id: "item1", name: "Item 1" },
        { id: "item2", name: "Item 2" },
        { id: "item3", name: "Item 3" },
    ];

    const [globalScale, setGlobalScale] = useState(1.4)

    useEffect(() => {

        if (!isMobile && !isWide) {
            setGlobalScale(1.4)

        } else if(!isMobile && isWide) {


            setGlobalScale(3)
        }else {
            setGlobalScale(0.8)
        }

    }, [isMobile,isWide])


    useGSAP(() => {
        gsap.to(mesh.current.rotation, {

            y: Math.PI / 18, // 45 degrees in radians
            duration: 10,
            repeat: -1, // Infinite repeat
            yoyo: true, // Reverse the animation
            ease: "power1.inOut",
        });

    }, { scope: mesh });


    return <>
        {/* <OrbitControls enableZoom={false} enablePan={false} enableOrbit={true} enableRotate={false} maxPolarAngle={0} minPolarAngle={Math.PI / 3} /> */}

        {/* <OrbitControls   />
        <OrthographicCamera

            name="Camera"
            makeDefault={true}
            enable
            zoom={50}
            far={100000}
            near={-100000}
            up={[0, 1, 0]}
            position={[10, 8, 7]}
            rotation={[-0.78, 1.1, 0.72]}
            scale={1}
        /> */}

        <ambientLight intensity={2.2} />
        <directionalLight position={[1.0, 2.0, 0.0]} />

        <mesh ref={mesh}>


            <group  scale={globalScale} position={isMobile?[0,0,3]:[0,0,0]}>
                <Streets />
                <Buildings />
                <Data/>
                <Grass/>
                <Traffic/>
                <Base/>
                <AirportPlan/>
                <AnimatedPlane/>
                <Tower/>
                <Planes/>
                <Airport cameraState={cameraState} />
                <Heatmap/>
                <Lines cameraState={cameraState} />
                <Collaboration/>
                <UpLines/>
                <RetailBase cameraState={cameraState}/>
                <Shelves/>
                <FacilityBase/>
                <HVAC/>
                <Sewer/>
                <FacilityFacade  cameraState={cameraState}/>
                <RetailFloor/>
                <AnimatedPerson/>
                <Crowd/>
                <AnimatedPath/>
            </group>


        </mesh>

    </>
}
