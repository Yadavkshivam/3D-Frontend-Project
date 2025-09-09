import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `Redefining user experiences`;

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Left: 3D Planet */}
      <div className="relative w-full h-[60vh] md:w-1/2 md:h-screen flex items-end">
        {/* Align items-end to lower the planet */}
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 18, near: 1, far: 40 }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={2} />

          <Float
            speed={1.5}
            rotationIntensity={0.8}
            floatIntensity={0.5}
          >
            <Planet scale={isMobile ? 0.6 : 1} />
          </Float>

          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form="circle"
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
                color="violet"
              />
              <Lightformer
                form="circle"
                intensity={3}
                position={[0, -2, 1]}
                scale={12}
                color="blue"
              />
              <Lightformer
                form="circle"
                intensity={1.5}
                position={[10, 1, 0]}
                scale={16}
                color="purple"
              />
            </group>
          </Environment>

          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Right: Text Content */}
      <div className="relative z-20 flex flex-col bg-transparent justify-center w-full h-[60vh] text-small
       text-left md:w-1/2 md:h-screen md:text-left md:items-start">
        <AnimatedHeaderSection
          subTitle="The Global Leader"
          title={"Design Transform Accelerate"} // split into lines
          text={text}
          textColor="text-gray-300"
        />
      </div>
    </section>
  );
};

export default Hero;



// import { Canvas } from "@react-three/fiber";
// import { Planet } from "../components/Planet";
// import { Environment, Float, Lightformer } from "@react-three/drei";
// import { useMediaQuery } from "react-responsive";
// import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
// const Hero = () => {
//   const isMobile = useMediaQuery({ maxWidth: 853 });
//   const text = `Redefining user experiences through Behavioural Science & AI`;
//   return (
//     <section id="home" className="flex flex-col justify-end min-h-screen">
//       <AnimatedHeaderSection
//         subTitle={"The Global Leader"}
//         title={"Design Transform Acclerate "}
//         text={text}
//         textColor={"text-black"}
//       />
//       <figure
//         className="absolute inset-0 -z-50"
//         style={{ width: "100vw", height: "100vh" }}
//       >
//         <Canvas
//           shadows
//           camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
//         >
//           <ambientLight intensity={0.5} />
//           <Float speed={0.5}>
//             <Planet scale={isMobile ? 0.7 : 1} />
//           </Float>
//           <Environment resolution={256}>
//             <group rotation={[-Math.PI / 3, 4, 1]}>
//               <Lightformer
//                 form={"circle"}
//                 intensity={2}
//                 position={[0, 5, -9]}
//                 scale={10}
//               />
//               <Lightformer
//                 form={"circle"}
//                 intensity={2}
//                 position={[0, 3, 1]}
//                 scale={10}
//               />
//               <Lightformer
//                 form={"circle"}
//                 intensity={2}
//                 position={[-5, -1, -1]}
//                 scale={10}
//               />
//               <Lightformer
//                 form={"circle"}
//                 intensity={2}
//                 position={[10, 1, 0]}
//                 scale={16}
//               />
//             </group>
//           </Environment>
//         </Canvas>
//       </figure>
//     </section>
//   );
// };

// export default Hero;
