import logo from './logo.svg';
import './App.css';
import { BoxGeometry } from 'three';
import { Canvas } from '@react-three/fiber';
import Streets from './components/Streets';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
 
function App() {
  return (
    <div >
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      
    >
       <OrbitControls enableZoom={false} enablePan={false} enableOrbit={true} enableRotate={false} maxPolarAngle={0} minPolarAngle={Math.PI / 3} />
       <ambientLight intensity={1}/>
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

      <mesh>
      <boxGeometry/>
      </mesh>

      <Streets/>
     
    </Canvas>
  </div>
  );
}

export default App;
