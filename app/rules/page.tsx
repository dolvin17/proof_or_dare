import Image from "next/image";
import Link from "next/link";
import { GiLifeBar } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";
import { RiHandCoinFill } from "react-icons/ri";
import { SiRetroarch } from "react-icons/si";

export default function Rules() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12  text-black">
        <div className="w-full max-w-md mx-auto space-y-4 py-8 px-4">
          <h1 className="text-5xl py-8 font-bold text-center mb-8 border-y border-black">
            {" "}
            Game Rules{" "}
          </h1>
          <div className="flex gap-2 ">
            <GiLifeBar className="animate-fade-right text-xl" />
            You start with 2 lives (skip tokens).
          </div>
          <div className="flex gap-2 ">
            <TbWorld className="animate-fade-right text-xl" />
            Want to skip a tough one? Pay with World tokens.
          </div>
          <div className="flex gap-2 ">
            <FaArrowTrendUp className="animate-fade-right text-xl" />
            Complete Truths and Dares to level up.
          </div>
          <div className="flex gap-2 ">
            <RiHandCoinFill className="animate-fade-right text-xl" />
            Reach final level → earn World tokens + rewards
          </div>
          <SiRetroarch className="animate-bounce text-[100px] animate-infinite mx-auto " />
          <div className="pt-2 border-y border-black"></div>
          <p>
            You’re about to enter to the game
            <br />
            Prove your reputation. Complete the dares.
            <br />
            Make it to the top, anon.
            <br />
          </p>
          <Link href="/game">
            <button className="rounded-xl border-1 mt-8 border-yellow-200 bg-black text-white p-4 flex mx-auto text-xs">
              Start Game
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
