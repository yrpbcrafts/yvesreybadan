import { useState } from "react";
import { Bell, Menu, Search, User } from "lucide-react";

type NavigationProps = {
  onToggleSidebar?: () => void;
};

export const Navigation = ({ onToggleSidebar }: NavigationProps) => {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        
        {/* Sidebar Toggle */}
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle sidebar"
        >
          <Menu size={20} className="text-gray-600" />
        </button>

        {/* Page Title */}
        <h1 className="text-base font-light text-gray-800 tracking-wide">
          Dashboard
        </h1>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-3">
        
        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-300 transition-colors duration-200 w-64">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-3 text-sm text-gray-700 placeholder:text-gray-400 w-full"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2.5 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <Bell size={19} className="text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-200"></div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpenProfile(!openProfile)}
            className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors duration-200"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <span className="text-sm text-gray-700 font-light hidden lg:block">Admin</span>
          </button>

          {openProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              <button className="block w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm text-gray-700 transition-colors duration-200">
                Profile
              </button>
              <button className="block w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm text-gray-700 transition-colors duration-200">
                Settings
              </button>
              <div className="h-px bg-gray-100 my-1"></div>
              <button className="block w-full text-left px-4 py-2.5 hover:bg-red-50 text-sm text-red-600 transition-colors duration-200">
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};