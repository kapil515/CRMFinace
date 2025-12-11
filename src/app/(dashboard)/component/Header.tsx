// components/Header.tsx

"use client";

import { Search, Bell } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // Sirf main menu ka naam nikalne ka logic
  const getMainTitle = () => {
    if (pathname === "/" || pathname === "/dashboard") {
      return "Dashboard";
    }
    if (pathname.startsWith("/transactions")) {
      return "Transactions";
    }
    if (pathname.startsWith("/borrow&lend")) {
      return "Borrow & Lend";
    }
    if (pathname.startsWith("/employees")) {
      return "Employee Loans";
    }
    if (pathname.startsWith("/accounts")) {
      return "Accounts";
    }
    if (pathname.startsWith("/withdrawals")) {
      return "Withdrawals";
    }
    if (pathname.startsWith("/categories")) {
      return "Categories";
    }
    if (pathname.startsWith("/settings")) {
      return "Settings";
    }

    return "Dashboard"; // fallback
  };

  return (
    <div className="w-full h-[88px] shadow-sm pl-6 pr-8 flex items-center justify-between border border-[#E8E8E8] bg-white">
      <h2 className="text-2xl font-bold font-inter text-gray-800">
        {getMainTitle()}
      </h2>

      <div className="flex items-center gap-10">
        {/* Notification Bell */}
        <Bell size={24} className="cursor-pointer text-[#666666] hover:text-gray-800 transition" />

        {/* Search Box */}
        <div className="flex items-center bg-white px-6 py-3 rounded-[12px] w-[352px] border border-gray-200 shadow-sm">
          <input
            type="text"
            placeholder="Search here"
            className="bg-transparent outline-none placeholder-[#9F9F9F] font-inter text-[16px] flex-1"
          />
          <Search size={18} className="text-gray-500 ml-3" />
        </div>
      </div>
    </div>
  );
}