import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import BackLink from "../_components/BackLink";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen mt-20 flex flex-col w-full p-6 gap-6 items-center justify-start text-brand-600 text-start">
      <section className="w-full">
        <h2 className="text-brand-700 font-bold text-xl text-white-600">
          PRIVACY POLICY & GDPR COMPLIANCE
        </h2>
        <p className="text-pretty text-white-500">
          This privacy policy may change from time to time in accordance with
          legislation or industry developments. We will not explicitly notify
          our customers or website users of these changes. Instead, we recommend
          that you periodically check this page for any updates to this privacy
          policy. Your continued use of the website lewisdoukas.com, even after
          any changes to the Privacy Policy, constitutes your unconditional
          acceptance of these terms.
        </p>
      </section>

      <section className="w-full">
        <h2 className="text-brand-700 font-bold text-white-600">
          Relevant legislation
        </h2>
        <p className="text-pretty text-white-500">
          In addition to our company's internal IT systems, this website has
          been designed to comply with the following laws and regulations
          regarding the protection of users' personal data:
        </p>
        <div className="flex flex-col gap-2 mt-4 text-white-500">
          <Link
            href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:31995L0046&from=EN"
            className="text-brand-700 hover:underline"
          >
            Directive 95/46/EC on Data Protection (DPD)
          </Link>
          <Link
            href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN"
            className="text-brand-700 hover:underline"
          >
            Regulation (EU) 2016/679 on General Data Protection (GDPR)
          </Link>
        </div>
      </section>

      <section className="w-full">
        <h2 className="text-brand-700 font-bold text-white-600">
          Personal information collected by this website and why we collect it
        </h2>
        <p className="text-pretty text-white-500">
          This website collects and uses personal information about the
          following reasons:
        </p>

        <h3 className="text-brand-700 font-bold mt-6 text-white-600">
          Contact form & email links
        </h3>
        <p className="text-pretty text-white-500">
          If you choose to contact us using the contact form or a link in our
          email, none of the data you provide will be stored by this website or
          transferred to or processed by any third party data processor.
          Instead, this data will be sent to us in an email message using the
          SMTP (Simple Mail Transfer Protocol) protocol. Our SMTP servers are
          protected by the TLS security protocol (sometimes known as SSL), which
          means that the email content is encrypted before it is sent over the
          internet. The email content is decrypted by our local computers and
          devices.
        </p>
      </section>
      <BackLink label="Back to Home" path="/" />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "On this page you can find information about our privacy policy and GDPR compliance.",
};

export default PrivacyPolicyPage;
