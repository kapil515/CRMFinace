"use client";

import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  ChartColumnStacked,
  BanknoteArrowDown,
  CircleUser,
  ArrowLeftRight,
  ChevronDown,
  ChevronUp,
  MoreVertical,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { logout } from "@/lib/auth";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  // Correct active detection
  const isTransactionsActive = pathname.startsWith("/transactions");
  const isBorrowActive = pathname.startsWith("/borrow-lend"); // <-- Ye badla hai!

  const [openTransactions, setOpenTransactions] = useState(isTransactionsActive);
  const [openBorrow, setOpenBorrow] = useState(isBorrowActive);

  // Auto open dropdown jab page load ho
  // useEffect(() => {
  //   setOpenTransactions(isTransactionsActive);
  //   setOpenBorrow(isBorrowActive);
  // }, [pathname]);

  const handleLogout = () => {
    logout();
    router.push("/sign-in");
  };

  // Reusable menu item style
  const menuItemClass = (path: string) =>
    `flex items-center gap-3 px-3.5 py-3 rounded-[4px] transition 
  ${pathname === path ? "bg-[#299D91] text-white" : "text-[#BABABA] hover:text-white"}`;

  const submenuItemClass = (segment: string) =>
    `block px-3 py-2 rounded transition text-sm
     ${pathname.includes(segment) ? "bg-[#299D91] text-white" : "text-[#BABABA] hover:text-white"}`;

  return (
    <div className="bg-[#111827] text-white h-screen w-64 pl-4 pt-10 pr-4 pb-10 relative flex flex-col">
      {/* Logo */}
      <Image src="/images/LogoLight.png" alt="Logo" width={158} height={40} className="mb-10" />

      {/* Menu */}
      <ul className="space-y-3 flex-1">
        {/* Dashboard */}
        <li>
          <Link href="/" className={menuItemClass("/")}>
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
        </li>

        {/* Transactions Dropdown */}
        <li>
          <button
            onClick={() => setOpenTransactions(!openTransactions)}
            className={`flex items-center justify-between w-full px-3.5 py-3 rounded-lg transition
              ${isTransactionsActive ? "text-[#299D91] bg-[#1a3a3a]" : "text-[#BABABA] hover:text-white"}`}
          >
            <span className="flex items-center gap-3">
              <ArrowLeftRight size={20} />
              Transactions
            </span>
            {openTransactions ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </button>

          {openTransactions && (
            <ul className="ml-10 mt-2 space-y-2 text-sm">
              {[
                { key: "mdb", label: "MDB" },
                { key: "virtual", label: "Virtual" },
                { key: "bav", label: "BAV" },
                { key: "horizonacademy", label: "Horizon Academy" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/transactions/${item.key}`}
                    className={submenuItemClass(item.key)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Employee Loans */}
        <li>
          <Link href="/employees" className={menuItemClass("/employees")}>
            <Users size={20} /> Employee Loans
          </Link>
        </li>

        {/* Borrow & Lend Dropdown - FIXED! */}
        <li>
          <button
            onClick={() => setOpenBorrow(!openBorrow)}
            className={`flex items-center justify-between w-full px-3.5 py-3 rounded-lg transition
              ${isBorrowActive ? "text-[#299D91] bg-[#1a3a3a]" : "text-[#BABABA] hover:text-white"}`}
          >
            <span className="flex items-center gap-3">
              <Users size={20} /> Borrow & Lend
            </span>
            {openBorrow ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </button>

          {openBorrow && (
            <ul className="ml-10 mt-2 space-y-2 text-sm">
              {[
                { path: "/borrow-lend/mdb", label: "MDB" },
                { path: "/borrow-lend/academy", label: "Academy" },
                { path: "/borrow-lend/bav", label: "BAV" },
                { path: "/borrow-lend/virtual", label: "Virtual" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={submenuItemClass(item.path.split("/").pop()!)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Remaining Menu Items */}
        <li><Link href="/accounts" className={menuItemClass("/accounts")}><CircleUser size={20} /> Accounts</Link></li>
        <li><Link href="/withdrawals" className={menuItemClass("/withdrawals")}><BanknoteArrowDown size={20} /> Withdrawals</Link></li>
        <li><Link href="/categories" className={menuItemClass("/categories")}><ChartColumnStacked size={20} /> Categories</Link></li>
        <li><Link href="/settings" className={menuItemClass("/settings")}><Settings size={20} /> Settings</Link></li>
      </ul>

      {/* Logout */}
      <div
        onClick={handleLogout}
        className="absolute bottom-24 left-4 right-4 flex items-center gap-3 cursor-pointer bg-[#262626] px-3.5 py-3 rounded-lg text-[#BABABA] hover:text-white transition"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-600 my-4"></div>

      {/* User Profile */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <Image
            src="/images/sidebar.svg"
            alt="User"
            width={40}
            height={40}
            className="rounded-full border border-gray-500"
          />
          <div>
            <p className="font-medium">Tony Stark</p>
            <p className="text-sm text-gray-400">Admin</p>
          </div>
        </div>
        <MoreVertical size={20} className="cursor-pointer text-gray-400 hover:text-white" />
      </div>
    </div>
  );
}