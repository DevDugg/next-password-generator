import { IPassword } from "@/types/password.type";
import { RxCopy } from "react-icons/rx";
import { toast } from "react-toastify";

interface IProps {
  value: IPassword["value"];
}

const HistoryItem = ({ value }: IProps) => {
  return (
    <div className="history-item flex gap-5 justify-between items-center">
      <span className="text-alabaster text-text tracking-wider font-normal">
        {value}
      </span>
      <button
        type="button"
        onClick={async () => {
          await navigator.clipboard.writeText(value);
          toast("Copied to clipboard!");
        }}
      >
        <RxCopy color="#fafafa" fill="#fafafa" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HistoryItem;
