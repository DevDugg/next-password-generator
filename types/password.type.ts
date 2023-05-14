import { IConfig } from "@/types/config.type";
import { Dispatch, SetStateAction } from "react";

export interface IPassword extends IConfig {
  value: string;
}

export interface IPasswordContext {
  password: IPassword;
  setPassword: Dispatch<SetStateAction<IPassword>>;
}

export interface IPasswordsContext {
  passwords: IPassword[];
  setPasswords: Dispatch<SetStateAction<IPassword[]>>;
}
