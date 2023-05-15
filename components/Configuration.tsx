"use client";

import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext } from "react";
import CheckBox from "./CheckBox";
import { Config } from "@/services/Config";

const Configuration = () => {
  const { config, setConfig } = useContext(GlobalContext).configContext;
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-10  max-w-[588px]">
      <CheckBox
        name="Uppercase letters"
        value={config.uppercase}
        onChange={(e) => Config.setUppercase(e, { config, setConfig })}
      />
      <CheckBox
        name="Lowercase letters"
        value={config.lowercase}
        onChange={(e) => Config.setLowercase(e, { config, setConfig })}
      />
      <CheckBox
        name="Numbers"
        value={config.numbers}
        onChange={(e) => Config.setNumbers(e, { config, setConfig })}
      />
      <CheckBox
        name="Symbols"
        value={config.symbols}
        onChange={(e) => Config.setSymbols(e, { config, setConfig })}
      />
    </div>
  );
};

export default Configuration;
