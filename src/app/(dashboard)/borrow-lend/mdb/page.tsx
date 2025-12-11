import React from "react";
import Totalincome from "@/app/(dashboard)/component/Totalincome";
import TransactionsTable from "@/app/(dashboard)/transactions/mdb/components/TransactionsTable";

import { Card } from "@/app/(dashboard)/component/Card";

export default function () {
    const data = [
        {
            title: "Borrowing",
            amount: "$240,399",
            percent: "+12.5%",

        },
        {
            title: "Lending",
            amount: "$240,399",
            percent: "+8.3%",
        },
        {
            title: "Balance",
            amount: "$240,399",
            percent: "+15.2%",
        },
        
        
    ]
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
                {
                    data.map((item, index) => (
                        <Card key={index} title={item.title} amount={item.amount} percent={item.percent} />
                    ))
                }
            </div>
            <TransactionsTable title={"MDB  "} />
        </>
    )
}