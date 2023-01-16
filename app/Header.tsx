"use client";

import { ArrowDownTrayIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

function Header() {
  const [show, setShow] = useState(false);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  });

  if (!mount) return null;

  function handleShow() {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  window.addEventListener("scroll", handleShow);

  return (
    <div
      className={`max-w-2xl mx-auto p-3 sticky top-2 rounded-full  backdrop-blur-sm flex justify-between items-center transition-all duration-200 ${
        show ? "bg-white/50" : "bg-transparent"
      }`}
    >
      <div
        className={`w-fit transition duration-300 p-[1px] bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full ${
          show ? "visible" : "invisible"
        }`}
      >
        <img
          src="/man.png"
          className="w-10 h-10 object-cover object-top rounded-full bg-white"
          alt=""
        />
      </div>

      <div
        className={`space-x-2 flex items-center ${
          show ? "visible" : "invisible"
        } transition duration-300`}
      >
        <span className="font-bold text-lg text-gray-800">@ashikrana49</span>
        <CheckBadgeIcon className="icon text-sky-500" />
      </div>

      <a href="https://linktr.ee" target={"_blank"}>
        <div
          className={`w-fit p-2 rounded-full cursor-pointer ${
            show ? "bg-gray-800 text-white" : "bg-white"
          }`}
        >
          <ArrowDownTrayIcon className="icon" />
        </div>
      </a>
    </div>
  );
}

export default Header;
