import { Metadata } from "next";
import BackLink from "../_components/BackLink";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col w-full p-6 gap-6 items-center justify-start text-brand-600 text-start">
      <section className="w-full">
        <h1 className="text-brand-700 font-bold text-xl mb-6 text-white-600">
          TERMS OF SERVICE
        </h1>

        <h2 className="text-brand-700 font-bold text-white-600">
          INTRODUCTION
        </h2>
        <div className="text-pretty text-white-500">
          Ilias Doukas, who manages the website lewisdoukas.com, offers her
          services to users of the above website under the following terms of
          use.
          <p className="text-pretty font-semibold">
            Please, before continuing your browsing, carefully read the
            following terms. The use of the website lewisdoukas.com implies
            unreserved acceptance of these terms. If you do not agree, you
            should leave it and NOT make any use of its services and content.
            <br />
            "Ilias Doukas" has the right to modify these terms of use at any
            time without notice, updating the text for any modification or
            addition.
          </p>
        </div>
      </section>

      <section className="w-full">
        <h2 className="text-brand-700 font-bold text-white-600">
          LIMITATION OF LIABILITY
        </h2>
        <p className="text-pretty text-white-500">
          "Ilias Doukas" is in no way liable for compensation or compensation
          for any direct or indirect loss or damage arising from the use of this
          website.
        </p>
      </section>

      <section className="w-full">
        <h2 className="text-brand-700 font-bold text-white-600">
          INTELLECTUAL AND INDUSTRIAL PROPERTY RIGHTS
        </h2>
        <p className="text-pretty text-white-500">
          The content of the website lewisdoukas.com (indicatively, trademarks,
          distinctive features, photographs, texts, etc.) constitutes the
          intellectual and industrial property of “Ilias Doukas” and is
          protected by the provisions of Greek, European and international law.
          Consequently, it cannot be, in whole or in part, the subject of
          modification, copying, reproduction, sale, distribution or
          transmission in any way, unless there is express permission from
          “Ilias Doukas”. <br />
          Products or services of third parties (other organizations, companies,
          etc.) that appear on the website lewisdoukas.com constitute their own
          intellectual and industrial property and therefore, the responsibility
          for the above lies with the respective owners.
        </p>
      </section>

      <section className="w-full">
        <h2 className="text-brand-700 font-bold text-white-600">
          TRANSACTIONS
        </h2>
        <p className="text-pretty text-white-500">
          Every transaction between "Ilias Doukas" and any natural or legal
          person remains confidential and is not made public, with the exception
          of the cases specified by law, following the issuance of a relevant
          decision by the competent authorities.
        </p>
      </section>

      <section className="w-full">
        <h2 className="text-brand-700 font-bold text-white-600">
          PROTECTION OF PERSONAL DATA
        </h2>
        <p className="text-pretty text-white-500">
          When visiting the website lewisdoukas.com and in order to ensure the
          possibility of communication so that users can be informed about the
          services of "Ilias Doukas", it is possible to request personal
          information (name, surname, profession, email address, telephone
          number, etc.). The personal data declared anywhere on the website
          lewisdoukas.com are intended exclusively and solely for ensuring the
          operation of the respective service and may not be used without
          complying with the provisions of Law 2472/97 on the protection of
          personal data. If you are under 16 years of age, you MUST have the
          consent of your parents before using the services of this website.
        </p>
      </section>

      <section className="w-full">
        <h2 className="text-brand-700 font-bold text-white-600">
          About this website's server
        </h2>
        <p className="text-pretty text-white-500">
          All internet traffic (file transfers) between this website and your
          browser is encrypted and transferred over the HTTPS protocol using SSL
          (Secure Sockets Layer).
        </p>
      </section>

      <section className="w-full">
        <h2 className="text-brand-700 font-bold text-white-600">
          Our third-party data processors
        </h2>
        <p className="text-pretty text-white-500">
          We use a number of third parties to process personal data for us.
          These parties have been carefully selected to comply with the
          legislation referred to in this text.
        </p>
      </section>

      <section className="w-full">
        <h2 className="text-brand-700 font-bold text-white-600">
          OBLIGATIONS OF USERS
        </h2>
        <p className="text-pretty text-white-500">
          Users accept, agree and covenant that they will make lawful and
          appropriate use of the website lewisdoukas.com. In case of illegal or
          contrary to these terms, use of the website lewisdoukas.com, users are
          obliged to compensate "Ilias Doukas" for its positive and
          consequential damage.
        </p>
      </section>

      <section className="w-full">
        <h2 className="text-brand-700 font-bold text-white-600">
          APPLICABLE LAW – LITIGATION
        </h2>
        <p className="text-pretty text-white-500">
          These terms of service, as well as any future amendments to them, are
          governed by Greek law. For any dispute that may arise, the courts of
          Athens shall have jurisdiction.
        </p>
      </section>

      <section className="w-full">
        <h2 className="text-brand-700 font-bold text-white-600">CONTACT</h2>
        <div className="text-pretty md:flex text-white-500">
          <p>
            {" "}
            For any questions or clarifications, you can contact me using the
            form or my email address
          </p>
          <p className="font-bold mx-1">doukas.lewis@gmail.com</p>
          <p>and I will be happy to serve you.</p>
        </div>
      </section>

      <BackLink label="Back to Home" path="/en/" />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Terms of Service - Nina Dollis | Psychologist",
  description:
    "This page lists the terms governing the service of the office website.",
};

export default TermsPage;
