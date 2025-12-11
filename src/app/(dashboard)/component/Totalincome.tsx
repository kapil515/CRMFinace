
"use client";

import { Card } from "./Card";

export default function Totalincome() {
  const data = [
    {
      title: "Total Income",
      amount: "$240,399",
      percent: "+12.5%",

    },
    {
      title: "Total Expense",
      amount: "$240,399",
      percent: "+8.3%",
    },
    {
      title: "Total Saving",
      amount: "$240,399",
      percent: "+15.2%",
    },
    {
      title: "Total Income",
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
