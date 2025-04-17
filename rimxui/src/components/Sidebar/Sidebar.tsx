import {
               Home,
               Settings,
               User,
               BarChart,
               Menu,
               Search,
               LogOut,
               FileText,
               Folder,
               ChevronDown,
} from "lucide-react";

//  REUSABLE ITEM COMPONENT 
const SidebarItem = ({
               icon,
               label,
               active,
}: {
               icon: React.ReactNode;
               label: string;
               active?: boolean;
}) => {
               return (
                              <div
                                             className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition ${active
                                                                           ? "bg-blue-500 text-white"
                                                                           : "hover:bg-gray-200 dark:hover:bg-gray-700"
                                                            }`}
                              >
                                             {icon}
                                             <span className="text-sm font-medium">{label}</span>
                              </div>
               );
};
//  SIDEBAR BASIC 
export const SidebarBasic = () => {
               return (
                              <aside className="w-64 h-full bg-gray-100 p-4 border-r shadow-sm">
                                             <h2 className="text-lg font-semibold text-gray-800 mb-4">Basic Sidebar</h2>
                                             <ul className="space-y-2 text-gray-700">
                                                            <li className="hover:bg-gray-200 rounded px-3 py-2 cursor-pointer">Dashboard</li>
                                                            <li className="hover:bg-gray-200 rounded px-3 py-2 cursor-pointer">Settings</li>
                                                            <li className="hover:bg-gray-200 rounded px-3 py-2 cursor-pointer">Profile</li>
                                             </ul>
                              </aside>
               );
};

// SIDEBAR PRO 
export const SidebarPro = () => {
               return (
                              <aside className="w-72 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-lg border-r">
                                             <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700">
                                                            <h2 className="text-xl font-bold">MyApp</h2>
                                                            <Menu className="w-6 h-6 cursor-pointer" />
                                             </div>

                                             <div className="p-4">
                                                            <div className="relative">
                                                                           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                                           <input
                                                                                          type="text"
                                                                                          placeholder="Search..."
                                                                                          className="w-full pl-10 pr-4 py-2 text-sm rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                           />
                                                            </div>
                                             </div>

                                             <nav className="flex flex-col px-4 space-y-1">
                                                            <SidebarItem icon={<Home />} label="Dashboard" active />
                                                            <SidebarItem icon={<BarChart />} label="Analytics" />
                                                            <SidebarItem icon={<User />} label="Users" />
                                                            <SidebarItem icon={<Settings />} label="Settings" />
                                             </nav>

                                             <div className="mt-auto px-4 py-4 border-t dark:border-gray-700">
                                                            <div className="flex items-center gap-3">
                                                                           <img
                                                                                          src="https://i.pravatar.cc/40"
                                                                                          alt="user"
                                                                                          className="w-10 h-10 rounded-full"
                                                                           />
                                                                           <div>
                                                                                          <p className="font-semibold text-sm">Rohit Rana</p>
                                                                                          <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
                                                                           </div>
                                                                           <button className="ml-auto text-gray-400 hover:text-red-500">
                                                                                          <LogOut size={18} />
                                                                           </button>
                                                            </div>
                                             </div>
                              </aside>
               );
};

//  SIDEBAR COMPACT 
export const SidebarCompact = () => {
               return (
                              <aside className="w-20 min-h-screen bg-gray-800 text-white flex flex-col items-center py-6 space-y-6">
                                             <Home className="w-6 h-6 hover:text-blue-400" />
                                             <User className="w-6 h-6 hover:text-blue-400" />
                                             <BarChart className="w-6 h-6 hover:text-blue-400" />
                                             <Settings className="w-6 h-6 hover:text-blue-400" />
                              </aside>
               );
};

//  SIDEBAR WITH SECTIONS 
export const SidebarWithSections = () => {
               return (
                              <aside className="w-72 min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white shadow-lg border-r">
                                             <div className="px-6 py-4 border-b dark:border-gray-700 flex items-center justify-between">
                                                            <h2 className="text-lg font-bold">Project Panel</h2>
                                                            <ChevronDown className="w-5 h-5" />
                                             </div>

                                             <div className="p-4">
                                                            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Files</h3>
                                                            <nav className="space-y-2 mb-6">
                                                                           <SidebarItem icon={<FileText size={18} />} label="Documents" />
                                                                           <SidebarItem icon={<Folder size={18} />} label="Folders" />
                                                            </nav>

                                                            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Settings</h3>
                                                            <nav className="space-y-2">
                                                                           <SidebarItem icon={<Settings size={18} />} label="General" />
                                                                           <SidebarItem icon={<User size={18} />} label="Account" />
                                                            </nav>
                                             </div>
                              </aside>
               );
};
