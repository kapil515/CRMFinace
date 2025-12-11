"use client";

import { useState } from "react";

export default function NotificationSettings() {
    const [notifications, setNotifications] = useState({
        general: true,
        transaction: true,
        withdrawal: true,
    });

    const toggleNotification = (key: keyof typeof notifications) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="space-y-10 pb-5">
            <h3 className="text-[22px] font-inter font-medium text-[#878787] mb-9.5 p-5 border-b border-[#878787]">Notifications</h3>

            <div className="px-5">
                {/* General Notifications */}
                <div className="flex items-center justify-between py-5 border-b border-[#C1C7CD] mb-5">
                    <div>
                        <p className="text-base font-medium text-[#525256] font-inter">General Notifications</p>
                    </div>
                    <button
                        onClick={() => toggleNotification("general")}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${notifications.general ? "bg-[#0D9488]" : "bg-gray-300"
                            }`}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.general ? "translate-x-6" : "translate-x-1"
                                }`}
                        />
                    </button>
                </div>

                {/* Transaction Notifications */}
                <div className="flex items-center justify-between py-5 border-b border-[#C1C7CD] mb-5">
                    <div>
                        <p className="text-base font-medium text-[#525256] font-inter">Transaction notifications</p>
                    </div>
                    <button
                        onClick={() => toggleNotification("transaction")}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${notifications.transaction ? "bg-[#0D9488]" : "bg-gray-300"
                            }`}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.transaction ? "translate-x-6" : "translate-x-1"
                                }`}
                        />
                    </button>
                </div>

                {/* Withdrawal Notifications */}
                <div className="flex items-center justify-between py-5 border-b border-[#C1C7CD]">
                    <div>
                        <p className="text-base font-medium text-[#525256] font-inter">Withdrawal notifications</p>
                    </div>
                    <button
                        onClick={() => toggleNotification("withdrawal")}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${notifications.withdrawal ? "bg-[#0D9488]" : "bg-gray-300"
                            }`}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.withdrawal ? "translate-x-6" : "translate-x-1"
                                }`}
                        />
                    </button>
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
            </div>
        </div>
    );
}