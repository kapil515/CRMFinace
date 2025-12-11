"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function UsersAccess() {
    const [users, setUsers] = useState([
        {
            name: "Tony Stark",
            email: "tonystark@gmail.com",
            role: "Admin",
            status: "Active",
            avatar: "/images/profile.jpg",
        },
        {
            name: "Tony Stark",
            email: "tonystark@gmail.com",
            role: "Admin",
            status: "Active",
            avatar: "/images/profile.jpg",
        },
    ]);

    // Modal State
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "Select",
    });

    // Save Button Function
    const handleSaveUser = () => {
        if (formData.name && formData.email && formData.role !== "Select") {
            setUsers(prev => [
                ...prev,
                {
                    name: formData.name,
                    email: formData.email,
                    role: formData.role,
                    status: "Active",
                    avatar: "/images/profile.jpg", // Default avatar
                },
            ]);

            // Reset form + close modal
            setFormData({ name: "", email: "", role: "Select" });
            setIsInviteModalOpen(false);
        }
    };

    return (
        <div className="space-y-9.5">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#878787] p-5">
                <h3 className="text-[22px] font-inter font-medium text-[#878787]">User & Access</h3>
                <button
                    onClick={() => setIsInviteModalOpen(true)}
                    className="flex items-center gap-2 px-2 py-2 bg-[#2A9E93] text-white text-sm font-medium rounded-[4] font-inter hover:bg-[#0A7A70] transition max-w-[90px] w-full cursor-pointer"
                >
                    Invite User
                </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-[8] px-5">
                <div className="grid grid-cols-3 text-center px-5 py-7.5 border-b border-gray-100">
                    <h4 className="text-sm font-bold text-[#191919] font-inter">User</h4>
                    <h4 className="text-sm font-bold text-[#191919] font-inter">Role</h4>
                    <h4 className="text-sm font-bold text-[#191919] font-inter">Status</h4>
                </div>

                <div className="divide-y divide-[#F3F3F3]">
                    {users.map((user, index) => (
                        <div key={index} className="grid grid-cols-3 text-center px-8 py-7 items-center">
                            <div className="flex items-center gap-2 justify-center">
                                <div className="relative">
                                    <Image
                                        src={user.avatar}
                                        alt={user.name}
                                        width={38}
                                        height={38}
                                        className="rounded-full h-[38px] w-[38px] object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-base font-semibold text-[#666666] text-left font-inter">{user.name}</p>
                                    <p className="text-xs text-[#BABABA] font-normal font-inter">{user.email}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[#666666] font-inter">{user.role}</p>
                            </div>
                            <div>
                                <span className="inline-flex items-center px-2.5 py-2 rounded-[4] text-xs font-medium bg-[#F3F4F6] text-[#666666] font-inter w-[57px] h-[28]">
                                    {user.status}
                                </span>
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

            {/* Invite User Modal */}
            {isInviteModalOpen && (
                <div className="fixed inset-0 bg-[#00000021] bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsInviteModalOpen(false)}>
                    <div className="bg-white rounded-[8] shadow-[-2px -2px 150px 0 rgba(0, 0, 0, 0.25)] w-full max-w-[492px] p-5 relative pb-10" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setIsInviteModalOpen(false)}
                            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 cursor-pointer"
                        >
                            <X size={24} />
                        </button>

                        <h3 className="text-[22px] font-medium font-inter text-[#878787] mb-6.5 pb-5 border-b border-[#999DA3]">Invite</h3>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-base font-semibold font-inter text-[#525256] mb-2">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Enter here"
                                    className="text-[#999DA3] font-inter text-base font-normal w-full px-4 py-3 border border-[rgba(159, 159, 159, 0.20)] rounded-[8] shadow-[0 3px 12px 0 rgba(124, 139, 157, 0.06)] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                                />
                            </div>

                            <div>
                                <label className="block text-base font-semibold font-inter text-[#525256] mb-2">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="Enter here"
                                    className="text-[#999DA3] font-inter text-base font-normal w-full px-4 py-3 border border-[rgba(159, 159, 159, 0.20)] rounded-[8] shadow-[0 3px 12px 0 rgba(124, 139, 157, 0.06)] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                                />
                            </div>

                            <div>
                                <label className="block text-base font-semibold font-inter text-[#525256] mb-2">Role</label>
                                <select
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    className="text-[#999DA3] font-inter text-base font-normal w-full px-4 py-3 border border-[rgba(159, 159, 159, 0.20)] rounded-[8] shadow-[0 3px 12px 0 rgba(124, 139, 157, 0.06)] focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                                >
                                    <option>Select</option>
                                    <option>Admin</option>
                                    <option>Manager</option>
                                    <option>User</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-4 mt-10">
                            <button
                                onClick={() => setIsInviteModalOpen(false)}
                                className="px-8 py-1 border border-[#EBECEE] text-[#4B5768] rounded-[4] hover:bg-[#299D91] hover:text-white transition bg-[#E4E7EB] text-base font-semibold font-inter max-w-[216px] w-full cursor-pointer h-10.5"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveUser}
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