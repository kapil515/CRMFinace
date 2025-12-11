"use client";

import { useState } from "react";
import { Bell, Lock, Users, Shield, FileText, UserCheck, Home, Settings as SettingsIcon } from "lucide-react";
import WithdrawalSettings from "./components/WithdrawalSettings";
import CompanySettings from "./components/CompanySettings";
import Notifications from "./components/Notifications";
import RolesAndPermissions from "./components/Roles&Permissions";
import UsersandAccess from "./components/Users";
import AccountManagement from "./components/AccountManagement";
import PartnerManagement from "./components/PartnerManagement";

type TabType = "general" | "withdrawal" | "company" | "notifications" | "roles" | "users" | "account" | "partner";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("general");

  const tabs = [
    { id: "general", label: "General", icon: Home },
    { id: "withdrawal", label: "Withdrawal Settings", icon: Lock },
    { id: "company", label: "Company Settings", icon: FileText },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "roles", label: "Roles & Permissions", icon: Shield },
    { id: "users", label: "Users & Access", icon: UserCheck },
    { id: "account", label: "Account Management", icon: SettingsIcon },
    { id: "partner", label: "Partner Management", icon: Users },
  ];

  return (
    <div className="flex h-screen pt-5">
      {/* Left Sidebar Tabs */}
      <div className="w-65 bg-white rounded-xl border border-[#EBECEE] p-5 h-fit">
        <div className="space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`cursor-pointer w-full flex items-center gap-2 px-5 py-3 rounded-sm text-left transition-all ${
                  activeTab === tab.id
                    ? "bg-[#2A9E93] text-white"
                    : "text-[#525256] hover:bg-gray-100"
                }`}
              >
                <Icon size={20} />
                <span className="font-semibold text-sm font-inter">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 pl-14">
        <div className="">
          {/* General Tab */}
          {activeTab === "general" && (
            <div>
              <h3 className="text-[22px] font-inter font-medium text-[#878787] mb-9.5 p-5 border-b border-[#878787]">General Information</h3>
              <div className="space-y-6.5 max-w-[500px] px-5">
                <div>
                  <label className="block font-inter text-base font-semibold text-[#525256] mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="placeholder:text-[#999DA3] text-base placeholder:font-normal font-medium text-[#525256] w-full px-4 py-2.5 border border-[#9F9F9F33] rounded-[8] focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block font-inter text-base font-semibold text-[#525256] mb-2">Email</label>
                  <input
                    type="Email"
                    placeholder="Email"
                    className="placeholder:text-[#999DA3] text-base placeholder:font-normal font-medium text-[#525256] w-full px-4 py-2.5 border border-[#9F9F9F33] rounded-[8] focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block font-inter text-base font-semibold text-[#525256] mb-2">Contact Info</label>
                  <input
                    type="text"
                    placeholder="Contact Info"
                    className="placeholder:text-[#999DA3] text-base placeholder:font-normal font-medium text-[#525256] w-full px-4 py-2.5 border border-[#9F9F9F33] rounded-[8] focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent"
                  />
                </div>
                <div className="text-end">
                  <button className="max-w-[216px] w-full px-8 py-2.5 bg-[#299D91] text-white font-semibold rounded-[4] hover:bg-[#0A7A70] transition font-inter text-base">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Withdrawal Settings Tab */}
          {activeTab === "withdrawal" && <WithdrawalSettings />}

          {/* Company Settings Tab */}
          {activeTab === "company" && <CompanySettings />}

          {/* Placeholder for other tabs */}
          {activeTab === "notifications" && <Notifications />}
          {/* {["notifications","users", "account", "partner"].includes(activeTab) && <Notifications />} */}
          
          {/* Roles & Permissions Tab */}
          {activeTab === "roles" && <RolesAndPermissions />}
          
           {/* Roles & Permissions Tab */}
          {activeTab === "users" && <UsersandAccess/> }
          
           {/* Roles & Permissions Tab */}
          {activeTab === "account" && <AccountManagement/>}
          
          {/* Roles & Permissions Tab */}
          {activeTab === "partner" && <PartnerManagement />}
        </div>
      </div>
    </div>
  );
}