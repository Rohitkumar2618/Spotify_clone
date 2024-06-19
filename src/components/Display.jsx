import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

const Display = () => {
  // !using this we add color according to album
  const displayRef = useRef();
  const location = useLocation();

  // isse album ki id nikali
  const isAlbum = location.pathname.includes("album");

  const albumId = isAlbum ? location.pathname.slice(-1) : "";

  // Kisi particular album pe bg color konsa hai vo nikala
  const bgColor = albumsData[Number(albumId)].bgColor;

  // useeffect se vo render ho rha hai
  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  });

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212]  text-white overflow-auto lg: w-[75
  5%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
