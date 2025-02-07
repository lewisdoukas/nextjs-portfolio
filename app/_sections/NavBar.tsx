"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavItems = () => {
  return <ul className="nav-ul">{[]}</ul>;
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <Link
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Lewis Doukas
          </Link>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <Image
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              width={24}
              height={24}
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
