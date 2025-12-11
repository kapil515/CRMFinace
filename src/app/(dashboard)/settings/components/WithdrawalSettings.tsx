import { useState } from "react";

export default function WithdrawalSettings() {
    const [isRemarksMandatory, setIsRemarksMandatory] = useState(true);

    // Har user ka alag state — ab sab independent chalenge
    const [userLimits, setUserLimits] = useState([
        { name: "John Doe", limit: "₹ 20,000", enabled: true },
        { name: "Tony Stark", limit: "₹ 20,000", enabled: true },
        { name: "Harry Potter", limit: "₹ 20,000", enabled: false },
    ]);

    // Toggle function — sirf usi user ka toggle change karega
    const toggleUserLimit = (index: number) => {
        setUserLimits(prev =>
            prev.map((user, i) =>
                i === index ? { ...user, enabled: !user.enabled } : user
            )
        );
    };

    return (
        <div className="space-y-10 pb-5">
            <h3 className="text-[22px] font-inter font-medium text-[#878787] mb-9.5 p-5 border-b border-[#878787]">Withdrawal Settings</h3>
            <div className="px-5">
                {/* Remarks Mandatory */}
                <div className="flex items-center justify-between w-full py-2.5">
                    <div className="">
                        <p className="text-base font-semibold font-inter text-[#525256]">Remarks Mandatory on Withdraw</p>
                    </div>
                    <button
                        onClick={() => setIsRemarksMandatory(!isRemarksMandatory)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isRemarksMandatory ? "bg-[#0D9488]" : "bg-gray-300"
                            }`}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isRemarksMandatory ? "translate-x-6" : "translate-x-1"
                                }`}
                        />
                    </button>
                </div>

                {/* Monthly Withdrawal Limit */}
                <div className="space-y-[19px] w-full">
                    <h4 className="text-base font-inter py-2.5 font-semibold text-[#525256] mb-[19px] mt-6.5 border-b border-b-[#C1C7CD]">Monthly Withdrawal Limit (₹)</h4>

                    {userLimits.map((user, index) => (
                        <div key={index} className=" py-2.5 px-5  w-full border-[#c1c7cd47] border-b-[0.2px]">
                            <div className="flex items-center justify-between pb-2.5">
                                <p className="text-base font-medium text-[#525256] font-inter">{user.name}</p>
                                {/* Har user ka alag toggle */}
                                <button
                                    onClick={() => toggleUserLimit(index)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${user.enabled ? "bg-[#0D9488]" : "bg-gray-300"
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${user.enabled ? "translate-x-6" : "translate-x-1"
                                            }`}
                                    />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm text-[#525256] font-inter font-medium">Monthly Withdrawal Limit (₹)</p>
                                <input
                                    type="text"
                                    value={user.limit}
                                    readOnly
                                    className="w-[210px] text-left px-4 py-3 border-[0.8px] border-[rgba(159, 159, 159] rounded-[8] text-[#999DA3] text-base font-normal font-inter"
                                />

                                
                            </div>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex items-end justify-end gap-5 pt-9.5">
                    <button className="px-8 py-1 border border-[#EBECEE] text-[#4B5768] rounded-[4] hover:bg-[#299D91] hover:text-white transition bg-[#E4E7EB] text-base font-semibold font-inter max-w-[216px] w-full cursor-pointer h-10.5">
                        Cancel
                    </button>
                    <button className="px-8 py-1 border border-[#EBECEE] text-white rounded-[4] hover:bg-[#E4E7EB] hover:text-[#4B5768] transition bg-[#299D91] text-base font-semibold font-inter max-w-[216px] w-full cursor-pointer h-10.5">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}