import React from "react";
import { Card } from "../component/Card";
import TransactionsTable from "../transactions/[company]/components/TransactionsTable";

export default function () {
    const data = [
        {
            title: "Disburse Amount",
            amount: "$240,399",
            percent: "+12.5%",

        },
        {
            title: "Recovered Amount",
            amount: "$240,399",
            percent: "+8.3%",
        },
        {
            title: "Balance Amount",
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
            <TransactionsTable title={"MDB Recent Transactions"} />
        </>
    )
}