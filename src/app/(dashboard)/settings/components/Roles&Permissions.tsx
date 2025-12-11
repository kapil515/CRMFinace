"use client";
import { useState } from "react";

import { MoreVertical, Shield, Plus, Lock } from "lucide-react";

export default function RolesPermissions() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const roles = [
        { name: "Admin", description: "Unrestricted access to all modules" },
        { name: "Manager", description: "Unrestricted access to all modules" },
    ];

    return (
        <div className="space-y-9.5">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#878787] p-5">
                <h3 className="text-[22px] font-inter font-medium text-[#878787]">Roles & Permissions</h3>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-2 py-2.5 bg-[#2A9E93] text-white text-sm font-medium rounded-[4] font-inter hover:bg-[#0A7A70] transition max-w-[71px] w-full cursor-pointer"
                >
                    <Plus size={17} />
                    New
                </button>
            </div>

            {/* Roles Table */}
            <div className="bg-white rounded-[8] px-5">
                {/* Table Header */}
                <div className="flex items-center justify-around px-5 py-7.5 border-b border-[#F3F3F3]">
                    {/* <div className="flex items-center gap-32"> */}
                    <h4 className="text-sm font-bold text-[#191919] font-inter">Role Name</h4>
                    <h4 className="text-sm font-bold text-[#191919] font-inter">Description</h4>
                    {/* </div> */}
                    {/* <div className="w-10" /> */}
                </div>

                {/* Roles List */}
                <div className="divide-y divide-[#F3F3F3]">
                    {roles.map((role, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-around px-5 py-8"
                        >
                            {/* Role Name + Icon */}
                            <div className="flex items-center gap-1 w-[50%] justify-center">
                                <span className="text-sm font-medium font-inter text-[#666666]">{role.name}</span>
                                <div className=""><Lock size={14} /></div>
                            </div>
                            <div className="flex items-center w-[50%] gap-2">
                                <p className="text-center text-[12px] font-medium font-inter text-[#666666] flex-1">
                                    {role.description}
                                </p>
                                <button className="text-gray-400 hover:text-gray-700 transition">
                                    <MoreVertical size={22} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-end justify-end gap-5">
                <button className="px-8 py-1 border border-[#EBECEE] text-[#4B5768] rounded-[4] hover:bg-[#299D91] hover:text-white transition bg-[#E4E7EB] text-base font-semibold font-inter max-w-[216px] w-full cursor-pointer h-10.5">
                    Cancel
                </button>
                <button className="px-8 py-1 border border-[#EBECEE] text-white rounded-[4] hover:bg-[#E4E7EB] hover:text-[#4B5768] transition bg-[#299D91] text-base font-semibold font-inter max-w-[216px] w-full cursor-pointer h-10.5">
                    Save
                </button>
            </div>
        </div>
    );
}