"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }: any) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Lewis",
          from_email: form.email,
          to_email: "doukas.lewis@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <section className="c-space my-20 pt-[80px]" id="contact">
      {/* <div className="relative min-h-screen flex items-center justify-center flex-col">
        <Image
          src="/assets/terminal.png"
          alt="terminal-background"
          height={450}
          width={450}
          className="hidden lg:flex w-full absolute min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Contact me</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>

          <form
            ref={formRef.current}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}

              <Image
                src="/assets/arrow-up.png"
                alt="arrow-up"
                height={20}
                width={20}
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/assets/terminal.png)",
        }}
      >
        <div className="hero-content text-neutral-content text-center mt-5">
          <div className="pb-5 md:p-9">
            <div className="contact-container">
              <h3 className="head-text">Contact me</h3>
              <p className="text-lg text-white-600 mt-3">
                Whether you’re looking to build a new website or desktop
                application, improve your existing platform, or bring a unique
                project to life, I’m here to help.
              </p>

              <form
                ref={formRef.current}
                onSubmit={handleSubmit}
                className="mt-12 flex flex-col space-y-7"
              >
                <label className="space-y-3">
                  <span className="field-label">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="ex., John Doe"
                  />
                </label>

                <label className="space-y-3">
                  <span className="field-label">Email address</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="ex., johndoe@gmail.com"
                  />
                </label>

                <label className="space-y-3">
                  <span className="field-label">Your message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="field-input"
                    placeholder="Share your thoughts or inquiries..."
                  />
                </label>

                <button className="field-btn" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}

                  <Image
                    src="/assets/arrow-up.png"
                    alt="arrow-up"
                    height={20}
                    width={20}
                    className="field-btn_arrow"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
