import React, { useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

const Earth = () => {
  const globeMethods = useRef<GlobeMethods | undefined>(undefined);

  return (
    <Globe
      animateIn
      ref={globeMethods}
      onGlobeReady={() =>
        globeMethods.current?.pointOfView({ lng: 24, lat: 38 })
      }
      height={326}
      width={326}
      backgroundColor="rgba(0,0,0,0)"
      showAtmosphere
      showGraticules
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      labelsData={[
        {
          lat: 38,
          lng: 24,
          text: "I'm here!",
          color: "white",
          size: 300,
        },
      ]}
    />
  );
};

export default Earth;
