"use client";
import Link from "next/link";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="hidden sm:fixed sm:bottom-5 sm:left-0 sm:right-0 sm:mx-auto sm:flex sm:w-full sm:max-w-[600px] sm:items-center sm:justify-center sm:gap-1 sm:rounded-lg sm:bg-[#460b67] sm:px-2 sm:py-2 sm:text-[#e4ded7] sm:backdrop-blur-md lg:max-w-[800px] lg:px-6">
      {/* Resume Icon */}
      <Link
        href="https://www.canva.com/design/DAGPhPxtVhg/8qzCjNSaWdeLK84mwobVhQ/edit?utm_content=DAGPhPxtVhg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        target="_blank"
        className="flex"
        aria-label="Open my resume"
      >
        <FontAwesomeIcon
          icon={faFilePdf}
          className="text-[20px] sm:text-[24px] lg:text-[28px]"
        />
      </Link>

      {/* Navigation Links */}
      <Link
        href="#home"
        className="rounded py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4"
        onClick={handleScroll}
        aria-label="Scroll to Home Section"
      >
        HOME
      </Link>
      <Link
        href="#about"
        className="rounded py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4"
        onClick={handleScroll}
        aria-label="Scroll to About Section"
      >
        ABOUT
      </Link>
      <Link
        href="#work"
        className="rounded py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4"
        onClick={handleScroll}
        aria-label="Scroll to Work Section"
      >
        PROJECTS
      </Link>
      <Link
        href="#blog"
        className="rounded py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4"
        onClick={handleScroll}
        aria-label="Scroll to Blog Section"
      >
        CERTIFICATIONS
      </Link>
      <Link
        href="#contact"
        className="rounded py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4"
        onClick={handleScroll}
        aria-label="Scroll to Contact Section"
      >
        CONTACT
      </Link>
    </nav>
  );
};

export default NavBar;
