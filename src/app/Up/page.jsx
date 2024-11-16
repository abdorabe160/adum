"use client";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Up = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshwo(true);
      } else {
        setshwo(false);
      }
    });
  }, []);
  const [shwo, setshwo] = useState(false);
  return (
    <div className=" fixed bottom-6 right-20  rounded-full  text-white flex items-center">
      <a
        className="up  right-20 bg-rose-400 p-4  rounded-full hover:bg-rose-700"
        href="#Home"
        style={{ opacity: shwo ? 1 : 0, transition: ".3s" }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </div>
  );
};

export default Up;
