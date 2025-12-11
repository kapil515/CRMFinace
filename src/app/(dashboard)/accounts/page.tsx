import React from "react";
import { Card } from "../component/Card";
import AccountsCards from "./component/AccountsCards";

export default function AccountsPage() {
    const data = [
        {
            title: "Total Cash",
            amount: "$240,399",
            percent: "+12.5%",
        },
        {
            title: "Accounts",
            amount: "$240,399",
            percent: "+8.3%",
        },
        {
            title: "Other Accounts",
            amount: "$240,399",
            percent: "+15.2%",
        },
    ];
    return (
        <div className="pt-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">Bank Accounts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
                {data.map((item, index) => (
                    <Card key={index} title={item.title} amount={item.amount} percent={item.percent} />
                ))}
            </div>
            <AccountsCards />
        </div>
    );
}