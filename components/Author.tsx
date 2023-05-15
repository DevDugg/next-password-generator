import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const Author = () => {
  return (
    <div
      className={`author ${barlow.className} flex items-center gap-7 fixed bottom-8 left-10`}
    >
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
  );
};

export default Author;
