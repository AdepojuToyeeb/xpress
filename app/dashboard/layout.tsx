import { ProtectedRoute } from "@/components/auth/protected-route";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/side-bar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex flex-1 overflow- flex-col ">
          <Header />
          <main className="flex-1 bg-[#F5F6F8] overflow-auto p-6 px-8">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
