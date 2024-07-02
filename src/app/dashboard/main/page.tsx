import { SimpleWidget, WidgetsGrid } from "@/components";

export const metadata = {
  title: "Admin Dahsboard",
  description: "Admin dashboard page",
};

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">General Information</span>

      <WidgetsGrid />
    </div>
  )
}
