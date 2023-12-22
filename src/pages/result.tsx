import Button from "@/components/button";
import Statistic from "@/components/statistic";
import { useRouter } from "next/router";
import React from "react";

const Result = () => {
  const router = useRouter();
  const total = Number(router.query.total);
  const rigthAnswers = Number(router.query.rightAnswers);
  const percent = Math.round((rigthAnswers / total) * 100);
  return (
    <div className="flex flex-col justify-center items-center h-screen text-4xl">
      <h1 className="mb-10">Resultado final</h1>
      <div className="flex gap-5">
        <Statistic label="Perguntas" value={total} />
        <Statistic
          label="Certas"
          value={rigthAnswers}
          bgColor="bg-emerald-300"
        />
        <Statistic
          label="Percentual"
          value={`${percent}%`}
          bgColor="bg-orange-400"
        />
      </div>
      <Button href="/" label="Tentar novamente" />
    </div>
  );
};

export default Result;
