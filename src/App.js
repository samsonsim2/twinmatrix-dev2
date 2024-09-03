import logo from "./logo.svg";
import "./App.css";
import { BoxGeometry } from "three";
import { Canvas } from "@react-three/fiber";
import Streets from "./components/Streets";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import Set from "./components/Set";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "./hooks/useWindowSize";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LocationCityIcon from "@mui/icons-material/LocationCity";
function App() {
  const buttonRef = useRef(null);
  const cameraRef = useRef(null);
  const mesh = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isWide, setIsWide] = useState(false);
  const [cameraState, setCameraState] = useState(1);
  const size = useWindowSize();

  useEffect(() => {
    //Check for mobile view
    if (size.width > 600) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
    //Check for wide view
    if (size.width > 2500) {
      setIsWide(true);
    } else {
      setIsWide(false);
    }
  }, [size]);

  const items = [
    {
      id: 1,
      name: "Item 1",
      title: "The future of cities is spatial-driven",
      sub: "Cities are becoming driven by smart, interconnected, spatial layers",
      icon: <LocationCityIcon sx={{ color: "#334155" }} />,
    },

    {
      id: 2,
      name: "Item 2",
      title: "Smart airports enable seamless journeys",
      sub: "Enhance airport planning and real-time operations through spatial AI",
      icon: <LocalAirportIcon sx={{ color: "#334155" }} />,
    },
  ];

  //Track Screen Size
  const handleClick = (id) => {
    if (id === "1") {
      setCameraState(1);
      console.log(size.width);
    } else if (id === "2") {
      setCameraState(2);
      console.log(size.width);
    } else {
      setCameraState(3);
    }
  };

  const ButtonList = () => {
    return (
      <>
        {items.map((item, index) => (
          <button
            key={index}
            id={item.id.toString()}
            name={item.name}
            ref={buttonRef}
            onClick={() => handleClick(item.id.toString())}
            type="button"
            style={{
              color: "#1f2937", // text-gray-900
              backgroundColor: "white", // bg-white
              width: "2.5rem", // w-8
              height: "2.5rem", // h-8
              borderColor: cameraState === item.id ? "#6b7280" : "white", // border-gray-500 or border-white   
              borderWidth: "2px", // Set a consistent border width
              borderStyle: "solid", // Ensure the border style is solid
               
              outline: "none", // focus:outline-none
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)", // shadow-md shadow-black
              borderRadius: "9999px", // rounded-full
              fontSize: "1rem", // text-sm
            }}
          >
            {item.icon}
          </button>
        ))}
      </>
    );
  };

  return (
    <main
      style={{
        height: "100vh", // h-screen
        width: "100vw", // w-screen
        position: "relative", // relative
        overflowX: "hidden", // overflow-x-hidden
        backgroundColor: "#f5f5f4", // bg-stone-100
      }}
    >
      <div
        style={{
          position: "absolute", // absolute
          zIndex: 30, // z-30
          bottom: 0, // bottom-0
          width: "100%", // w-full
          height:"fit-content",
          display: "flex", // flex
          flexDirection: "column",
          
        }}
      >
        <div
          style={{
            display: "flex", // flex
            flexDirection: "row", // flex-row
            paddingLeft: "2rem", // px-8
            paddingRight: "2rem",
            gap: "1rem", // gap-4
          }}
        >
          <ButtonList />
        </div>
        <div
          style={{
            paddingBottom: "6rem", // pb-24
            paddingLeft: "2rem", // px-8
            paddingRight: "2rem",
            marginTop: "0.25rem", // mt-3
            flexBasis: "25%", // flex-basis-0.25
            backgroundImage: "linear-gradient(to top, white, transparent)", // bg-gradient-to-t from-white to-transparent
            ...(window.innerWidth >= 768 && {
              paddingBottom: "3rem", // md:pb-12
            }),
          }}
        >
          <div
            style={{
              fontSize: "1.25rem", // text-xl
              color: "#1e293b", // text-slate-800
              fontWeight: "bold", // font-bold
              ...(window.innerWidth >= 768 && {
                fontSize: "2.25rem", // md:text-4xl
              }),
            }}
          >
            {items[cameraState - 1].title}
          </div>
          <div
            style={{
              fontSize: "0.875rem", // text-sm
              fontWeight:"normal",             
              color: "#1e293b", // text-slate-800
              ...(window.innerWidth >= 768 && {
                fontSize: "1.5rem", // md:text-2xl
              }),
            }}
          >
            {items[cameraState - 1].sub}
          </div>
        </div>
      </div>
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableOrbit={true}
          enableRotate={false}
          maxPolarAngle={0}
          minPolarAngle={Math.PI / 3}
        />

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
        />

        <Set cameraState={cameraState} isMobile={isMobile}  isWide={isWide}/>
      </Canvas>
    </main>
  );
}

export default App;
