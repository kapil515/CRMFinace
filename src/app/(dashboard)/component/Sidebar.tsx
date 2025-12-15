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

type MenuItem =
  | {
      type: "item";
      label: string;
      icon: React.ComponentType<{ size?: number }>;
      href: string;
      match: string;
    }
  | {
      type: "dropdown";
      label: string;
      icon: React.ComponentType<{ size?: number }>;
      match: string;
      items: { label: string; href: string; match: string }[];
    };

const MENU_CONFIG: MenuItem[] = [
  {
    type: "item",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    match: "/",
  },
  {
    type: "dropdown",
    label: "Transactions",
    icon: ArrowLeftRight,
    match: "/transactions",
    items: [
      { label: "MDB", href: "/transactions/mdb", match: "mdb" },
      { label: "Virtual", href: "/transactions/virtual", match: "virtual" },
      { label: "BAV", href: "/transactions/bav", match: "bav" },
      { label: "Horizon Academy", href: "/transactions/horizonacademy", match: "horizonacademy" },
      { label: "Delhi Branch", href: "/transactions/delhi", match: "delhi" },
      { label: "Mumbai Branch", href: "/transactions/mumbai", match: "mumbai" },
    ],
  },
  {
    type: "item",
    label: "Employee Loans",
    icon: Users,
    href: "/employees",
    match: "/employees",
  },
    {
    type: "dropdown",
    label: "Borrow & Lend",
    icon: ArrowLeftRight,
    match: "/borrow-lend",
    items: [
      { label: "MDB", href: "/borrow-lend/mdb", match: "mdb" },
      { label: "Virtual", href: "/borrow-lend/virtual", match: "virtual" },
      { label: "BAV", href: "/borrow-lend/bav", match: "bav" },
      { label: "Horizon Academy", href: "/borrow-lend/horizonacademy", match: "horizonacademy" },
      { label: "Delhi Branch", href: "/borrow-lend/delhi", match: "delhi" },
      { label: "Mumbai Branch", href: "/borrow-lend/mumbai", match: "mumbai" },
    ],
  },

  {
    type: "item",
    label: "Accounts",
    icon: CircleUser,
    href: "/accounts",
    match: "/accounts",
  },
  {
    type: "item",
    label: "Withdrawals",
    icon: BanknoteArrowDown,
    href: "/withdrawals",
    match: "/withdrawals",
  },
  {
    type: "item",
    label: "Categories",
    icon: ChartColumnStacked,
    href: "/categories",
    match: "/categories",
  },
  {
    type: "item",
    label: "Settings",
    icon: Settings,
    href: "/settings",
    match: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  // Track dropdown states dynamically
  const [openDropdown, setOpenDropdown] = useState<{ [key: string]: boolean }>(
    () =>
      MENU_CONFIG.filter((m) => m.type === "dropdown").reduce((acc: any, m: any) => {
        acc[m.match] = pathname.startsWith(m.match);
        return acc;
      }, {})
  );

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLogout = () => {
    logout();
    router.push("/sign-in");
  };

  return (
    <div className="bg-[#111827] text-white h-screen w-64 pl-4 pt-10 pr-4 pb-10 relative flex flex-col">
      
      {/* Logo */}
      <Image src="/images/LogoLight.png" width={158} height={40} alt="Logo" className="mb-10" />
      
      {/* MENU LIST */}
      <ul className="space-y-3 flex-1">
        {MENU_CONFIG.map((menu) => {
          if (menu.type === "item") {
            const active = pathname === menu.href;

            return (
              <li key={menu.label}>
                <Link
                  href={menu.href}
                  className={`flex items-center gap-3 px-3.5 py-3 rounded-lg transition 
                    ${active ? "bg-[#299D91] text-white" : "text-[#BABABA] hover:text-white"}`}
                >
                  <menu.icon size={20} />
                  {menu.label}
                </Link>
              </li>
            );
          }

          // DROPDOWN MENU ITEM
          if (menu.type === "dropdown") {
            const active = pathname.startsWith(menu.match);
            const isOpen = openDropdown[menu.match];

            return (
              <li key={menu.label}>
                <button
                  onClick={() => toggleDropdown(menu.match)}
                  className={`flex items-center justify-between w-full px-3.5 py-3 rounded-lg transition
                      ${active ? "text-[#299D91] bg-[#1a3a3a]" : "text-[#BABABA] hover:text-white"}`}
                >
                  <span className="flex items-center gap-3">
                    <menu.icon size={20} />
                    {menu.label}
                  </span>
                  {isOpen ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                </button>

                {isOpen && (
                  <ul className="ml-10 mt-2 space-y-2 text-sm">
                    {menu.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block px-3 py-2 rounded transition text-sm
                            ${
                              pathname.includes(item.match)
                                ? "bg-[#299D91] text-white"
                                : "text-[#BABABA] hover:text-white"
                            }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          }
        })}
      </ul>

      {/* LOGOUT */}
      <div
        onClick={handleLogout}
        className="absolute bottom-24 left-4 right-4 flex items-center gap-3 cursor-pointer bg-[#262626] px-3.5 py-3 rounded-lg text-[#BABABA] hover:text-white transition"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </div>
      <div className="w-full h-px bg-gray-600 my-4"></div>
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <Image src="/images/sidebar.svg" width={40} height={40} alt="User" className="rounded-full border border-gray-500" />
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