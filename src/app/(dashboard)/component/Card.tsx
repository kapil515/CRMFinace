
// Ye Card component bilkul tumhare main page wala same design ka hai
 export function Card({ title, amount, percent }: { title: string; amount: string; percent: string }) {
  return (
    <div className="">
      {/* Header: Title + Compare Text */}
      <div className="pb-2">
        <div className="flex items-baseline justify-between text-[#878787] font-inter">
          <p className="font-normal text-[20px] font-inter">{title}</p>
          <span className="font-medium text-[10px] text-[#9F9F9F]">*Compare to last month</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-5  bg-white rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)]  overflow-hidden ">
        {/* Amount */}
        <div className="border-b border-[#F3F3F3] flex items-center justify-between pb-2.5">
          <div>
            <h2 className="text-[22px] font-extrabold text-[#191919] font-inter">{amount}</h2>
          </div>

          {/* Green Up Badge */}
          <div className="text-green-600 text-sm font-medium bg-[#D2D2D240] p-2 rounded-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="h-px bg-gray-100 mx-6" />
    </div>
  );
}