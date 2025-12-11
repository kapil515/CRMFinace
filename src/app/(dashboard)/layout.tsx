import Header from "@/app/(dashboard)/component/Header";
import Sidebar from "./component/Sidebar";

export default function PagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="flex h-screen bg-[#F4F5F7]">
                <div className="fixed left-0 top-0 h-full w-64 z-50">
                    <Sidebar />
                    </div>
                <div className="flex-1 ml-64 flex flex-col h-screen">
                    <div className="fixed top-0 left-64 right-0 h-[88px] bg-white z-40 shadow-sm border-b border-[#E8E8E8]">
                        <Header />
                    </div>
                    <div className="p-6 flex-1 overflow-y-auto pt-[88px]">
                        <div className="max-w-full">
                        {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}