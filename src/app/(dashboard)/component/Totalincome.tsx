"use client";

import { Card } from "./Card";
import { COMPANY_DATA } from "@/app/(dashboard)/component/TransactionsData";
import { useParams } from "next/navigation";

export default function IncomeCards() {
  const { company } = useParams();
  const companyKey = company as string;
  const data = COMPANY_DATA[companyKey]?.incomeCards || COMPANY_DATA["mdb"].incomeCards;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
      {data.map((item, index) => (
        <Card key={index} title={item.title} amount={item.amount} percent={item.percent} />
      ))}
    </div>
  );
}