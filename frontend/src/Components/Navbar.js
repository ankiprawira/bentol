import React from "react";
import "../Styles/Navbar.css";
import Logo from "../assets/logoA.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="bg-blue px-2 sm:px-4 py-2.5 font-nunito tracking-wide sticky top-0">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/">
          <div class="flex items-center">
            <img src={Logo} alt="logo bentol" className="w-36" />
            <span class="self-center text-sm ml-8 whitespace-nowrap dark:text-white">
              BERANDA
            </span>
          </div>
        </Link>
        <div>
          <Link to="/login">
            <button class="h-9 px-10 m-2 bg-white hover:bg-silver rounded-lg text-black place-item-start">
              Masuk
            </button>
          </Link>
          <Link to="/register">
            <button class="h-9 px-10 m-2 bg-white hover:bg-silver rounded-lg text-black place-item-start">
              Daftar
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
