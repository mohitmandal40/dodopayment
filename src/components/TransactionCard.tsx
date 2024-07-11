"use client";

import { formatNumber, getStatusText } from "@/app/utils/helper";
import { TrendingDown, TrendingUp } from "lucide-react";

const TransactionCard: React.FC<{
  title: string;
  amount: number;
  status: number;
  idx: number;
  classes: string;
}> = ({ title, amount, status, idx, classes }) => {
  return (
    <div
      className={`flex flex-wrap xl:max-w-[202px] flex-col p-6 ${
        idx % 2 !== 0 ? "bg-[#DBE6F2]" : "bg-amber-50"
      } rounded-2xl max-h-[112px] w-[202px] ${classes}`}
    >
      <div className="flex flex-col flex-wrap justify-center text-sm font-semibold leading-5 whitespace-nowrap rounded-lg text-zinc-900">
        <div className="justify-center rounded-lg">{title}</div>
      </div>
      <div className="flex items-center gap-2 gap-y-2 justify-between mt-2 rounded-lg">
        <div className="justify-center text-2xl font-semibold leading-9 whitespace-nowrap rounded-lg text-zinc-900">
          {idx % 2 === 0 ? "$" : ""}
          {formatNumber(amount)}
        </div>
        <div className="flex gap-1 my-auto rounded-lg">
          <div
            className={`justify-center text-xs leading-5 whitespace-nowrap rounded-lg text-zinc-900`}
          >
            {getStatusText(status)}
          </div>
          <div className="flex justify-center items-center self-start rounded-lg">
            {status > 0 ? (
              <TrendingUp className="text-black size-4" />
            ) : (
              <TrendingDown className="text-black size-4" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
