interface IProps {
  title: string;
  main: boolean;
}

const Title = ({ title, main }: IProps) => {
  return (
    <>
      {main ? (
        <h1 className="text-aurelion text-[28px] lg:text-main_title  p-0 w-title leading-10 tracking-title uppercase font-bold font-tomorrow lg:w-full">
          {title}
        </h1>
      ) : (
        <h3 className="text-alabaster text-title w-fit uppercase tracking-wider font-tomorrow">
          {title}
        </h3>
      )}
    </>
  );
};

export default Title;
