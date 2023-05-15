import { ChangeEvent } from "react";

interface IProps {
  name: string;
  value: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ name, onChange, value }: IProps) => {
  return (
    <div className="flex gap-2 items-center relative">
      <div
        className="w-6 h-6 border-2 border-solid border-aurelion bg-transparent transition-all absolute z-0"
        style={value ? { backgroundColor: "#f8ef00" } : {}}
      ></div>
      <input
        type="checkbox"
        id={name}
        value={value ? "1" : "0"}
        checked={value}
        onChange={onChange}
        className="opacity-0 cursor-pointer h-6 w-6"
      />
      <label
        htmlFor={name}
        className="text-alabaster text-text tracking-wider font-normal pl-4 w-full cursor-pointer"
      >
        {name}
      </label>
    </div>
  );
};

export default CheckBox;
