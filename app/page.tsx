import CopyButton from "@/components/CopyButton";
import Input from "@/components/Input";
import Title from "@/components/Title";
import { Tomorrow } from "next/font/google";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <main className={`${tomorrow.className} bg-black h-screen`}>
      <div className="container">
        <div className="inner py-24 relative">
          <div className="generator flex flex-col gap-16">
            <Title title="Password Generator" main />
            <div className="flex flex-col gap-5">
              <Input />
              <CopyButton />
            </div>
          </div>
          <div className="history"></div>
        </div>
      </div>
    </main>
  );
}
