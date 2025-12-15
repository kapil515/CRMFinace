"use client";

import { useParams } from "next/navigation";
import Totalincome from "../../component/Totalincome";
import Totalborrow from "../../component/Totalborrow";
import TransactionsTable from "./components/TransactionsTable";

const companyNames: Record<string, string> = {
  mdb: "MDB",
  virtual: "Virtual",
  bav: "BAV",
  horizonacademy: "Horizon Academy",
  delhi: "Delhi Branch",
  mumbai: "Mumbai Branch",
};

export default function CompanyTransactionsPage() {
  const { company } = useParams();
  const companyKey = company as string;
  const companyName = companyNames[companyKey] || companyKey.toUpperCase();

  return (
    <div className="p-6 space-y-8">
      

      <div className="">
        <Totalincome />
        <Totalborrow />
        <TransactionsTable title="MDB Recent Transactions" />
      </div>
    </div>
  );
}