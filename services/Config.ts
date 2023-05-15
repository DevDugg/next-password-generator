import { IConfigContext } from "@/types/config.type";
import { ChangeEvent } from "react";
import { GratitudeToast } from "./GratitudeToast";

export class Config {
  static setUppercase(
    e: ChangeEvent<HTMLInputElement>,
    config: IConfigContext
  ) {
    const { lowercase, numbers, symbols } = config.config;
    if (!lowercase && !numbers && !symbols) return GratitudeToast.randomToast();
    return config.setConfig({ ...config.config, uppercase: e.target.checked });
  }
  static setLowercase(
    e: ChangeEvent<HTMLInputElement>,
    config: IConfigContext
  ) {
    const { uppercase, numbers, symbols } = config.config;
    if (!uppercase && !numbers && !symbols) return GratitudeToast.randomToast();
    return config.setConfig({ ...config.config, lowercase: e.target.checked });
  }
  static setSymbols(e: ChangeEvent<HTMLInputElement>, config: IConfigContext) {
    const { lowercase, numbers, uppercase } = config.config;
    if (!lowercase && !numbers && !uppercase)
      return GratitudeToast.randomToast();
    return config.setConfig({ ...config.config, symbols: e.target.checked });
  }
  static setNumbers(e: ChangeEvent<HTMLInputElement>, config: IConfigContext) {
    const { lowercase, symbols, uppercase } = config.config;
    if (!lowercase && !symbols && !uppercase)
      return GratitudeToast.randomToast();
    return config.setConfig({ ...config.config, numbers: e.target.checked });
  }
}
