"use client";
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Anthony Yanez (https://sketchfab.com/paulyanez)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-5c83056b54cc41be84c554fb6404c7fd
Title: Earth
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const EarthMoon = (props: any) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/earth.glb");

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(group.current?.rotation, {
        y: `+=${Math.PI * 2}`,
        // x: `-=${Math.PI * 2}`,
        duration: 60,
        repeat: -1,
      });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.022}
        >
          <group name="EarthFBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Earth" rotation={[-1.833, 0, 0]}>
                  <mesh
                    name="Earth_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Earth_01_-_Default_0"].geometry}
                    material={materials["01_-_Default"]}
                  />
                </group>
                <group
                  name="Moon"
                  rotation={[-1.617, -0.258, 1.39]}
                  scale={0.27}
                >
                  <mesh
                    name="Moon_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Moon_02_-_Default_0"].geometry}
                    material={materials["02_-_Default"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/earth.glb");

export default EarthMoon;
