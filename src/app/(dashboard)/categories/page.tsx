// app/(dashboard)/categories/page.tsx
import CategoriesList from "./components/IncomeList";

export default function CategoriesPage() {
  return (
    <div className="pt-5 min-h-screen">
      <CategoriesList />
    </div>
  );
}