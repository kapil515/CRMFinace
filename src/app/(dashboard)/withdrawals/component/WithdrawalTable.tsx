"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Eye, ChevronLeft, ChevronRight, MoreVertical, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function WithdrawalTable() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date(2025, 5)); // June 2025
    const [isOpen, setIsOpen] = useState(false);

    const withdrawals = [
        { user: "John Doe", limit: "₹10,000", used: "₹10,000", balance: "₹10,000", date: "Jul 05, 2025" },
        { user: "John Doe", limit: "₹10,000", used: "₹10,000", balance: "₹10,000", date: "Jul 05, 2025", isNegative: true },
        { user: "John Doe", limit: "₹10,000", used: "₹10,000", balance: "₹10,000", date: "Jul 05, 2025", isNegative: true },
        { user: "John Doe", limit: "₹10,000", used: "₹10,000", balance: "₹10,000", date: "Jul 05, 2025" },
    ];

    return (
        <>
            <div className="flex items-center justify-end gap-2.5 py-5 ">
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className="text-[#4B5768] font-medium cursor-pointer bg-transparent border-none shadow-none hover:bg-transparent focus:ring-0">
                            <Calendar size={18} />
                            <span>{format(selectedDate, "MMM yyyy")}</span>
                            <ChevronRight size={16} className="ml-1 rotate-90" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-3 mr-2.5" align="start">
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => {
                                setSelectedDate(date || new Date());
                                setIsOpen(false);
                            }}
                            captionLayout="dropdown"
                            fromYear={2020}
                            toYear={2030}
                            className="rounded-lg"
                        />
                    </PopoverContent>
                </Popover>

                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                    <MoreVertical size={20} className="text-[#4B5768]" />
                </button>
            </div>
            <div className="bg-white rounded-lg shadow-[0px_20px_25px_0px_#4C67641A] overflow-hidden px-5">
                <div className="overflow-x-auto">
                    <table className="w-full ">
                        <thead>
                            <tr className="border-b border-[#F3F3F3]">
                                <th className="text-center px-5 py-[30px] text-sm font-inter font-bold text-[#191919] tracking-wider">User</th>
                                <th className="text-center px-5 py-[30px] text-sm font-inter font-bold text-[#191919] tracking-wider">Limit</th>
                                <th className="text-center px-5 py-[30px] text-sm font-inter font-bold text-[#191919] tracking-wider">Used</th>
                                <th className="text-center px-5 py-[30px] text-sm font-inter font-bold text-[#191919] tracking-wider">Balance</th>
                                <th className="text-center px-5 py-[30px] text-sm font-inter font-bold text-[#191919] tracking-wider">Last Update</th>
                                <th className="text-center px-5 py-[30px] text-sm font-inter font-bold text-[#191919] tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {withdrawals.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-8 py-[30px]">
                                        <p className="text-sm font-inter font-medium text-[#666666] text-center">{item.user}</p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <p className="text-sm font-inter font-medium text-[#666666] text-center">{item.limit}</p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <p className="text-sm font-inter font-medium text-[#666666] text-center">{item.used}</p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <p className={`text-sm font-inter font-medium text-center ${item.isNegative ? "text-red-600" : "text-green-600"}`}>
                                            {item.balance}
                                        </p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <p className="text-sm font-inter font-medium text-[#666666] text-center">{item.date}</p>
                                    </td>
                                    <td className="px-8 py-6 ">
                                        <button className="flex items-center gap-2 text-sm font-inter font-medium text-[#666666] hover:text-gray-900 transition justify-center w-full">
                                            <Eye size={16} />
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
}