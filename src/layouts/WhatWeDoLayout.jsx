import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";

export default function WhatWeDoLayout() {
  return (
    <div className="w-full bg-white text-black">
      <Navbar />

      <div className="mt-[80px]">
        <Outlet />
      </div>

      <Footer />
      <Lastfooter />
    </div>
  );
}