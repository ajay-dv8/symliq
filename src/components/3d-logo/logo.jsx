 
import { Image } from 'next/image'
// import { useGLTF } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import React from 'react' 

 

// export const LogoModel = () => {
//   const { logo } = useGLTF('/dlogo.glb');
//   const modelRef = useRef();

//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += 0.01;
//       modelRef.current.rotation.x += 0.01;
//       modelRef.current.rotation.z += 0.01;
//     }
//   })

//   return <primitive ref={modelRef} object={logo} />
// }
 
export const VidLogo = () => {
  return (
    <div  >
      <svg
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        <mask id="video-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
          <img src="/symliqlogo.png" alt="logo" width="300" height="300" />
        </mask>
        <foreignObject width="100%" height="100%" mask="url(#video-mask)">
          <video autoPlay loop muted style={{ width: "100%", height: "100%" }}>
            <source src="/vidbg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </foreignObject>
      </svg>
    </div>
  )
}

 
// const Logo = () => {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
//       {/* <LogoModel /> */}
//       <OrbitControls enableZoom={false} /> {/* Optional for user interaction */}
//     </Canvas>
//   )
// }

// export default Logo
