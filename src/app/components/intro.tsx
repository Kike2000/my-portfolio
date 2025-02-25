import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Intro() {
  return (
    <section className="flex flex-col items-center">
      <div>
        <div>
          <div>
            <Image
              src="/me.jpg"
              alt=""
              width="480"
              height="480"
              quality="100"
              priority={true}
              className="rounded-full shadow-xl object-cover"
            />
          </div>
          <span className="text-6xl absolute bottom-8 right-12">h</span>
        </div>
      </div>
      <h1>
        <span>This is me je</span>
        <p>Services from myselfdsdsdsdsddsdsdssdsdsd</p>
      </h1>
      <div>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
        >
          Connect <Mail color={"#9ca3af"} />
        </Link>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
        >
          Connect <Mail color={"#9ca3af"} />
        </Link>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
        >
          Connect <Mail color={"#9ca3af"} />
        </Link>
      </div>
    </section>
  );
}
