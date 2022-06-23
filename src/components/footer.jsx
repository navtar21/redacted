import React from "react";

const Footer = () => (
  <div className="text-center text-lg mt-16">
    <p className="">
      ©️ Site Développer Par{" "}
      <a
        className="underline font-bold"
        href="https://www.linkedin.com/in/maxime-mugnier/"
        onclick="console.log('Le lien a été cliqué.'); return false"
      >
        Navtar.
      </a>{" "}
      Réseaux Sociaux: Instagram, Twitter
    </p>
  </div>
);

export default Footer;
