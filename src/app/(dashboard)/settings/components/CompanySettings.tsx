"use client";

import { useState } from "react";
import { Plus, MoreVertical, Eye, X } from "lucide-react";

export default function CompanySettings() {
  const [companies, setCompanies] = useState([
    { name: "Mad Brains", type: "Service Company", short: "MDB", showInMenu: true, status: "Active" },
    { name: "Mad Brains", type: "Service Company", short: "MDB", showInMenu: true, status: "Active" },
    { name: "Mad Brains", type: "Service Company", short: "MDB", showInMenu: false, status: "Active" },
    { name: "Mad Brains", type: "Service Company", short: "MDB", showInMenu: true, status: "Active" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCompany, setNewCompany] = useState({
    name: "",
    type: "",
    short: "",
    showInMenu: true,
    status: "Active"
  });

  const toggleShowInMenu = (index: number) => {
    setCompanies(prev =>
      prev.map((comp, i) => (i === index ? { ...comp, showInMenu: !comp.showInMenu } : comp))
    );
  };

  const handleSaveCompany = () => {
    if (newCompany.name && newCompany.type && newCompany.short) {
      setCompanies(prev => [...prev, { ...newCompany, status: "Active" }]);
      setIsModalOpen(false);
      setNewCompany({ name: "", type: "", short: "", showInMenu: true, status: "Active" });
    }
  };

  return (
    <div className="space-y-9.5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#878787] p-5">
        <h3 className="text-[22px] font-inter font-medium text-[#878787]">Company Settings</h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-2 py-2.5 bg-[#2A9E93] text-white text-sm font-medium rounded-[4] font-inter hover:bg-[#0A7A70] transition max-w-[71px] w-full cursor-pointer"
        >
          <Plus size={17} />
          New
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[8] p-5">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#F3F3F3]">
                <th className="px-2.5 py-2.5 text-center font-inter text-sm font-bold text-[#191919]">Company Name</th>
                <th className="px-2.5 py-2.5 text-center font-inter text-sm font-bold text-[#191919]">Type</th>
                <th className="px-2.5 py-2.5 text-center font-inter text-sm font-bold text-[#191919]">Short Name</th>
                <th className="px-2.5 py-2.5 text-center font-inter text-sm font-bold text-[#191919]">Show in Main Menu</th>
                <th className="px-2.5 py-2.5 text-center font-inter text-sm font-bold text-[#191919]">Status</th>
                <th className="px-2.5 py-2.5 text-center font-inter text-sm font-bold text-[#191919]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 gap-5">
              {companies.map((comp, index) => (
                <tr key={index} className="">
                  <td className="px-2.5 py-8">
                    <p className="text-center text-sm font-medium text-[#666666] font-inter">{comp.name}</p>
                  </td>
                  <td className="px-2.5 py-8">
                    <p className="text-center text-sm font-medium text-[#666666] font-inter">{comp.type}</p>
                  </td>
                  <td className="px-2.5 py-8">
                    <p className="text-center text-sm font-medium text-[#666666] font-inter">{comp.short}</p>
                  </td>
                  <td className="px-2.5 py-8 text-center">
                    <button
                      onClick={() => toggleShowInMenu(index)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${comp.showInMenu ? "bg-[#0D9488]" : "bg-gray-300"
                        }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${comp.showInMenu ? "translate-x-6" : "translate-x-1"
                          }`}
                      />
                    </button>
                  </td>
                  <td className="px-2.5 py-8 text-center">
                    <span className="inline-flex items-center px-2.5 py-1.5 rounded-[4] text-xs font-inter font-medium bg-[#F3F4F6] text-[#666666]">
                      {comp.status}
                    </span>
                  </td>
                  <td className="px-2.5 py-2.5">
                    <div className="flex items-center gap-4 justify-end">
                      <button className="text-center text-sm font-bold text-[#2A9E93] font-inter">
                        View Details
                      </button>
                      <button className="text-[#666666] hover:text-gray-600 transition">
                        <MoreVertical size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-end justify-end gap-5 pt-9.5">
        <button className="px-8 py-1 border border-[#EBECEE] text-[#4B5768] rounded-[4] hover:bg-[#299D91] hover:text-white transition bg-[#E4E7EB] text-base font-semibold font-inter max-w-[216px] w-full cursor-pointer h-10.5">
          Cancel
        </button>
        <button className="px-8 py-1 border border-[#EBECEE] text-white rounded-[4] hover:bg-[#E4E7EB] hover:text-[#4B5768] transition bg-[#299D91] text-base font-semibold font-inter max-w-[216px] w-full cursor-pointer h-10.5">
          Save
        </button>
      </div>

      {/* Modal / Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#00000021] bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-[8] shadow-[-2px_-2px_150px_0_rgba(0,0,0,0.25)] w-full max-w-[492px] p-5 relative" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-7.5 right-10 text-[#999DA3] hover:text-gray-600 cursor-pointer"
            >
              <X size={24} />
            </button>

            <h3 className="text-[22px] font-inter font-medium text-[#878787] pl-5 pt-2.5 pb-5">New Company</h3>

            <div className="space-y-6 border-t border-[#999DA3] pt-6">
              <div>
                <label className="block font-inter text-base font-semibold text-[#525256] mb-2">Company Name</label>
                <input
                  type="text"
                  value={newCompany.name}
                  onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                  placeholder="Enter here"
                  className="text-[#525256] w-full px-4 py-3 border border-[rgba(159, 159, 159, 0.20)] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                />
              </div>

              <div>
                <label className="block font-inter text-base font-semibold text-[#525256] mb-2">Company Type</label>
                <input
                  type="text"
                  value={newCompany.type}
                  onChange={(e) => setNewCompany({ ...newCompany, type: e.target.value })}
                  placeholder="Enter here"
                  className="w-full px-4 py-3 border border-[rgba(159, 159, 159, 0.20)] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                />
              </div>

              <div>
                <label className="block font-inter text-base font-semibold text-[#525256] mb-2">Short Name</label>
                <input
                  type="text"
                  value={newCompany.short}
                  onChange={(e) => setNewCompany({ ...newCompany, short: e.target.value })}
                  placeholder="Enter here"
                  className="w-full px-4 py-3 border border-[rgba(159, 159, 159, 0.20)] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                />
              </div>

              <div className="flex items-center justify-between py-4">
                <span className=" font-inter text-base font-semibold text-[#525256] mb-2">Show in Main Menu</span>
                <button
                  onClick={() => setNewCompany({ ...newCompany, showInMenu: !newCompany.showInMenu })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${newCompany.showInMenu ? "bg-[#0D9488]" : "bg-gray-300"
                    }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${newCompany.showInMenu ? "translate-x-6" : "translate-x-1"
                    }`} />
                </button>
              </div>

              <div>
                <label className="block font-inter text-base font-semibold text-[#525256] mb-2">Status</label>
                <select className="text-[#999DA3] w-full px-4 py-3 border border-[rgba(159, 159, 159, 0.20)] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0D9488]">
                  <option className="text-[#999DA3]">Active</option>
                  <option className="text-[#999DA3]">Inactive</option>
                </select>
              </div>
            </div>

            {/* Modal Buttons */}
            <div className="flex items-center justify-end gap-4 mt-10">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-8 py-1 border border-[#EBECEE] text-[#4B5768] rounded-[4] hover:bg-[#299D91] hover:text-white transition bg-[#E4E7EB] text-base font-semibold font-inter max-w-[216px] w-full cursor-pointer h-10.5"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveCompany}
                className="px-8 py-1 border border-[#EBECEE] text-white rounded-[4] hover:bg-[#E4E7EB] hover:text-[#4B5768] transition bg-[#299D91] text-base font-semibold font-inter max-w-[216px] w-full cursor-pointer h-10.5"
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