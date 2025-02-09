import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
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
        <div className="social-icon">
          <Image
            src="/assets/twitter.svg"
            alt="twitter"
            width={30}
            height={30}
            className=""
          />
        </div>
        <div className="social-icon">
          <Image
            src="/assets/instagram.svg"
            alt="instagram"
            width={30}
            height={30}
            className=""
          />
        </div>
      </div>

      <p className="text-white-500"></p>
    </section>
  );
};

export default Footer;
