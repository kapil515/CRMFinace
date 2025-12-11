import React from "react";
import MinimizeIcon from "./icons/Minimize";

export default function Donutchart() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        {/* 1. Loan Disbursement by Companies */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[22px] font-normal text-[#878787] font-inter">Loan Disbursement by Companies</h3>
            <MinimizeIcon width={20} height={20} stroke="#878787" />
          </div>
          <div className="bg-white rounded-xl shadow-[0_20px_25px_0px_rgba(76,103,100,0.1)] p-6">


            <div className="flex justify-center">
              <div className="relative w-[170px] h-[170px]">
                <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                  {/* Background Circle */}
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#E5E7EB" strokeWidth="36" />

                  {/* Segments */}
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#0D9488" strokeWidth="36"
                    strokeDasharray="251.2" strokeDashoffset="0" />       {/* 50% */}
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#6EE7E7" strokeWidth="36"
                    strokeDasharray="100.48" strokeDashoffset="251.2" />  {/* 20% */}
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#D1D5DB" strokeWidth="36"
                    strokeDasharray="100.48" strokeDashoffset="351.68" /> {/* 20% */}
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#A3A3A3" strokeWidth="36"
                    strokeDasharray="50.24" strokeDashoffset="452.16" />  {/* 10% */}
                </svg>

                

                {/* Floating Labels */}
                <div className="absolute top-10 left-8 text-[11px] font-medium text-white bg-[#0D9488] px-2 py-1 rounded">50%</div>
                <div className="absolute top-16 right-6 text-[11px] font-medium text-gray-700 bg-[#6EE7E7] px-2 py-1 rounded">20%</div>
                <div className="absolute bottom-16 right-10 text-[11px] font-medium text-gray-700 bg-[#D1D5DB] px-2 py-1 rounded">20%</div>
                <div className="absolute bottom-10 left-12 text-[11px] font-medium text-white bg-[#A3A3A3] px-2 py-1 rounded">10%</div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 space-y-2">
              {[
                { name: "MDB", color: "bg-[#0D9488]", amount: "₹20,000" },
                { name: "Virtual", color: "bg-[#6EE7E7]", amount: "₹8,000" },
                { name: "BAV", color: "bg-[#D1D5DB]", amount: "₹8,000" },
                { name: "Horizon", color: "bg-[#A3A3A3]", amount: "₹4,000" },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-[#525256] text-xs font-inter font-medium">{item.name}</span>
                  </div>
                  <span className="text-[#525256] text-xs font-inter font-semibold">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 2. Income Comparison (Across Companies) */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[22px] font-normal text-[#878787] font-inter">Income Comparison <span className="text-[16px]"> (Across Companies)</span></h3>
            <MinimizeIcon width={20} height={20} stroke="#878787" />
          </div>
          <div className="bg-white rounded-xl shadow-[0_20px_25px_0px_rgba(76,103,100,0.1)] p-6">

            <div className="flex justify-center">
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#0D9488" strokeWidth="36" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#0D9488" strokeWidth="36" strokeDasharray="251.2" strokeDashoffset="0" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#0D9488" strokeWidth="36" strokeDasharray="100.48" strokeDashoffset="251.2" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#3EE8D6" strokeWidth="36" strokeDasharray="100.48" strokeDashoffset="351.68" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#3EE8D6" strokeWidth="36" strokeDasharray="50.24" strokeDashoffset="452.16" />
                </svg>
                
                <div className="absolute top-10 left-8 text-[10px] font-bold font-inter text-[#000000] bg-[#ECEAF8] px-2 py-1 rounded-[20%] w-8 h-8">50%</div>
                <div className="absolute top-16 right-6 text-[11px] font-medium text-gray-700 bg-[#ECEAF8] px-2 py-1 rounded">20%</div>
                <div className="absolute bottom-16 right-10 text-[11px] font-medium text-gray-700 bg-[#ECEAF8] px-2 py-1 rounded">20%</div>
                <div className="absolute bottom-10 left-12 text-[11px] font-medium text-white bg-[#ECEAF8] px-2 py-1 rounded">10%</div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {[
                { name: "MDB", color: "bg-[#0D9488]", amount: "₹20,000" },
                { name: "Virtual", color: "bg-[#6EE7E7]", amount: "₹8,000" },
                { name: "BAV", color: "bg-[#D1D5DB]", amount: "₹8,000" },
                { name: "Horizon", color: "bg-[#A3A3A3]", amount: "₹4,000" },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-[#525256] text-xs font-inter font-medium">{item.name}</span>
                  </div>
                  <span className="text-[#525256] text-xs font-inter font-semibold">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 3. Courses Comparison */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[22px] font-normal text-[#878787] font-inter">Courses Comparison</h3>
            <MinimizeIcon width={20} height={20} stroke="#878787" />
          </div>
          <div className="bg-white rounded-xl shadow-[0_20px_25px_0px_rgba(76,103,100,0.1)] p-6">

            <div className="flex justify-center">
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#299D91" strokeWidth="36" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#299D91" strokeWidth="36" strokeDasharray="175.84" strokeDashoffset="0" />     {/* 35% */}
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#299D91" strokeWidth="36" strokeDasharray="125.6" strokeDashoffset="175.84" />  {/* 25% */}
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#299D91" strokeWidth="36" strokeDasharray="100.48" strokeDashoffset="301.44" />{/* 20% */}
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#3EE8D6" strokeWidth="36" strokeDasharray="100.48" strokeDashoffset="401.92" />{/* 20% */}
                </svg>
                
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {[
                { name: "UI/UX Design", color: "bg-[#0D9488]", amount: "₹17,500" },
                { name: "Web Designing", color: "bg-[#6EE7E7]", amount: "₹12,500" },
                { name: "Web Development", color: "bg-[#1F2937]", amount: "₹10,000" },
                { name: "Graphic Design", color: "bg-[#9CA3AF]", amount: "₹10,000" },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-[#525256] text-xs font-inter font-medium">{item.name}</span>
                  </div>
                  <span className="text-[#525256] text-xs font-inter font-semibold">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );

}