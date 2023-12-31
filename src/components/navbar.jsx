import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="sticky top-0 w-full bg-opacity-50 backdrop-filter backdrop-blur-lg z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 m-0 h-20">
          <div className="inline-flex items-center space-x-2">
            <a
              href="#home"
              className="logo-text pointer-cursor border-2 border-cyan-400 rounded-lg p-1 text-cyan-400 font-bold"
            >
              A<span className="text-white">G</span>
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <a
                  href="#home"
                  className="text-sm font-semibold text-white px-4 py-2 pointer-cursor"
                >
                  <div className="nav-item">
                    <span className="nav-text">Home</span>
                    <span className="hover-nav-text">Home</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm font-semibold text-white px-4 py-2 pointer-cursor"
                >
                  <div className="nav-item">
                    <span className="nav-text">About</span>
                    <span className="hover-nav-text">About</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="text-sm font-semibold text-white px-4 py-2 pointer-cursor"
                >
                  <div className="nav-item">
                    <span className="nav-text">Experience</span>
                    <span className="hover-nav-text">Experience</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm font-semibold text-white px-4 py-2 pointer-cursor"
                >
                  <div className="nav-item">
                    <span className="nav-text">Projects</span>
                    <span className="hover-nav-text">Projects</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm font-semibold text-white px-4 py-2 pointer-cursor"
                >
                  <div className="nav-item">
                    <span className="nav-text">Contact</span>
                    <span className="hover-nav-text">Contact</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="text-sm font-semibold text-white px-4 py-2 pointer-cursor"
                >
                  <div className="nav-item">
                  <a
  href="https://linktr.ee/Argha_Ghosh"
  target="blank"
  className="text-sm font-semibold text-cyan-400 border-2 border-cyan-400 rounded-lg px-4 py-2 pointer-cursor linktree"
>
  Linktree
</a>
                  </div>
                </a>
              </li>
             
            </ul>
          </div>
          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer glow"
              onClick={toggleMenu}
            >
              <line className="text-cyan-400" x1="4" y1="6" x2="20" y2="6" />
              <line className="text-cyan-400" x1="4" y1="12" x2="20" y2="12" />
              <line className="text-cyan-400" x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-opacity-50 backdrop-filter backdrop-blur-lg p-4">
            <ul className="flex flex-col space-y-2 items-center justify-center">
              <li>
                <a
                  href="#home"
                  className="text-sm font-semibold text-cyan-500"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm font-semibold text-cyan-500"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="text-sm font-semibold text-cyan-500"
                  onClick={toggleMenu}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm font-semibold text-cyan-500"
                  onClick={toggleMenu}
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm font-semibold text-cyan-500"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://linktr.ee/Argha_Ghosh"
                  className="text-sm font-semibold text-cyan-500 border-2 border-cyan-500 rounded-lg px-4 py-2"
                  onClick={toggleMenu}
                >
                  Linktree
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
