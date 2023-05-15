import Author from "@/components/Author";
import Configuration from "@/components/Configuration";
import CopyButton from "@/components/CopyButton";
import Input from "@/components/Input";
import LengthControl from "@/components/LengthControl";
import PasswordHistory from "@/components/PasswordHistory";
import Title from "@/components/Title";

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Home() {
  return (
    <main className="bg-black min-h-screen h-full pb-[88px]">
      <div className="container h-full">
        <div className="inner py-24 relative flex flex-col h-full gap-6 lg:grid lg:grid-cols-main">
          <div className="generator flex flex-col gap-16">
            <Title title="Password Generator" main />
            <Author />
            <div className="flex flex-col gap-5">
              <Input />
              <CopyButton />
              <LengthControl />
            </div>
            <Configuration />
          </div>
          <div className="history h-fit w-full mt-32">
            <PasswordHistory />
          </div>
        </div>
      </div>
    </main>
  );
}
