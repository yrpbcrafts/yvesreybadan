import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type SidebarItem = {
  title: string;
  path?: string;
  children?: SidebarItem[];
};

const sidebarData: SidebarItem[] = [
  { title: "Dashboard", path: "/" },

  {
    title: "Profile",
    children: [
      { title: "Basic Info", path: "/profile/basic" },
      { title: "About Me", path: "/profile/about" },
      { title: "Resume", path: "/profile/resume" },
      { title: "Social Links", path: "/profile/social" },
    ],
  },

  {
    title: "Portfolio",
    children: [
      { title: "Projects", path: "/projects" },
      { title: "Experience", path: "/experience" },
      { title: "Skills", path: "/skills" },
    ],
  },

  {
    title: "Content",
    children: [
      { title: "Blog Posts", path: "/blog" },
      { title: "Categories", path: "/blog/categories" },
      { title: "Comments", path: "/blog/comments" },
    ],
  },

  {
    title: "Communication",
    children: [
      { title: "Messages", path: "/messages" },
      { title: "Testimonials", path: "/testimonials" },
    ],
  },

  {
    title: "Analytics",
    children: [
      { title: "Visitors", path: "/analytics/visitors" },
      { title: "Engagement", path: "/analytics/engagement" },
    ],
  },

  {
    title: "Settings",
    children: [
      { title: "General", path: "/settings/general" },
      { title: "SEO", path: "/settings/seo" },
      { title: "Integrations", path: "/settings/integrations" },
    ],
  },
];

export const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (title: string) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-gray-100 overflow-y-auto border-r border-gray-800">
      
      {/* Header */}
      <div className="p-6 border-b border-gray-800/50">
        <h1 className="text-xl font-light tracking-wide">Portfolio</h1>
        <div className="h-0.5 w-12 bg-sky-50"></div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1">
        {sidebarData.map((item) => (
          <div key={item.title}>
            {/* Single Item */}
            {!item.children ? (
              <Link
                to={item.path!}
                className="group flex items-center justify-between px-4 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
              >
                <span className="text-sm font-light">{item.title}</span>
                <div className="w-1 h-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            ) : (
              <>
                {/* Accordion Header */}
                <button
                  onClick={() => toggleMenu(item.title)}
                  className="group flex justify-between items-center w-full px-4 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                >
                  <span className="text-sm font-light">{item.title}</span>
                  <ChevronRight
                    size={16}
                    className={`text-gray-500 transition-transform duration-200 ${
                      openMenu === item.title ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                {openMenu === item.title && (
                  <div className="ml-4 mt-1 mb-2 space-y-0.5 border-l border-gray-800 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        to={child.path!}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-white rounded-md hover:bg-gray-800/30 transition-all duration-200"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};