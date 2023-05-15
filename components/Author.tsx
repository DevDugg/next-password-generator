import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const Author = () => {
  return (
    <div
      className={`author ${barlow.className} flex items-center justify-center gap-7 fixed bottom-0 left-0 bg-black w-full py-6 shadow-footer z-30`}
    >
      <div className="flex flex-col gap-6">
        <div>
          <a
            href="https://github.com/VividTruthKeeper/next-password-generator"
            target="_blank"
            className="uppercase text-alabaster text-xs p-3 transition-all hover:text-neutral400"
          >
            Source code
          </a>
          <a
            href="https://github.com/VividTruthKeeper"
            target="_blank"
            className="uppercase text-alabaster text-xs p-3 transition-all hover:text-neutral400"
          >
            Author
          </a>
        </div>
        <span className="text-alabaster text-center">VividTruthKeeper</span>
      </div>
    </div>
  );
};

export default Author;
