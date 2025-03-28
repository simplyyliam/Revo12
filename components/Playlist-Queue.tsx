
import React from 'react'
import SongCard from './SongCard';
interface PlaylistProps {
  setCurrentSong: (song: { title: string; artist: string; image: string; audio: string }) => void;
}

function PlaylistQueue({ setCurrentSong }: PlaylistProps) {
    const songs = [
      { title: "Limbo", artist: "Keshi", image: "/Keshi.png", audio: "/limbo.mp3" },
      { title: "Blue", artist: "Young Kai", image: "/blue.png", audio: "/youbg kai - blue.mp3" },
      { title: "Blinding Lights", artist: "The Weeknd", image: "/blinding.png", audio: "/The Weekend - blinding light.mp3" },
    ];
  return (
    <div className="flex flex-col items-center justify-center p-10 px-4 w-full h-full">
      <h1 className="text-[17px]  tracking-[0.2em] flex-auto">
        Playlist Collection
      </h1>
      <div className="scrollbar-hide w-100 h-50 flex overflow-x-auto items-center ">
        <div className="flex gap-6">
        {songs.map((song, index) => (
            <SongCard key={index} song={song} setCurrentSong={setCurrentSong} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlaylistQueue;