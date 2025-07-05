import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";

export default function Proofs() {
  return (
    <>
      <Link href="/choose">
        {" "}
        <button className="m-3 rounded-xl border-[1px] items-center  border-black bg-white text-black p-4 flex mx-auto text-xs">
          <MdArrowBackIos />
          Back
        </button>
      </Link>
      <h1 className="text-5xl py-8 font-bold text-center  bg-gradient-to-bl from-cyan-100 via-pink-100 to-lime-100">
        Some Truths You Can Prove
      </h1>
      <div className="border-[1px] rounded-xl border-black p-2">
        ✅ Wallet holds at least 1 token (fungible or NFT)
        <br />
        ✅ Wallet has at least 1 onchain tx
        <br />
        ✅ Wallet has received at least 1 incoming tx
        <br />
        ✅ Wallet has sent at least 1 tx
        <br />
        ✅ World ID verification completed
        <br />
      </div>
      <p className="text-center py-8text-center animate-pulse py-8 ">
        {" "}
        Note:
        <br />
        You will verify these with zk proofs. No wallet doxxxxing. Just truth.
      </p>
      <Link href="/dare">
          <button className="rounded-xl border-1 border-yellow-200 bg-white text-black p-4 flex mx-auto text-xs">
            What's a dare
          </button>
        </Link>
    </>
  );
}
