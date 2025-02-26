import React from "react";
import { links } from "@/lib/data";
import Header from "./header";
import HamburgerMenu from "./hamburger";

export default function Navbar() {
  return (
    <nav className="">
      <HamburgerMenu links={links} />
      <Header />
    </nav>
  );
}
