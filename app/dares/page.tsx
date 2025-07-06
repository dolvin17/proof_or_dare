import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";

export default function Dares() {
  return (
    <>
      <div className=" min-h-screen">
        <Link href="/proofs">
          {" "}
          <button className="m-3 rounded-xl border-[1px] items-center  border-black bg-white text-black p-4 flex mx-auto text-xs">
            <MdArrowBackIos />
            Back
          </button>
        </Link>
        <h1 className="text-5xl py-8 font-bold text-center">
          Real Dares
          <br /> Real Web3
        </h1>
        <div className="border-[1px] rounded-xl border-black p-2">
          <div className="flex items-center gap-2 ">
            <IoIosArrowDropright className="animate-fade-right" />
            <strong>Use</strong> any other World App mini app
            <br />
          </div>
          <div className="flex items-center gap-2 ">
            <IoIosArrowDropright className="animate-fade-right" />
            <strong>Send</strong> any token to another wallet
            <br />
          </div>
          <div className="flex items-center gap-2 ">
            <IoIosArrowDropright className="animate-fade-right" />
            <strong>Follow</strong> a World ecosystem project on Farcaster
            <br />
          </div>
          <div className="flex items-center gap-2 ">
            <IoIosArrowDropright className="animate-fade-right" />
            <strong>Submit</strong> your first proof on Proof or Dare
            <br />
          </div>
          <div className="flex gap-2 ">
            <IoIosArrowDropright className="animate-fade-right" />
            <strong>Invite</strong> a friend to try a mini app
            <br />
          </div>
        </div>
        <p className="text-center py-8text-center animate-pulse py-8 ">
          {" "}
          Note:
          <br />
          We will verify that you did them.
          <br />
          Ready to prove it?{" "}
        </p>
        <Link href="/rules">
          <button className="rounded-xl border-1 mb-8 border-yellow-200 bg-black text-white p-4 flex mx-auto text-xs">
            Show me the rules
          </button>
        </Link>
      </div>
    </>
  );
}
