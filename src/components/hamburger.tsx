"use client";

import React from "react";
import { Link } from "@/lib/types";
import clsx from "clsx";
import NextLink from "next/link";
import Hamburger from "hamburger-react";
import { useActiveSectionContext } from "@/containers/active-section";

import { AnimatePresence, motion } from "framer-motion";
import { div } from "framer-motion/client";
type HamburgerMenuProps = {
  links: Link[];
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  return (
    <div>
      <button>
        <Hamburger />
      </button>
      <AnimatePresence>
        <div>
          {links.map((link, index) => (
            <div key={index}>
              <NextLink href={link.hash}>{link.nameEng}</NextLink>
            </div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
