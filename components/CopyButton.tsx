"use client";
import Image from "next/image";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { toast } from "react-toastify";

const CopyButton = () => {
  const { password } = useContext(GlobalContext).passwordContext;
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(password.value);
        toast("Copied to clipboard!");
      }}
      className="bg-aurelion relative py-5 px-5 w-button flex items-center justify-between gap-3 border-r-4 border-solid border-r-coolred hover:border-r-8 transition-all overflow-hiddenS"
    >
      <span className="uppercase font-semibold text-black text-text tracking-wider block">
        Copy Password_
      </span>
      <AiOutlineArrowRight color="black" className="w-6 h-6" />
      <div className="absolute rotate-45 w-7 h-7 -bottom-4 -left-4 bg-black"></div>
    </button>
  );
};

export default CopyButton;
