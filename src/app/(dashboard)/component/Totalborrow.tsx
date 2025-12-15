
"use client";

import { Card } from "./Card";

export default function Totalincome() {
  const data = [
    {
      title: "Total Borrow",
      amount: "$240,399",
      percent: "+12.5%",

    },
    {
      title: "Total Lend",
      amount: "$240,399",
      percent: "+8.3%",
    },
    {
      title: "Total Disburse",
      amount: "$240,399",
      percent: "+15.2%",
    },
    {
      title: "Recovered",
      amount: "$240,399",
      percent: "+12.5%",

    },
   
    
  ]
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
        {
          data.map((item, index) => (
            <Card key={index} title={item.title} amount={item.amount} percent={item.percent} />
          ))
        }
      </div>
      
    </>
  );
}
