import React from "react";
import MinimizeIcon from "./icons/Minimize";

export default function Bankaccount() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
      
              {/* 1. Bank Account Balances */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[22px] font-normal text-[#878787] font-inter">Bank Account Balances</h3>
                  <MinimizeIcon width={20} height={20} stroke="#878787" />
                </div>
                <div className="bg-white rounded-[8px] shadow-[0_20px_25px_0px_rgba(76,103,100,0.1)] p-6">
                  <div className="space-y-8">
                    {["MDB", "Virtual", "BAV", "Horizon"].map((name, i) => (
                      <div key={name} className="flex items-center gap-4">
                        <span className="text-sm text[#191919] w-16 font-semibold font-inter">{name}</span>
                        <div className="w-full">
                          <div className="flex-1 bg-white h-4 relative overflow-hidden">
                            <div
                              className="absolute inset-y-0 left-0 bg-[#0D9488] rounded-br-lg rounded-e-lg transition-all duration-700"
                              style={{ width: i === 0 ? "90%" : i === 1 ? "70%" : i === 2 ? "50%" : "80%" }}
                            />
                          </div>
                          <span className="text-[12px] font-semibold text[#525256] text-right font-inter">₹10,000</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* 2. Cash Holdings */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[22px] font-normal text-[#878787] font-inter">Cash Holdings</h3>
                  <MinimizeIcon width={20} height={20} stroke="#878787" />
                </div>
                <div className="bg-white rounded-[8px] shadow-[0_20px_25px_0px_rgba(76,103,100,0.1)] p-6">
                  <div className="space-y-8">
                    {["MDB", "Virtual", "BAV", "Horizon"].map((name, i) => (
                      <div key={name} className="flex items-center gap-4">
                        <span className="text-sm text[#191919] w-16 font-semibold font-inter">{name}</span>
                        <div className="w-full">
                          <div className="flex-1 bg-white h-4 relative overflow-hidden">
                            <div
                              className="absolute inset-y-0 left-0 bg-[#0D9488] rounded-br-lg rounded-e-lg transition-all duration-700"
                              style={{ width: i === 0 ? "90%" : i === 1 ? "70%" : i === 2 ? "50%" : "80%" }}
                            />
                          </div>
                          <span className="text-[12px] font-semibold text[#525256] text-right font-inter">₹10,000</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* 3. Company Borrowing Overview */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[22px] font-normal text-[#878787] font-inter">Company Borrowing Overview</h3>
                  <MinimizeIcon width={20} height={20} stroke="#878787" />
                </div>
                <div className="bg-white rounded-[8px] shadow-[0_20px_25px_0px_rgba(76,103,100,0.1)] p-6">
                  <div className="space-y-8">
                    {["MDB", "Virtual", "BAV", "Horizon"].map((name, i) => (
                      <div key={name} className="flex items-center gap-4">
                        <span className="text-sm text[#191919] w-16 font-semibold font-inter">{name}</span>
                        <div className="w-full">
                          <div className="flex-1 bg-white h-4 relative overflow-hidden">
                            <div
                              className="absolute inset-y-0 left-0 bg-[#0D9488] rounded-br-lg rounded-e-lg transition-all duration-700"
                              style={{ width: i === 0 ? "90%" : i === 1 ? "70%" : i === 2 ? "50%" : "80%" }}
                            />
                          </div>
                          <span className="text-[12px] font-semibold text[#525256] text-right font-inter">₹10,000</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
  );
}