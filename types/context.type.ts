import { IConfigContext } from "./config.type";
import { IPasswordContext, IPasswordsContext } from "./password.type";

export interface IContext {
  passwordContext: IPasswordContext;
  passwordsContext: IPasswordsContext;
  configContext: IConfigContext;
}
