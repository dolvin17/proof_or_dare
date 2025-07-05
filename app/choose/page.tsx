import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import Image from "next/image";

export default function Choose() {
  return (
    <>
      <div className="bg-[#ffffff]">
        <Link href="/">
          {" "}
          <button className="m-3 rounded-xl border-[1px] items-center  border-black bg-white text-black p-4 flex mx-auto text-xs">
            <MdArrowBackIos />
            Back
          </button>
        </Link>

        <h1 className="text-5xl py-8 font-bold text-center  bg-gradient-to-bl from-black/10 via-white to-black/10 ">
          System reputation
        </h1>
        <div
          aria-description="caja grande"
          className="flex gap-1 m-1 text-md py-4  border-y-[1px] rounded-sm border-black"
        >
          <div
            aria-description="caja izquierda"
            className="border-[1px] border-black rounded-xl p-2"
          >
            Choose a Truth and prove it with a ZK proof.
          </div>
          <div
            aria-description="caja del medio"
            className="border-[1px] border-black rounded-xl p-2 flex items-center bg-black text-white"
          >
            OR
          </div>
          <div
            aria-description="caja derecha"
            className="border-[1px] border-black rounded-xl p-2"
          >
            Accept a Dare, a real challenge across Web3.
          </div>
        </div>
        <p className="text-center animate-pulse py-8 text-xl">
          Level up by completing tasks.
          <br />
          Get World tokens at the top.
        </p>
        <Image
          className="flex mx-auto"
          src="/bar_level.gif"
          alt="human_image"
          height={10}
          width={150}
        />
        <Link href="/proofs">
          <button className="rounded-xl border-1 mb-8 border-yellow-200 bg-black text-white p-4 flex mx-auto text-xs">
            Show me more
          </button>
        </Link>
      </div>
    </>
  );
}
