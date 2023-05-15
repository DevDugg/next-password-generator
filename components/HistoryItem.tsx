import { IPassword } from "@/types/password.type";
import { RxCopy } from "react-icons/rx";
import { toast } from "react-toastify";

interface IProps {
  value: IPassword["value"];
}

const HistoryItem = ({ value }: IProps) => {
  return (
    <div
      className="history-item flex gap-5 justify-between items-center cursor-pointer"
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        toast("Copied to clipboard!");
      }}
    >
      <span className="text-alabaster text-text tracking-wider font-normal font-tomorrow">
        {value}
      </span>

      <RxCopy color="#fafafa" fill="#fafafa" className="w-6 h-6" />
    </div>
  );
};

export default HistoryItem;
