

import Image from "next/image"


interface SongProps {
  song: {
    title: string;
    artist: string;
    image: string;
    audio: string;
  };
  setCurrentSong: (song: SongProps["song"]) => void;
}


function SongCard({ song, setCurrentSong }: SongProps) {

  return (
    <div onClick={() => setCurrentSong(song)} className="flex items-center flex-col gap-2 hover:bg-stone-100 hover:-translate-y-0.5 rounded-3xl p-4 transition ease-linear">
      <div className="relative w-[80px] h-[80px]">
      <Image
        src={song.image}
        fill
        quality={100}
        className="rounded-2xl shadow-lg"
        alt="Album Image"
      />
      </div>
      <div className="flex flex-col text-center">
        <h1 className="text-[17px] tracking-[0.2em]">{song.title}</h1>
        <h1 className="text-[12px] tracking-[0.2em] font-light">{song.artist}</h1>
      </div>
    </div>
  );
}

export default SongCard;