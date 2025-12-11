import React from "react";
import Totalincome from "../../component/Totalincome";
import TransactionsTable from "@/app/(dashboard)/transactions/mdb/components/TransactionsTable";



export default function () {
    return (
        <>
            <div>

                <Totalincome />
                <TransactionsTable title="HORIZON ACADEMY Recent Transactions" />
            </div>
        </>
    )
}