"use client";

import { useState } from "react";
import { Star, ChevronDown, ChevronUp, MoreVertical, Plus, X, Check, Trash2 } from "lucide-react";

type TabType = "income" | "expense";

interface CategoryGroup {
    title: string;
    items: string[];
    isOpen?: boolean;
}

export default function CategoriesList() {
    const [activeTab, setActiveTab] = useState<TabType>("income");
    const [openGroups, setOpenGroups] = useState<Set<string>>(new Set(["Client Services", "Digital Product Sales", "Courses"]));
    const [editingGroup, setEditingGroup] = useState<number | "new-main-group" | null>(null); // Yeh change kiya hai
    const [newCategoryName, setNewCategoryName] = useState("");

    // State for delete dropdown
    const [showDeleteMenu, setShowDeleteMenu] = useState<{ group?: number; item?: { group: number; index: number } } | null>(null);

    // INCOME DATA
    const [incomeData, setIncomeData] = useState<CategoryGroup[]>([
        { title: "Client Services", isOpen: true, items: ["Web Design", "Web Development", "WordPress Projects", "Shopify Projects", "UI/UX Design", "Branding & Logo Design", "App Development", "Landing Pages Projects"] },
        { title: "Digital Product Sales", isOpen: true, items: ["Theme Sales", "Plugin Sales", "Design Templates"] },
        { title: "Courses", isOpen: true, items: ["UI/UX Design", "Web Development", "Web Designing", "Graphic Design"] },
        { title: "Others", isOpen: false, items: [] },
    ]);

    // EXPENSE DATA
    const [expenseData, setExpenseData] = useState<CategoryGroup[]>([
        { title: "Payroll", isOpen: true, items: ["John Doe", "Tony Stark", "Salary Partner"] },
        { title: "HR / Team", isOpen: true, items: ["Freelance Payment", "Office Support", "Extra Curricular Activities"] },
        { title: "Technology", isOpen: true, items: ["Software Licenses", "External Purchase", "Tools (Figma)", "ClickUp"] },
        { title: "Marketing", isOpen: true, items: ["Ad Spends", "SEO Tools", "Meta Ads"] },
        { title: "Admin & Office", isOpen: true, items: ["Rent", "Internet", "Electricity", "Water", "Office Supplies"] },
        { title: "Team Welfare", isOpen: true, items: ["Gifts", "Celebrations", "Events", "Festival Bonus"] },
    ]);

    const currentData = activeTab === "income" ? incomeData : expenseData;
    const setCurrentData = activeTab === "income" ? setIncomeData : setExpenseData;

    const toggleGroup = (title: string) => {
        setOpenGroups(prev => {
            const newSet = new Set(prev);
            if (newSet.has(title)) newSet.delete(title);
            else newSet.add(title);
            return newSet;
        });
    };

    const addNewCategoryToGroup = (groupIndex: number, name: string) => {
        setCurrentData(prev =>
            prev.map((g, i) => (i === groupIndex ? { ...g, items: [...g.items, name] } : g))
        );
        setNewCategoryName("");
        setEditingGroup(null);
    };

    // Nayi Group Add Karne Ka Function
    const addNewGroup = (name: string) => {
        setCurrentData(prev => [
            ...prev,
            { title: name, items: [], isOpen: true }
        ]);
        setNewCategoryName("");
        setEditingGroup(null);
    };

    // Delete Sub-item
    const deleteSubItem = (groupIndex: number, itemIndex: number) => {
        setCurrentData(prev =>
            prev.map((g, i) =>
                i === groupIndex ? { ...g, items: g.items.filter((_, idx) => idx !== itemIndex) } : g
            )
        );
        setShowDeleteMenu(null);
    };

    // Delete Entire Group
    const deleteGroup = (groupIndex: number) => {
        setCurrentData(prev => prev.filter((_, i) => i !== groupIndex));
        setShowDeleteMenu(null);
    };

    return (
        <>
            {/* Tabs */}
            <div className="flex gap-5 mb-[30px]">
                <button
                    onClick={() => setActiveTab("income")}
                    className={`px-4 py-2 text-base font-bold font-inter transition-all border-b-2 ${activeTab === "income" ? "text-[#299D91] border-[#299D91]" : "text-[#525256] border-transparent hover:text-gray-700"}`}
                >
                    Income
                </button>
                <button
                    onClick={() => setActiveTab("expense")}
                    className={`px-4 py-2 text-base font-bold font-inter transition-all border-b-2 ${activeTab === "expense" ? "text-[#299D91] border-[#299D91]" : "text-[#525256] border-transparent hover:text-gray-700"}`}
                >
                    Expense
                </button>
            </div>

            <div className="bg-white rounded-lg min-h-screen px-5">
                <div className="flex items-center justify-around p-7 border-b border-[#F3F3F3]">
                    <h2 className="text-sm font-bold text-[#191919] font-inter">Category</h2>
                    <span className="text-sm font-bold text-[#191919] font-inter">Action</span>
                </div>

                <div className="divide-y divide-gray-100 py-5 px-[50px]">
                    {currentData.map((group, groupIndex) => (
                        <div key={groupIndex} className="border-none">
                            {/* Group Header */}
                            <div className="flex items-center justify-between pl-[50px] py-2.5 hover:bg-gray-50 transition-all duration-600 ease-in-out">
                                <button
                                    onClick={() => toggleGroup(group.title)}
                                    className="flex items-center gap-2.5 flex-1 text-left cursor-pointer"
                                >
                                    <span className="text-sm font-medium font-inter text-[#666666]">
                                        {group.title}
                                    </span>
                                    <span className="w-[16] h-[16] text-white bg-[#299D91] rounded-full flex items-center justify-center text-xs">
                                        {group.items.length}
                                    </span>
                                    {openGroups.has(group.title) ? (
                                        <ChevronUp size={16} className="text-[#4B5563]" />
                                    ) : (
                                        <ChevronDown size={16} className="text-[#4B5563]" />
                                    )}
                                </button>

                                {/* MoreVertical - Delete Group */}
                                <div className="relative w-[50%]">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowDeleteMenu(showDeleteMenu?.group === groupIndex ? null : { group: groupIndex });
                                        }}
                                        className="text-gray-400 hover:text-gray-600 flex justify-center w-full cursor-pointer"
                                    >
                                        <MoreVertical size={20} />
                                    </button>
                                    {showDeleteMenu?.group === groupIndex && (
                                        <div className="absolute left-[20%] top-0 w-35 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    deleteGroup(groupIndex);
                                                }}
                                                className="cursor-pointer w-full text-center px-4 py-2 text-xs text-red-600 hover:bg-red-50 flex items-center gap-2"
                                            >
                                                <Trash2 size={16} />
                                                Delete Group
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Collapsible Items */}
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openGroups.has(group.title) ? "h-full opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="border-none">
                                    {group.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between pl-[100px] pr-[17px] py-2.5 hover:bg-gray-50/70 transition group">
                                            <div className="flex items-center gap-2.5">
                                                <Star size={16} className="text-[#757575]" />
                                                <span className="text-sm font-normal font-inter text-[#666666]">{item}</span>
                                            </div>
                                            <div className="relative w-[50%]">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setShowDeleteMenu(
                                                            showDeleteMenu?.item?.group === groupIndex && showDeleteMenu?.item?.index === idx
                                                                ? null
                                                                : { item: { group: groupIndex, index: idx } }
                                                        );
                                                    }}
                                                    className="text-gray-400 hover:text-gray-600 flex justify-center w-full cursor-pointer"
                                                >
                                                    <MoreVertical size={20} />
                                                </button>
                                                {showDeleteMenu?.item?.group === groupIndex && showDeleteMenu?.item?.index === idx && (
                                                    <div className="absolute left-[20%] top-0 w-25 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                deleteSubItem(groupIndex, idx);
                                                            }}
                                                            className="cursor-pointer w-full text-center px-4 py-2 text-xs text-red-600 hover:bg-red-50 flex items-center gap-2"
                                                        >
                                                            <Trash2 size={16} />
                                                            Delete
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    {/* + Category Inside Group */}
                                    <div className="px-[100px] py-2.5">
                                        {editingGroup === groupIndex ? (
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="text"
                                                    value={newCategoryName}
                                                    onChange={(e) => setNewCategoryName(e.target.value)}
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter" && newCategoryName.trim()) addNewCategoryToGroup(groupIndex, newCategoryName.trim());
                                                        if (e.key === "Escape") { setEditingGroup(null); setNewCategoryName(""); }
                                                    }}
                                                    placeholder="Enter category name"
                                                    className="px-3 py-1.5 text-sm border border-gray-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#0D9488] w-[50%]"
                                                    autoFocus
                                                />
                                                <button onClick={() => newCategoryName.trim() && addNewCategoryToGroup(groupIndex, newCategoryName.trim())} className="font-medium text-white hover:text-white hover:bg-black cursor-pointer bg-[#0A7A70] border-2 rounded-lg px-5 py-2">SAVE</button>
                                                <button onClick={() => { setEditingGroup(null); setNewCategoryName(""); }} className="font-medium text-white hover:text-white hover:bg-black cursor-pointer bg-[#0A7A70] border-2 rounded-lg px-5 py-2">CLOSE</button>
                                            </div>
                                        ) : (
                                            <button onClick={() => setEditingGroup(groupIndex)} className=" flex items-center gap-2 text-sm font-medium text-[#0D9488] hover:text-[#0A7A70] transition cursor-pointer">
                                                <Plus size={16} />
                                                Category
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Bahar Wala + Category — Ab Perfectly Working! */}
                    <div className="px-12 py-2.5">
                        {editingGroup === "new-main-group" ? (
                            <div className="flex items-center gap-3">
                                <input
                                    type="text"
                                    value={newCategoryName}
                                    onChange={(e) => setNewCategoryName(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && newCategoryName.trim()) {
                                            addNewGroup(newCategoryName.trim());
                                        }
                                        if (e.key === "Escape") {
                                            setEditingGroup(null);
                                            setNewCategoryName("");
                                        }
                                    }}
                                    placeholder="Enter new group name"
                                    className="px-3 py-1.5 text-sm border border-gray-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#0D9488] w-[50%]"
                                    autoFocus
                                />
                                <button
                                    onClick={() => newCategoryName.trim() && addNewGroup(newCategoryName.trim())}
                                    className="font-medium text-white hover:text-white hover:bg-black cursor-pointer bg-[#0A7A70] border-2 rounded-lg px-5 py-2"
                                >
                                    SAVE
                                </button>
                                <button
                                    onClick={() => {
                                        setEditingGroup(null);
                                        setNewCategoryName("");
                                    }}
                                    className="font-medium text-white hover:text-white hover:bg-black cursor-pointer bg-[#0A7A70] border-2 rounded-lg px-5 py-2"
                                >
                                    CLOSE
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => setEditingGroup("new-main-group")}
                                className="flex items-center gap-2 text-sm font-medium text-[#0D9488] hover:text-[#0A7A70] transition cursor-pointer"
                            >
                                <Plus size={18} />
                                Category
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}