import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";

export default function Proofs() {
  return (
    <>
    <div className="h-auto bg-white p-3  min-h-screen">

   
      <Link href="/choose">
        {" "}
        <button className=" pt-4 rounded-xl border-[1px] items-center  border-black bg-white text-black p-4 flex mx-auto text-xs">
          <MdArrowBackIos />
          Back
        </button>
      </Link>
      <h1 className="text-5xl py-8 font-bold text-center  ">
        Some Truths You Can Prove
      </h1>
      <div className="border-[1px] rounded-xl border-black p-2">
        <div className="flex items-center gap-2 ">
          <IoIosArrowDropright className="animate-fade-right" />
          Wallet holds at least 1 token (fungible or NFT)
          <br />
        </div>
        <div className="flex items-center gap-2 ">
          <IoIosArrowDropright className="animate-fade-right"/>
          Wallet has at least 1 onchain tx
          <br />
        </div>
        <div className="flex items-center gap-2 ">
          <IoIosArrowDropright className="animate-fade-right" />
          Wallet has received at least 1 incoming tx
          <br />
        </div>
        <div className="flex items-center gap-2 ">
          <IoIosArrowDropright className="animate-fade-right" />
          Wallet has sent at least 1 tx
          <br />
        </div>
        <div className="flex items-center gap-2 ">
          <IoIosArrowDropright className="animate-fade-right" />
          World ID verification completed
          <br />
        </div>
      </div>
      <p className="text-center py-8text-center animate-pulse py-8 ">
        {" "}
        Note:
        <br />
        You will verify these with zk proofs. No wallet doxxxxing. Just truth.
      </p>
      <Link href="/dares">
        <button className="rounded-xl border-1 mb-8 border-yellow-200 bg-black text-white p-4 flex mx-auto text-xs">
          What's a dare
        </button>
      </Link>
       </div>
    </>
  );
}
