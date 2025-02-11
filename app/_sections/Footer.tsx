import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2 text-[14px]">
        <Link className="hover:text-white-600 transition-colors" href="/terms">
          Terms & Conditions
        </Link>
        <p>|</p>
        <Link
          className="hover:text-white-600 transition-colors"
          href="/privacy-policy"
        >
          Privacy Policy
        </Link>
      </div>

      <div className="flex gap-3">
        <Link
          href="https://github.com/lewisdoukas"
          target="_blank"
          className="social-icon"
        >
          <Image
            src="/assets/github.svg"
            alt="github"
            width={30}
            height={30}
            className=""
          />
        </Link>
        <Link
          href="https://twitter.com/DoukasLewis"
          target="_blank"
          className="social-icon"
        >
          <Image
            src="/assets/twitter.png"
            alt="twitter"
            width={30}
            height={30}
            className=""
          />
        </Link>
        <Link
          href="https://twitter.com/DoukasLewis"
          target="_blank"
          className="social-icon"
        >
          <Image
            src="/assets/linkedin.svg"
            alt="linkedin"
            width={30}
            height={30}
            className=""
          />
        </Link>
      </div>

      <p className="text-white-500 text-[14px]">
        Copyright © {new Date().getFullYear()} - All rights reserved
      </p>
    </section>
  );
};

export default Footer;
