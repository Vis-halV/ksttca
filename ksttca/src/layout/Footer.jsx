import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faFacebookMessenger,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "vishal06076@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 800);
    });
  };

  return (
    <footer className="bg-[#0A1A2F] text-[#F8FAFC] px-[7%] py-[3rem] font-inter">
      {/* 3-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-8 border-b border-[#1E3A5F]">
        {/* Contact Column */}
        <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right">
          <h3 className="text-xl font-semibold mb-3 text-[#E63946]">
            Contact Us
          </h3>
          <p className="flex items-center justify-center md:justify-end text-sm mb-2">
            <span className="text-[#E2E8F0]">{email}</span>
            <FontAwesomeIcon
              icon={faCopy}
              className={`ml-2 cursor-pointer p-1 rounded transition-all duration-300 ${
                copied
                  ? "bg-[#22C55E] text-white"
                  : "bg-[#112B45] text-[#E63946] hover:bg-[#E63946] hover:text-[#0A1A2F]"
              }`}
              onClick={copyEmail}
              title="Copy Email"
            />
            {copied && (
              <span className="ml-2 text-[#22C55E] text-xs">Copied!</span>
            )}
          </p>
          <p className="text-[#CBD5E1] mt-3 text-sm leading-snug max-w-[260px]">
            © 2025 KSTTA. All Rights Reserved. <br />
            Designed & built with dedication.
          </p>
        </div>

        {/* Branding Column */}
        <div className="text-center flex flex-col items-center justify-center">
          <h1 className="text-[clamp(2rem,2.5vw,3rem)] font-bold tracking-wide text-[#E63946]">
            KSTTA
          </h1>
          <h2 className="text-[#CBD5E1] text-[clamp(0.9rem,1vw,1.2rem)] mb-6 font-light">
            Practice. Precision. Perfection.
          </h2>
          <div className="flex items-center justify-center space-x-6 text-xl">
            {[
              { icon: faFacebookF, link: "https://facebook.com" },
              { icon: faYoutube, link: "https://youtube.com" },
              { icon: faFacebookMessenger, link: "https://messenger.com" },
              { icon: faInstagram, link: "https://instagram.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#EF5A68] transition-transform transform hover:scale-110"
              >
                <FontAwesomeIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-[#E63946]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[#CBD5E1] text-sm">
            {[
              { name: "Home", href: "#home" },
              { name: "Coaches", href: "#coach" },
              { name: "Facilities", href: "#facilities" },
              { name: "Events", href: "#events" },
              { name: "Memberships", href: "#membership" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#EF5A68] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-8 text-center text-sm text-[#CBD5E1] opacity-90">
        You could have been anywhere on the internet, yet you're here.
        <br className="hidden md:block" />
        <span className="text-[#E63946] font-medium">
          {" "}
          Thank you for visiting!
        </span>
      </div>
    </footer>
  );
}

export default Footer;
