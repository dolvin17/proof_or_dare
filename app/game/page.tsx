import Image from "next/image";
import Link from "next/link";

export default function Game() {
  return (
    <div className="flex justify-center bg-gradient-to-tl from-cyan-100 via-pink-200 to-yellow-100 gap-24  flex-col items-center min-h-screen ">
      <Link href="/randomproof">
        <button
          aria-description="caja reto"
          className="
        size-48 rounded-full border-[1px] border-black  bg-black text-white
        flex items-center justify-center text-xl 
        animate-pulse animate-infinite animate-duration-700 animate-delay-100 
        "
        >
          DARE
        </button>
      </Link>
      <div className="pt-2 border-y border-black w-full mx-auto"></div>
      <Link href="/">
        <button
          aria-description="caja verdad"
          className="
        size-48 rounded-full border-[1px] border-black  bg-black text-white
        flex items-center justify-center text-xl 
        animate-pulse animate-infinite animate-duration-1000
        "
        >
          TRUTH
        </button>
      </Link>
    </div>
  );
}
