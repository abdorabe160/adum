"use client";
import { faArrowDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nave = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setshwo(true);
      } else {
        setshwo(false);
      }
    });
  }, []);
  const [shwo, setshwo] = useState(false);

  return (
    <div
      className="flex justify-around pt-7 items-center fixed w-full left-0 z-10"
      style={{ background: shwo ? "#f1f5f9" : 0, transition: ".1s" }}
    >
      <Link href="/">
        <Image
          src="https://adumcar.com/logo.svg"
          height={100}
          width={100}
          alt="image"
        />
      </Link>
      <ul
        className="flex gap-10 items-center text-lg pb-4"
        style={{ background: shwo ? "#f1f5f9" : 0, transition: ".7s" }}
      >
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#How">How it Works?</a>
        </li>
        <li>
          <a href="#Contact">Contact Us</a>
        </li>
        <a href="#Redy">
          <button className="border border-1 border-red-700 text-red-700 w-32 h-10 rounded hover:bg-red-700 transition-all hover:text-white">
            Get App
          </button>
        </a>
      </ul>
    </div>
  );
};

export default Nave;
