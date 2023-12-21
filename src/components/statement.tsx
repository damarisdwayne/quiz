import React from "react";

interface StatementProps {
  label: string;
}

const Statement = (props: StatementProps) => {
  return (
    <div className="flex items-center justify-center">
      <span className="font-bold text-4xl">{props.label}</span>
    </div>
  );
};

export default Statement;
