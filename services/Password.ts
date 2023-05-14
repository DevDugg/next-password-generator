import { IConfig } from "@/types/config.type";

export class Password {
  static readonly lowercaseAlphabet: string = "abcdefghijklmnopqrstuvwxyz";
  static readonly numbers: string = "0123456789";
  static readonly symbols: string = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
  static readonly uppercaseAlphabet: string =
    this.lowercaseAlphabet.toUpperCase();

  static getRandomNumber(range: number) {
    return Math.floor(Math.random() * range);
  }

  static generate(config: IConfig): string {
    let final = "";

    if (
      config.lowercase &&
      config.uppercase &&
      config.numbers &&
      config.symbols
    ) {
      for (let i = 0; i < config.length; i++) {
        const types: ["lower", "upper", "symbols", "numbers"] = [
          "lower",
          "upper",
          "symbols",
          "numbers",
        ];
        const type = types[this.getRandomNumber(types.length)];
        let randomNumber;
        switch (type) {
          case "lower":
            randomNumber = this.getRandomNumber(this.lowercaseAlphabet.length);
            final = final + this.lowercaseAlphabet.charAt(randomNumber);
          case "upper":
            randomNumber = this.getRandomNumber(this.uppercaseAlphabet.length);
            final = final + this.uppercaseAlphabet.charAt(randomNumber);
          case "symbols":
            randomNumber = this.getRandomNumber(this.symbols.length);
            final = final + this.symbols.charAt(randomNumber);
          case "numbers":
            randomNumber = this.getRandomNumber(this.numbers.length);
            final = final + this.numbers.charAt(randomNumber);
          default:
            null;
        }
      }
    } else if (
      config.lowercase &&
      config.uppercase &&
      config.numbers &&
      !config.symbols
    ) {
      for (let i = 0; i < config.length; i++) {
        const types: ["lower", "upper", "numbers"] = [
          "lower",
          "upper",
          "numbers",
        ];
        const type = types[this.getRandomNumber(types.length)];
        let randomNumber;
        switch (type) {
          case "lower":
            randomNumber = this.getRandomNumber(this.lowercaseAlphabet.length);
            final = final + this.lowercaseAlphabet.charAt(randomNumber);
          case "upper":
            randomNumber = this.getRandomNumber(this.uppercaseAlphabet.length);
            final = final + this.uppercaseAlphabet.charAt(randomNumber);
          case "numbers":
            randomNumber = this.getRandomNumber(this.numbers.length);
            final = final + this.numbers.charAt(randomNumber);
          default:
            null;
        }
      }
    }
  }
}
