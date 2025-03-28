"use client";

import PlaylistQueue from "@/components/Playlist-Queue";
import VolumeKnob from "@/components/Volume-Knob";
import Vynil from "@/components/Vynil";
import { useState } from "react";

function Neo12() {
  const [currentSong, setCurrentSong] = useState({
    title: "Limbo",
    artist: "Keshi",
    image: "/Keshi.png",
    audio: "/LIMBO.mp3",
  });

  return (
    <div className="bg-white drop-shadow-2xl w-[83em] h-[43em] rounded-[80px] flex items-center p-15 gap-40 ">
      <Vynil song={currentSong} />
      <div className="flex flex-col  h-full flex-auto items-center gap-4">
        <div className="w-full h-full flex items-center justify-center">
          <VolumeKnob />
        </div>
        <div className="w-full h-full flex items-center justify-center ">
          <PlaylistQueue setCurrentSong={setCurrentSong}/>
        </div>
      </div>
    </div>
  );
}

export default Neo12;
