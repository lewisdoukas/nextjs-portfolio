"use client";
import React from "react";

interface Props {
  name: string;
  isBeam: boolean;
  containerClass: string;
}

const Button = ({ name, isBeam, containerClass }: Props) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
