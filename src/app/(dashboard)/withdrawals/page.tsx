// app/(dashboard)/withdrawals/page.tsx
import WithdrawalTable from "./component/WithdrawalTable";

export default function WithdrawalsPage() {
  return (
    <div className="min-h-screen">
      <WithdrawalTable />
    </div>
  );
}