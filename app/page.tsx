"use client";
import { useEffect, useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";
import { VerifyBlock } from "@/components/Verify";
import { PayBlock } from "@/components/Pay";
import { WalletAuth } from "@/components/WalletAuth";
import { Login } from "@/components/Login";
import Link from "next/link";
import Choose from "./choose/page";
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMiniKit = async () => {
      const isInstalled = MiniKit.isInstalled();
      if (isInstalled) {
        setIsLoading(false);
      } else {
        setTimeout(checkMiniKit, 500);
      }
    };

    checkMiniKit();
  }, []);

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 lg:p-12 bg-gray-50">
        <div className="flex flex-col items-center justify-center text-center">
          <svg
            className="animate-spin h-10 w-10 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="mt-4 text-lg font-medium text-gray-900">
            Loading MiniKit...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12  text-black">
      <div className="w-full max-w-md mx-auto space-y-8 py-8 px-4">
        <h1 className="text-5xl py-8 font-bold text-center mb-8 border-y border-black"> Proof or Dare</h1>
        <p>
          A game of <strong> Truth or Dare </strong>where your identity stays
          private
        </p>
        <p className="animate-fade-left animate-once animate-duration-1000 animate-delay-1000 animate-ease-in-out">
          Build your <strong>onchain reputation</strong>, prove your activity,
          and earn rewards.
        </p>
        <p className="text-center animate-pulse py-8 text-xl">
          Only real humans allowed.
        </p>
       <Image className="flex mx-auto pb-8" src="/human.gif" alt="human_image" height={150} width={150} />

        <Link href="/choose">
          <button className="rounded-xl border-1 border-yellow-200 bg-black text-white p-4 flex mx-auto text-xs">
            Continue
          </button>
        </Link>
      </div>
    </main>
  );
}
