"use client";

import { ChevronLeft, ChevronRight, Filter, ArrowUpDown, Plus, MoreVertical } from "lucide-react";
import { COMPANY_DATA } from "@/app/(dashboard)/component/TransactionsData";
import { useParams } from "next/navigation";

export default function TransactionsTable({ title }: { title: string }) {
  const { company } = useParams();
  const companyKey = company as string;
  const transactions = COMPANY_DATA[companyKey]?.transactions || COMPANY_DATA["mdb"].transactions;
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center gap-4">
          <h2 className="text-[22px] font-semibold text-[#808183] font-inter">{title}</h2>

        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-[#4B5768] font-medium font-inter px-2 py-2 border border-[#8081831f] rounded-sm">
            <ChevronLeft size={18} className="text-[##4B5768]" />
            <span>Jun 2025</span>
            <ChevronRight size={18} className="text-[##4B5768]" />
          </div>
          <button className="flex items-center gap-2 text-sm text-[#4B5768] font-medium font-inter px-2 py-2 border border-[#8081831f] rounded-sm">
            <Filter size={16} />
            Filter
          </button>
          <button className="flex items-center gap-2 text-sm text-[#4B5768] font-medium font-inter px-2 py-2 border border-[#8081831f] rounded-sm">
            <ArrowUpDown size={16} />
            Sort By
          </button>

          <button className="text-sm font-medium text-[#4B5768] px-2 py-2 border border-[#8081831f] rounded-sm" >
            <MoreVertical size={16} />
          </button>
          <button className="font-inter flex items-center gap-[5px] px-[9px] py-[9px] text-sm font-medium text-white bg-[#2A9E93] rounded-lg hover:bg-[#0A7A70] transition">
            <Plus size={17} />
            New
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="px-5 bg-white rounded-xl ">
        <table className="w-full overflow-x-auto">
          <thead>
            <tr className=" divide-y divide-gray-100">
              <th className="px-2.5 py-4 text-left">
                <input type="checkbox" className="w-4 h-4 text-[#0D9488] rounded bg-[#666666]" />
              </th>
              <th className="px-5 py-2.5 text-center text-sm font-bold font-inter text-[#191919]">Date</th>
              <th className="px-5 py-2.5 text-center text-sm font-bold font-inter text-[#191919]">Branch</th>
              <th className="px-5 py-2.5 text-center text-sm font-bold font-inter text-[#191919]">Type</th>
              <th className="px-5 py-2.5 text-center text-sm font-bold font-inter text-[#191919]">Category</th>
              <th className="px-5 py-2.5 text-center text-sm font-bold font-inter text-[#191919]">Subcategory</th>
              <th className="px-5 py-2.5 text-center text-sm font-bold font-inter text-[#191919]">Source/Vendor</th>
              <th className="px-5 py-2.5 text-center text-sm font-bold font-inter text-[#191919]">Remarks</th>
              <th className="px-5 py-2.5 text-center text-sm font-bold font-inter text-[#191919]">Amount</th>
              <th className="px-5 py-2.5 text-center text-sm font-bold font-inter text-[#191919]">Split Info</th>
              <th className="px-5 py-2.5 text-center text-sm font-bold font-inter text-[#191919]">Origin/Received in</th>
              <th className="px-5 py-2.5 text-center text-sm font-bold font-inter text-[#191919]">Update by</th>
              <th className="px-5 py-2.5 text-center"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {transactions.map((tx, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                   <td className="px-2.5 py-4">
                  <input type="checkbox" className="w-4 h-4 text-[#0D9488] rounded border-gray-300" />
                </td>
                <td className="px-2 py-4 text-sm text-[#666666] font-medium font-inter text-center">{tx.date}</td>
                <td className="px-2 py-4 text-sm text-[#666666] font-medium font-inter text-center">{tx.branch}</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-4 text-sm text-[#666666] font-medium font-inter text-center">Expense</span>
                </td>
                <td className="px-2 py-4 text-sm text-[#666666] font-medium font-inter text-center">{tx.category}</td>
                <td className="px-2 py-4 text-sm text-[#666666] font-medium font-inter text-center">—</td>
                <td className="px-2 py-4 text-sm text-[#666666] font-medium font-inter text-center">{tx.vendor}</td>
                <td className="px-2 py-4 text-sm text-[#666666] font-medium font-inter text-center">{tx.remarks}</td>
                <td className="px-2 py-4 text-sm text-[#666666] font-medium font-inter text-center">{tx.amount}</td>
                <td className="px-2 py-4 text-sm text-[#666666] font-medium font-inter text-center">—</td>
                <td className="px-2 py-4 text-sm text-[#666666] font-medium font-inter text-center">{tx.receivedIn}</td>
                <td className="px-2 py-4 text-sm text-[#666666] font-medium font-inter text-center">{tx.updatedBy}</td>
                <td className="px-2 py-4 text-right">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



