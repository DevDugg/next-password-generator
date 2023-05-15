"use client";
import { useEffect, useMemo, useState } from "react";
import "./globals.css";
import { GlobalContext } from "@/contexts/GlobalContext";
import { IConfig } from "@/types/config.type";
import { IPassword } from "@/types/password.type";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tomorrow } from "next/font/google";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-tomorrow",
});

export const metadata = {
  title: "Password generator",
  description: "Password generator by VividTruthKeeper",
};

interface IProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IProps) => {
  // Default config
  const [config, setConfig] = useState<IConfig>({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
    length: 12,
  });

  const [password, setPassword] = useState<IPassword>({ ...config, value: "" });
  const [passwords, setPasswords] = useState<IPassword[]>([]);

  const passwordContext = useMemo(
    () => ({ password, setPassword }),
    [password, setPassword]
  );
  const configContext = useMemo(
    () => ({ config, setConfig }),
    [config, setConfig]
  );
  const passwordsContext = useMemo(
    () => ({ passwords, setPasswords }),
    [passwords, setPasswords]
  );

  useEffect(() => {
    if (passwordContext.password.value.length === 0) return;
    passwordsContext.setPasswords([
      ...passwordsContext.passwords,
      passwordContext.password,
    ]);
  }, [passwordContext.password]);

  return (
    <html lang="en" className={tomorrow.variable}>
      <body>
        <GlobalContext.Provider
          value={{ passwordContext, passwordsContext, configContext }}
        >
          <ToastContainer
            closeOnClick
            position="top-right"
            theme="dark"
            autoClose={2000}
            bodyStyle={{ fontFamily: "var(--font-tomorrow)" }}
            progressStyle={{ background: "#F8EF00" }}
          />
          {children}
        </GlobalContext.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
