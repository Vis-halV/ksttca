import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about-us" },
    { label: "Training Program", href: "#tp" },
    { label: "Coaches", href: "#coach" },
    { label: "Facilities", href: "#facilities" },
    { label: "Events", href: "#events" },
    { label: "Memberships", href: "#membership" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-20 px-8 md:px-16 bg-[#0A1A2F] border-b border-[#1E3A5F] shadow-md transition-all duration-300">
      {/* Logo */}
      <div className="flex items-center space-x-2 select-none">
        <span className="text-2xl font-bold tracking-tight text-[#E63946] hover:text-[#EF5A68] transition-colors duration-300">
          KSTTA
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex items-center space-x-8 text-[15px] font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-[#F8FAFC] hover:text-[#E63946] transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[#E63946] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Button */}
      <a
        href="#contact-us"
        className="hidden md:inline-flex items-center justify-center rounded-xl bg-[#E63946] text-white text-sm font-medium px-5 py-2 hover:bg-[#EF5A68] active:scale-[0.98] transition-transform duration-200 shadow-md"
      >
        Contact Us
      </a>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden inline-flex flex-col justify-center space-y-1.5 w-8 h-8 focus:outline-none group"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`block h-[2px] w-6 bg-[#F8FAFC] rounded transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-[6px]" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-6 bg-[#F8FAFC] rounded transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-6 bg-[#F8FAFC] rounded transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0A1A2F] border-t border-[#1E3A5F] shadow-md lg:hidden animate-fadeIn">
          <ul className="flex flex-col items-center py-4 space-y-4 text-[15px] font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-[#F8FAFC] hover:text-[#E63946] transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact-us"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-xl bg-[#E63946] text-white text-sm font-medium px-5 py-2 hover:bg-[#EF5A68] transition-colors duration-200 shadow-md"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
