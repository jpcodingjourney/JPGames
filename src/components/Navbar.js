import Link from "next/link";
import styles from "@component/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 10 || showMenu
      );
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, showMenu]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target !== document.querySelector(".border-teal-400") &&
        !document.querySelector(".border-teal-400").contains(event.target)
      ) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      className={`fixed w-full z-30 transition-all duration-300 ${
        visible ? "top-0" : "-top-16"
      }`}
    >
      <div className="flex bg-slate-900 items-center justify-between py-1">
        <div className={styles.main}>
          <span className={styles.thirteen}>
            <Link href="/" className="px-2 hover:text-stone-400">
              JPGAMES
            </Link>
          </span>
        </div>
        <div className="px-10 block lg:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          ref={ref}
          className={`${
            showMenu ? "block" : "hidden"
          } absolute z-20 top-16 right-10 w-400 bg-gray-900 py-2 px-3`}
        >
          <Link
            href="/"
            className="block mb-4 hover:bg-slate-700 rounded hover:rounded navlink"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            href="/games"
            className="block mb-4 hover:bg-slate-700 rounded hover:rounded navlink"
            onClick={() => setShowMenu(false)}
          >
            Games
          </Link>
          <Link
            href="/about"
            className="block mb-4 hover:bg-slate-700 rounded hover:rounded navlink"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
        </div>

        {showMenu ? null : (
          <div className="hidden lg:block">
            <Link
              href="/"
              className=" mx-3 hover:bg-slate-700 rounded hover:rounded navlink"
            >
              Home
            </Link>
            <Link
              href="/games"
              className=" mx-3 hover:bg-slate-700 rounded hover:rounded navlink"
            >
              Games
            </Link>
            <Link
              href="/about"
              className=" mx-3 hover:bg-slate-700 rounded hover:rounded navlink"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
