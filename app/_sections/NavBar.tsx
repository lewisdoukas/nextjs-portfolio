"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <Link href={href} className="nav-li_a">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <Link
            href="/"
            className="flex items-center gap-4 text-gray_gradient font-bold text-xl hover:text-white transition-colors"
          >
            <Image
              src="/assets/ilias.jpg"
              width={56}
              height={56}
              alt="logo"
              className="object-contain rounded-full gray-gradient p-[1px]"
            />
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

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
