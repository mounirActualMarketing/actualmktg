"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

interface NavLinkProps {
  text: string;
  href: string;
}

interface NavLeftProps {
  setIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

interface NavMenuProps {
  isOpen: boolean;
}

const Logo = () => {
  return (
    <Link href="/">
      <img 
        src="/logo-actual.png" 
        alt="Actual Marketing" 
        className="h-10 w-auto"
      />
    </Link>
  );
};

const NavLeft = ({ setIsOpen }: NavLeftProps) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo />
      <NavLink text="Home" href="/" />
      <NavLink text="About" href="/about" />
      <NavLink text="Services" href="/services" />
      <NavLink text="Contact" href="/contact" />
    </div>
  );
};

const NavLink = ({ text, href }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </Link>
  );
};

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-md whitespace-nowrap"
        >
          Contact us
        </motion.button>
      </Link>
    </div>
  );
};

const NavMenu = ({ isOpen }: NavMenuProps) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4 lg:hidden z-50"
      style={{
        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      <MenuLink text="Home" href="/" />
      <MenuLink text="About" href="/about" />
      <MenuLink text="Services" href="/services" />
      <MenuLink text="Contact" href="/contact" />
    </motion.div>
  );
};

const MenuLink = ({ text, href }: NavLinkProps) => {
  return (
    <Link href={href} className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2">
      <motion.span
        variants={menuLinkVariants}
        className="flex items-center gap-2"
      >
        <motion.span variants={menuLinkArrowVariants}>
          <FiArrowRight className="h-[30px] text-gray-950" />
        </motion.span>
        <motion.div whileHover={{ y: -30 }}>
          <span className="flex items-center h-[30px] text-gray-500">{text}</span>
          <span className="flex items-center h-[30px] text-indigo-600">
            {text}
          </span>
        </motion.div>
      </motion.span>
    </Link>
  );
};

const menuVariants = {
  open: {
    scaleY: 1,
    opacity: 1,
    display: "flex",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};

export const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white p-4 border-b-[1px] border-gray-200 flex items-center justify-between relative z-50">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
}; 