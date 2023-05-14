import { Dispatch, SetStateAction } from "react";

export interface IConfig {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  length: number;
}

export interface IConfigContext {
  config: IConfig;
  setConfig: Dispatch<SetStateAction<IConfig>>;
}
