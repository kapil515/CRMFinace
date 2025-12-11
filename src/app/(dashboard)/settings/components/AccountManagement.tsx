import React from "react";
import AccountsCards from "../../accounts/component/AccountsCards";

export default function AccountManagement() {
    return (
        <>
            <div className="space-y-10 pb-5">

            <h3 className="text-[22px] font-inter font-medium text-[#878787] mb-9.5 p-5 border-b border-[#878787]">Account Management</h3>
                <AccountsCards showNewButton={true} showDetails={false} />
            </div>
        </>
    ); 
}