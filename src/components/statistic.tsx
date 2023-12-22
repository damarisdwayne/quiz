import React from "react";

interface StatisticProps {
  value: any;
  label: string;
  bgColor?: string;
  textColor?: string;
}

const Statistic = (props: StatisticProps) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`${props.bgColor ?? "bg-amber-300"} ${
          props.textColor ?? "text-gray-700"
        } flex h-[180px] w-[180px] items-center justify-center rounded-[90px] text-6xl`}
      >
        {props.value}
      </div>
      <div className="text-gray-300 text-3xl font-extralight">
        {props.label}
      </div>
    </div>
  );
};

export default Statistic;
