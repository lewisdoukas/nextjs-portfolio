import { clientReviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear from My Clients</h3>

      <div className="client-container">
        {clientReviews.map(({ id, name, review, img, position }) => (
          <div key={id} className="client-review">
            <div>
              <p className="text-white">{review}</p>
              <div className="client-content">
                <div className="flex gap-3">
                  <Image
                    src={img}
                    alt={name}
                    height={48}
                    width={48}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{name}</p>
                    <p className="text-white-500 md:text-base text-sm">
                      {position}
                    </p>
                  </div>
                </div>

                <div className="flex seld-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Image
                      key={index}
                      src="/assets/star.png"
                      alt="start"
                      height={20}
                      width={20}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end items-center mt-2">
        <Link
          href="https://www.fiverr.com/lewisdoukas?public_mode=true"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white"
        >
          <p>See more reviews</p>
          <Image
            src="/assets/arrow-up.png"
            alt="arrow"
            height={12}
            width={12}
          />
        </Link>
      </div>
    </section>
  );
};

export default Clients;
