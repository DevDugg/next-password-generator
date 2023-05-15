"use client";
import { GlobalContext } from "@/contexts/GlobalContext";
import { Password } from "@/services/Password";
import { useContext, useEffect } from "react";
import { VscDebugRestart } from "react-icons/vsc";

const Input = () => {
  const context = useContext(GlobalContext);
  const { password, setPassword } = context.passwordContext;
  const { config } = context.configContext;

  useEffect(() => {
    setPassword({ ...password, value: Password.generate(config) });
  }, []);
  return (
    <div className="border-2 border-solid border-aqua p-5 flex gap-3 items-center justify-between w-full max-w-[588px]">
      <input
        type="text"
        value={password.value}
        readOnly
        className="w-full bg-transparent text-aqua text-text outline-none"
      />
      <button
        type="button"
        className="w-fit"
        onClick={() => {
          setPassword({ ...password, value: Password.generate(config) });
        }}
      >
        <VscDebugRestart color="#00F0FF" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Input;
