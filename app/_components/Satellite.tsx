"use client";
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Python = (props: any) => {
  const targetRef = useRef();
  const { scene } = useGLTF("/models/landsat.gltf");

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
      })
      .to(targetRef.current?.rotation, {
        y: `+=${2 * Math.PI}`,
        // x: `-=10`,
        duration: 50,
        repeat: -1,
      });

    gsap.to(targetRef.current.scale, {
      x: 0.5,
      y: 0.5,
      duration: 50,
      repeat: -1,
    });

    gsap.to(targetRef.current.position, {
      x: "+=3",
      y: "+=2",
      duration: 50,
      repeat: -1,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, 0, 0]} scale={3.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Python;
