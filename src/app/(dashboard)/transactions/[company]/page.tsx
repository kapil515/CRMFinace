"use client";

import IncomeCards from "@/app/(dashboard)/component/Totalincome";
import BorrowCards from "@/app/(dashboard)/component/Totalborrow";
import TransactionsTable from "./components/TransactionsTable";
import { useParams } from "next/navigation";

export default function CompanyPage() {
  const { company } = useParams();
  const companyName = company?.toString().toUpperCase() || "Transactions";

  return (
    <div className="p-6">
      {/* <h1 className="text-2xl font-bold mb-8">{companyName} Transactions</h1> */}
      <IncomeCards />
      <BorrowCards />
      <TransactionsTable title={`${companyName} Recent Transactions`} />
    </div>
  );
}