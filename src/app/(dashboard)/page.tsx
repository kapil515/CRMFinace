"use client";

import { useEffect, useState, useRef } from "react";
import { isLoggedIn } from "@/lib/auth";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useRouter } from "next/navigation";

import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import MinimizeIcon from "./component/icons/Minimize";
import Bankaccount from "./component/Bankaccount";
import Donutchart from "./component/Donutchart";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (!userData) {
      router.push("/sign-in");
      return;
    }

    try {
      const parsed = JSON.parse(userData);
      if (!parsed?.email) {
        router.push("/sign-in");
      }
      // Sab theek → dashboard dikhega
    } catch (e) {
      localStorage.removeItem("user");
      router.push("/sign-in");
    }
  }, [router]); // ← yehi perfect hai

  const [date, setDate] = useState(new Date());
  const [showAll, setShowAll] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const allRef = useRef<HTMLDivElement | null>(null);
  const dateRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (allRef.current && !allRef.current.contains(target)) setShowAll(false);
      if (dateRef.current && !dateRef.current.contains(target)) setShowDate(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const incomeExpenseData = {
    labels: ["17 Sun", "18 Mon", "19 Tue", "20 Wed", "21 Thu", "22 Fri", "23 Sat"],
    datasets: [
      {
        label: "Expense",
        data: [65, 59, 30, 55, 60, 70, 58],
        backgroundColor: "#0D9488",
        barThickness: 24,
        borderRadius: 8,
      },
      {
        label: "Income",
        data: [55, 48, 45, 52, 40, 30, 45],
        backgroundColor: "#E5E7EB",
        barThickness: 24,
        borderRadius: 8,
      },
    ],
  };

  const withdrawData = {
    labels: ["17 Sun", "18 Mon", "19 Tue", "20 Wed", "21 Thu", "22 Fri", "23 Sat"],
    datasets: [
      {
        label: "Withdraw",
        data: [40, 35, 20, 45, 30, 55, 48],
        backgroundColor: "#0D9488",
        barThickness: 24,
        borderRadius: 8,
      },
      {
        label: "Other",
        data: [30, 25, 40, 20, 35, 15, 30],
        backgroundColor: "#E5E7EB",
        barThickness: 24,
        borderRadius: 8,
      },
    ],
  };

  const chartOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.8)",
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6B7280" },
      },
      y: {
        grid: { color: "#F3F4F6" },
        ticks: {
          callback: function (value) {
            return "₹" + value + "k";
          },
          stepSize: 20,
          color: "#6B7280",
        },
        beginAtZero: true,
        max: 80,
      },
    },
  };

  return (
    <div className="p-6 space-y-6 bg-[#F4F5F7]">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
     
        <h1 className="text-[22px] font-semibold font-inter text-[#808183]" >Overview</h1>

        {/* Filters */}
        <div className="flex items-center gap-4 p-4 rounded-lg">
          {/* All Filter */}
          <div className="relative" ref={allRef}>
            <button
              onClick={() => setShowAll((s) => !s)}
              className="flex items-center gap-2 px-4 py-2 bg-[#EBECEE] border rounded-lg text-sm text-gray-700 hover:bg-gray-100"
            >
              <span>All</span>
              <ChevronDown size={18} />
            </button>

            {showAll && (
              <div className="absolute left-0 mt-2 w-44 bg-white border rounded-md shadow-lg z-50">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50">All</button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50">Income</button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50">Expense</button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50">Withdraw</button>
              </div>
            )}
          </div>

          {/* Date Filter */}
          <div className="relative" ref={dateRef}>
            <button
              onClick={() => setShowDate((s) => !s)}
              className="flex items-center gap-3 px-4 py-2 bg-[#EBECEE] border rounded-lg text-sm text-gray-700 hover:bg-gray-100"
            >
              <CalendarIcon size={18} className="text-gray-600" />
              <span className="font-medium bg-white p-1 px-3 rounded-md">This month</span>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-gray-500 text-xs">{format(date, "MMM d, yyyy")}</span>
              </div>
              <ChevronDown size={18} className="ml-2" />
            </button>

            {showDate && (
              <div className="absolute right-0 mt-2 w-auto bg-white border rounded-md shadow-lg z-50 p-3">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(d: any) => {
                    setDate(d as Date);
                    setShowDate(false);
                  }}
                  initialFocus
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cards Row — Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Income" amount="₹240,399" percent="+12.5%" />
        <Card title="Total Expense" amount="₹240,399" percent="+8.3%" />
        <Card title="Total Saving" amount="₹240,399" percent="+15.2%" />
        <Card title="Total Withdraw" amount="₹240,399" percent="+5.7%" />
      </div>
      {/* Cards Row — Borrow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Total Borrow" amount="₹240,399" percent="+12.5%" />
        <Card title="Total Lend" amount="₹240,399" percent="+8.3%" />
        <Card title="Total Disburse" amount="₹240,399" percent="+15.2%" />
      </div>

      {/* Graphs Row - NOW WITH REAL CHARTS */}
      <div className="grid grid-cols-12 gap-5">
        {/* Income Vs Expense Chart */}
        <div className="col-span-7">
          <SectionHeader title="Income Vs Expense" />
          <div className="mt-6 h-80 bg-white rounded-xl p-6 shadow-sm">
            <Bar data={incomeExpenseData} options={chartOptions} />
          </div>
        </div>

        {/* Withdraw Overview Chart */}
        <div className="col-span-5">
          <SectionHeader title="Withdraw Overview" />
          <div className="mt-6 h-80 bg-white rounded-xl p-6 shadow-sm">
            <Bar data={withdrawData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* NEW: Bank Account Balances, Cash Holdings, Borrowing Overview */}
      <Bankaccount />

      {/* NEW ROW: Donut Charts Section */}
      <Donutchart />
    </div>
  );
}

/* COMPONENTS - Unchanged */
function Card({ title, amount, percent }: { title: string; amount: string; percent: string }) {
  return (
    <div className="">
      {/* Header: Title + Compare Text */}
      <div className=" pb-2">
        <div className="flex items-baseline justify-between text-[#878787] font-inter">
          <p className="font-normal text-[20px] font-inter ">{title}</p>
          <span className="font-medium text-[10px] text-[#9F9F9F]">*Compare to last month</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 flex items-center justify-between bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
        {/* Amount */}
        <div><h2 className="text-[22px] font-extrabold text-[#191919] font-inter">{amount}</h2></div>

        {/* Green Up Badge */}
        <div className=" text-green-600 text-sm font-medium bg-[#D2D2D240] p-2 rounded-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
      </div>

      {/* Bottom subtle line (optional but matches design) */}
      <div className="h-px bg-gray-100 mx-6" />
    </div>
  );
}


function SectionHeader({ title }: any) {
  return (
    <div className="flex justify-between items-center">
      <h3 className="font-normal text-[22px] text-[#878787]">{title}</h3>
      <button className="text-sm text-gray-500">View All</button>
    </div>
  );
}

