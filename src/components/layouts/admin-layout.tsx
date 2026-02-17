import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "@/components/admin/navigation/navigation";
import { Sidebar } from "@/components/admin/sidebar/sidebar";

export const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      
      {sidebarOpen && (
        <Sidebar />
      )}

      <div className="flex flex-col flex-1 overflow-hidden">
        
        <Navigation onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
};