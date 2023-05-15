import { IConfig } from "@/types/config.type";
import { generate } from "generate-password";

export class Password {
  static generate(config: IConfig) {
    return generate(config);
  }
}
