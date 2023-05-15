"use client";
import { GlobalContext } from "@/contexts/GlobalContext";
import { ChangeEvent, useContext } from "react";
const LengthControl = () => {
  const { config, setConfig } = useContext(GlobalContext).configContext;
  return (
    <div className="input-control flex flex-col gap-3 max-w-[588px]">
      <span className="text-aqua text-title font-bold block w-full text-center font-tomorrow">
        {config.length}
      </span>
      <input
        type="range"
        min={8}
        max={32}
        step={1}
        value={config.length}
        className="py-2 font-tomorrow"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setConfig({ ...config, length: e.target.valueAsNumber })
        }
      />
    </div>
  );
};

export default LengthControl;
