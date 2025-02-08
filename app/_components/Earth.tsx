import React from "react";
import Globe from "react-globe.gl";

const Earth = () => {
  return (
    <Globe
      height={326}
      width={326}
      backgroundColor="rgba(0,0,0,0)"
      showAtmosphere
      showGraticules
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      labelsData={[
        {
          lat: 40,
          lng: -100,
          text: "I'm here!",
          color: "white",
          size: 20,
        },
      ]}
    />
  );
};

export default Earth;
