"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import EarthMoon from "../_components/EarthMoon";
import CanvasLoader from "../_components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "@/constants";
import Link from "next/link";
import Button from "../_components/Button";
import Satellite from "../_components/Satellite";

const Hero = () => {
  // Use Leva to position 3D object and positioning values manually
  //   const x = useControls("HackerRoom", {
  //     positionX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionY: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //   });

  const isSmall = useMediaQuery({ maxWidth: 740 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space">
        <h1 className="hero_tag sm:text-3xl text-2x text-white text-center font-generalsans">
          Hi, I am <span className="text-gray_gradient">Lewis</span>
          <span className="waving-hand ms-2">👋</span>
        </h1>
        <p className="hero_tag text-gray_gradient">
          Geoinformatics Engineer & Next.js | React Developer
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <EarthMoon scale={isMobile ? 1 : 1.3} />

            <group>
              <Satellite position={sizes.satellitePosition} />
            </group>

            <ambientLight intensity={5} />
            <directionalLight position={[-10, 3, 1]} intensity={1} />
            <directionalLight position={[10, 3, 1]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <Link href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
