import { Outlet } from "react-router-dom";
import { MenuHeader } from "../clients/menu-header/menu-header";

export const ClientLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1 overflow-hidden">
        <MenuHeader />
        <main className="flex-1 overflow-y-auto scrollbar-none">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
