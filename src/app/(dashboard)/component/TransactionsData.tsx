// constants/companyData.ts
export const COMPANY_DATA: Record<string, {
  incomeCards: Array<{ title: string; amount: string; percent: string }>;
  borrowCards: Array<{ title: string; amount: string; percent: string }>;
  transactions: Array<{
    date: string;
    branch: string;
    type: string;
    category: string;
    vendor: string;
    remarks: string;
    amount: string;
    receivedIn: string;
    updatedBy: string;
  }>;
}> = {
  mdb: {
    incomeCards: [
      { title: "Total Income", amount: "$240,399", percent: "+12.5%" },
      { title: "Total Expense", amount: "$240,399", percent: "+8.3%" },
      { title: "Total Saving", amount: "$240,399", percent: "+15.2%" },
      { title: "Total Income", amount: "$240,399", percent: "+12.5%" },
    ],
    borrowCards: [ 
      { title: "Total Borrow", amount: "$240,399", percent: "+12.5%" },
      { title: "Total Lend", amount: "$240,399", percent: "+8.3%" },
      { title: "Total Disburse", amount: "$240,399", percent: "+15.2%" },
      { title: "Recovered", amount: "$240,399", percent: "+12.5%" },
    ],
    transactions: [
      { date: "Jul 05, 2025", branch: "Abohar", type: "Expense", category: "Payroll", vendor: "John Smith", remarks: "June Payroll", amount: "₹10,000", receivedIn: "MDB Account", updatedBy: "John Doe" },
      // ... MDB ke baaki
    ],
  },
  virtual: {
    incomeCards: [
      { title: "Total Income", amount: "$350,000", percent: "+20%" },
      { title: "Total Expense", amount: "$200,000", percent: "+10%" },
      { title: "Total Saving", amount: "$150,000", percent: "+25%" },
      { title: "Total Income", amount: "$350,000", percent: "+20%" },
    ],
    borrowCards: [
      { title: "Total Borrow", amount: "$100,000", percent: "+5%" },
      { title: "Total Lend", amount: "$80,000", percent: "+3%" },
      { title: "Total Disburse", amount: "$90,000", percent: "+8%" },
      { title: "Recovered", amount: "$70,000", percent: "+10%" },
    ],
    transactions: [
      { date: "Jul 06, 2025", branch: "Virtual", type: "Income", category: "Sales", vendor: "Client A", remarks: "Project", amount: "₹50,000", receivedIn: "Virtual Account", updatedBy: "Admin" },
      // Virtual ke alag data
    ],
  },
  mumbai: {
    incomeCards: [
      { title: "Total Income", amount: "$100,000", percent: "+8%" },
      { title: "Total Expense", amount: "$180,000", percent: "+5%" },
      { title: "Total Saving", amount: "$160,000", percent: "+10%" },
      { title: "Total Income", amount: "$120,000", percent: "+8%" },
    ],
    borrowCards: [
      { title: "Total Borrow", amount: "$220,000", percent: "+3%" },
      { title: "Total Lend", amount: "$60,000", percent: "+2%" },
      { title: "Total Disburse", amount: "$85,000", percent: "+4%" },
      { title: "Recovered", amount: "$75,000", percent: "+5%" },
    ],
    transactions: [
      { date: "Jul 05, 2025", branch: "Mumbai", type: "Expense", category: "Payroll", vendor: "Local Staff", remarks: "Salary", amount: "₹16,000", receivedIn: "mumbai Account", updatedBy: "Manager" },
      // Mumbai ke alag data
      ],
  },
   abohar: {
    incomeCards: [
      { title: "Total Income", amount: "$180,000", percent: "+8%" },
      { title: "Total Expense", amount: "$120,000", percent: "+5%" },
      { title: "Total Saving", amount: "$60,000", percent: "+10%" },
      { title: "Total Income", amount: "$180,000", percent: "+8%" },
    ],
    borrowCards: [
      { title: "Total Borrow", amount: "$520,000", percent: "+3%" },
      { title: "Total Lend", amount: "$40,000", percent: "+2%" },
      { title: "Total Disburse", amount: "$45,000", percent: "+4%" },
      { title: "Recovered", amount: "$35,000", percent: "+5%" },
    ],
    transactions: [
      { date: "Jul 25, 2025", branch: "Abohar", type: "Expense", category: "Payroll", vendor: "Local Staff", remarks: "Salary", amount: "₹15,000", receivedIn: "Abohar Account", updatedBy: "Manager" },
      { date: "Jul 20, 2025", branch: "Abohar", type: "Expense", category: "Payroll", vendor: "Per Staff", remarks: "Salary", amount: "₹19,000", receivedIn: "Local Account", updatedBy: "Manager" },
    ],
  },
    horizonacademy: {
    incomeCards: [
      { title: "Total Income", amount: "$180,000", percent: "+8%" },
      { title: "Total Expense", amount: "$120,000", percent: "+5%" },
      { title: "Total Saving", amount: "$60,000", percent: "+10%" },
      { title: "Total Income", amount: "$180,000", percent: "+8%" },
    ],
    borrowCards: [
      { title: "Total Borrow", amount: "$520,000", percent: "+3%" },
      { title: "Total Lend", amount: "$40,000", percent: "+2%" },
      { title: "Total Disburse", amount: "$45,000", percent: "+4%" },
      { title: "Recovered", amount: "$35,000", percent: "+5%" },
    ],
    transactions: [
      { date: "Jul 25, 2025", branch: "Abohar", type: "Expense", category: "Payroll", vendor: "Local Staff", remarks: "Salary", amount: "₹15,000", receivedIn: "Abohar Account", updatedBy: "Manager" },
      { date: "Jul 20, 2025", branch: "Abohar", type: "Expense", category: "Payroll", vendor: "Per Staff", remarks: "Salary", amount: "₹19,000", receivedIn: "Local Account", updatedBy: "Manager" },
    ],
  },
 
};