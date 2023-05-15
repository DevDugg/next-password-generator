"use client";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext } from "react";
import HistoryItem from "./HistoryItem";
import { v4 } from "uuid";

const PasswordHistory = () => {
  const { passwords, setPasswords } =
    useContext(GlobalContext).passwordsContext;
  return (
    <div className="flex flex-col gap-9">
      <h2 className="text-alabaster text-title tracking-widest font-bold uppercase font-tomorrow w-full text-center lg:text-left">
        Password history
      </h2>
      <div
        className="flex flex-col gap-7 max-h-96 overflow-y-auto"
        style={passwords.length > 0 ? { paddingRight: 24 } : {}}
      >
        {passwords.length > 0 ? (
          passwords.map((password) => (
            <HistoryItem key={v4()} value={password.value} />
          ))
        ) : (
          <span className="text-text text-alabaster font-normal w-full text-center py-8 font-tomorrow">
            No history
          </span>
        )}
      </div>
      <button
        type="button"
        onClick={() => setPasswords([])}
        disabled={passwords.length < 1}
        className="text-text text-aurelion font-normal tracking-wider font-tomorrow"
      >
        Clear history
      </button>
    </div>
  );
};

export default PasswordHistory;
