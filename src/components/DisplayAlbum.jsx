import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, songsData, assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData.find((album) => album.id === parseInt(id));

  const { playWithId } = useContext(PlayerContext);

  if (!albumData) {
    return (
      <>
        <Navbar />
        <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
          <p>Album not found</p>
        </div>
      </>
    );
  }

  const albumSongs = songsData.filter((song) => song.albumId === parseInt(id));

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-48 rounded"
          src={albumData.image}
          alt={albumData.name}
        />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt="Spotify Logo"
            />
            <b>Spotify</b>. 1,323,154 likes . <b>50 songs,</b> about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>
          Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="Clock Icon" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div key={item.id}>
          <div
            onClick={() => playWithId(item.id)}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center cursor-pointer"
          >
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img
                className="inline w-10 mr-5"
                src={item.image}
                alt={item.name}
              />
              {item.name}
            </p>
            <p className="text-[15px]">{albumData.name}</p>
            <p className="text-[15px] hidden sm:block">{item.date}</p>
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
