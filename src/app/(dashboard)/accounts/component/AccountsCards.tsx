"use client";

import { ArrowRight, Plus, X } from "lucide-react";
import { useState } from "react";

export default function AccountsCards({ 
  showDetails = true,
  showNewButton = false 
}: { 
  showDetails?: boolean;
  showNewButton?: boolean;
}) {
  const [mainAccounts] = useState([
    { name: "MDB", cash: "₹20,000,00.00", account: "₹20,000,00.00" },
    { name: "VIRTUAL", cash: "₹20,000,00.00", account: "₹20,000,00.00" },
    { name: "BAV", cash: "₹20,000,00.00", account: "₹20,000,00.00" },
    { name: "HORIZON", cash: "₹20,000,00.00", account: "₹20,000,00.00" },
  ]);

  const [otherAccounts, setOtherAccounts] = useState([
    { name: "X Account", amount: "₹20,000,00.00" },
    { name: "Y Account", amount: "₹20,000,00.00" },
    { name: "Z Account", amount: "₹20,000,00.00" },
  ]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAccountName, setNewAccountName] = useState("");
  const [newAccountAmount, setNewAccountAmount] = useState("");

  // Save New Account
  const handleSaveAccount = () => {
    if (newAccountName.trim() && newAccountAmount.trim()) {
      setOtherAccounts(prev => [
        ...prev,
        { name: newAccountName.trim(), amount: `₹${newAccountAmount.trim()}` }
      ]);
      setNewAccountName("");
      setNewAccountAmount("");
      setIsModalOpen(false);
    }
  };

  return (
    <div className="space-y-8 pt-5">
      {/* Main 4 Cards - Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {mainAccounts.map((acc) => (
          <div
            key={acc.name}
            className="bg-white rounded-lg shadow-[0px_20px_25px_0px_#4C67641A] p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-base font-bold font-inter text-[#878787] uppercase tracking-wider pb-4 border-b border-gray-200 mb-4">
              {acc.name}
            </h3>

            <div className="mb-4">
              <p className="text-xl font-semibold text-[#191919] font-inter">{acc.cash}</p>
              <p className="text-sm font-normal font-inter text-[#9F9F9F] mt-1">Cash</p>
            </div>

            <div className="mb-6">
              <p className="text-xl font-semibold text-[#191919] font-inter">{acc.account}</p>
              <p className="text-sm font-normal font-inter text-[#9F9F9F] mt-1">Account</p>
            </div>

            {showDetails && (
              <div className="flex justify-end mt-2">
                <button className="ml-auto flex items-center gap-1.5 text-sm font-medium font-inter text-white bg-[#0A7A70] hover:text-[#0A7A70] hover:bg-white transition border border-[#0A7A70] px-5 py-2 rounded cursor-pointer">
                  Details
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Other Accounts Section */}
      <div className="bg-white rounded-2xl shadow-[0px_20px_25px_0px_#4C67641A] border border-gray-100 p-6">
        <h3 className="flex justify-between text-base font-bold font-inter text-[#878787] uppercase tracking-wider pb-4 border-b border-gray-200 mb-4">
          Other Accounts
          {/* + New Button */}
        {showNewButton && (
          <div className="flex justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1 text-[#299D91] text-sm font-bold font-inter cursor-pointer hover:text-[#299d91b3]"
            >
              <Plus size={18} />
              New
            </button>
          </div>
        )}
        </h3>

        <div className="space-y-7">
          {otherAccounts.map((acc, index) => (
            <div key={index} className={`pb-4 hover:bg-gray-50/30 rounded-lg transition-colors m-0`}>
              <p className="text-xl font-semibold text-[#191919] font-inter">
                {acc.amount}
              </p>
              <p className="text-sm font-normal font-inter text-[#9F9F9F] mt-1">
                {acc.name}
              </p>
            </div>
          ))}
        </div>

        

        {/* Details Button */}
        {showDetails && (
          <div className="flex justify-end mt-2">
            <button className="ml-auto flex items-center gap-1.5 text-sm font-medium font-inter text-white bg-[#0A7A70] hover:text-[#0A7A70] hover:bg-white transition border border-[#0A7A70] px-5 py-2 rounded cursor-pointer">
              Details
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* New Account Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#00000021] bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-[8] shadow-[-2px -2px 4px 0 rgba(0, 0, 0, 0.25), 2px 2px 4px 0 rgba(0, 0, 0, 0.25)] w-full max-w-[492px] p-5 pb-10 relative" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600" 
            >
              <X size={24} />
            </button>

            <h3 className="text-[22px] font-inter font-medium text-[#878787] mb-6 pb-5 border-b border-[#999DA3]">New</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-base font-semibold font-inter text-[#525256] mb-2">Account Name</label>
                <input
                  type="text"
                  value={newAccountName}
                  onChange={(e) => setNewAccountName(e.target.value)}
                  placeholder="Enter here"
                  className="w-full px-4 py-3 border border-[rgba(159, 159, 159, 0.20)] rounded-[8] focus:outline-none focus:ring-2 focus:ring-[#299D91] text-[#999DA3] font-inter text-base font-normal"
                />
              </div>

              <div>
                <label className="block text-base font-semibold font-inter text-[#525256] mb-2">Amount</label>
                <input
                  type="text"
                  value={newAccountAmount}
                  onChange={(e) => setNewAccountAmount(e.target.value)}
                  placeholder="Enter here"
                  className="w-full px-4 py-3 border border-[rgba(159, 159, 159, 0.20)] rounded-[8] focus:outline-none focus:ring-2 focus:ring-[#299D91] text-[#999DA3] font-inter text-base font-normal"
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-2.5 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full px-7 py-2.5 bg-[#E4E7EB] text-[#4B5768] font-semibold font-inter rounded-[4] hover:bg-gray-300 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveAccount}
                className="w-full px-7 py-2.5 bg-[#299D91] text-white font-semibold rounded-[4] hover:bg-[#0A7A70] transition cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}