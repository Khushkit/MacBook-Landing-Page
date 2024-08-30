import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import React from 'react';
import './style.css';
import MacContainer from './MacContainer';

const App = () => {
  return (
     <div className='w-full h-screen'>
     <div className="navbar flex gap-10 line pt-8 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
      {["iPhone", "iPad", 'Services', 'ios','Products', 'Watch', 'AirPods', 'TV & Home'].map((e) => (
      <a href="" className="text-white font-[400] text-sm">
        {e}
      </a>))}
     </div>
     <div className="absolute flex flex-col items-center text-white top-20 left-1/2 -translate-x-1/2 font-['Footlight_MT_Light']">
       <h3 className='masked text-7xl tracking-tighter font-[700]'>Macbook Pro.</h3>
       <h5 className=''><br></br>Oh Soo Pro!</h5>
       <p className='text-center w-2/4'>MacBook Pro blasts forward with the M3, M3 Pro and M3 Max chips. Built on 3‑nanometre technology and featuring an all-new GPU architecture, they’re the most advanced chips ever built for a personal computer. And each one brings more pro performance and capability.</p>
     </div>
      <Canvas camera={{fov:12, position:[0, -10, 220]}}>
       <Environment
         files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
         ]}
        />
      <ScrollControls pages={3}>
      <MacContainer/>
      </ScrollControls>
     </Canvas>
     </div>
);
};

export default App;
