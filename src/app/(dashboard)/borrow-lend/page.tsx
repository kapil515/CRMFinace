import React from "react";
import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/borrow-lend/mdb"); 
}