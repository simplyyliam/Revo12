"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gsap } from "gsap";

interface Props {
  song: {
    title: string;
    artist: string;
    image: string;
    audio: string;
  };
}

function Vynil({ song }: Props) {
  const [isPlaying, setIsplaying] = useState(false);

  const AudioRef = useRef<HTMLAudioElement | null>(null);
  const VynilRef = useRef(null);

  const handlePlay = () => {
    if (AudioRef.current) {
      AudioRef.current
        .play()
        .then(() => {
          setIsplaying(true)
          gsap.to(VynilRef.current, {
              rotateZ: 360,
              repeat: -1,
              ease: "none",
              duration: 5 
          })
        })
    }
  };

  const handlePause = () => {
    if (AudioRef.current) {
      AudioRef.current.pause();
      setIsplaying(false);
      gsap.killTweensOf(VynilRef.current);
    }
  };

  const handleAudio = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };


  return (
    <>
      <div
        ref={VynilRef}
        className="relative w-[38em] h-[38em] bg-Vynil rounded-full flex items-center justify-center px-10 drop-shadow-2xl shadow- xl"
      >
        <div className="flex gap-8 items-center justify-center w-full">
          <div className="relative w-[176px] h-[176px]">
            <Image
              src={song.image}
              quality={100}
              fill
              alt="Album Image"
              className="bg-black drop-shadow-xl rounded-full"
            />
          </div>
        </div>
        <audio ref={AudioRef} src={song.audio} />
      </div>
      <div className="flex gap-9 items-center justify-center absolute left-125 ">
        <button className="flex items-center justify-center">
          <Image
            src="/Previous.png"
            width={20}
            height={20}
            quality={100}
            alt="Previous Music Control"
          />
        </button>
        <button
          onClick={handleAudio}
          className="flex items-center justify-center"
        >
          <Image
            src="/Play.png"
            width={20}
            height={20}
            quality={100}
            alt="Previous Music Control"
          />
        </button>
        <button className="flex items-center justify-center">
          <Image
            src="/Forward.png"
            width={20}
            height={20}
            quality={100}
            alt="Previous Music Control"
          />
        </button>
      </div>
      <h1 className="text-white/50 text-[17px]  tracking-[0.2em] flex-auto font-light absolute left-24">
        {song.title} - {song.artist}
      </h1>
    </>
  );
}

export default Vynil;
