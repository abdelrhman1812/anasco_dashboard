import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, Search, Settings, Bell } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 border-b bg-white">
      {/* Left side (nav buttons) */}

      <nav className="hidden md:flex items-center space-x-1">
        <SidebarTrigger />
        <Button variant="ghost" size="sm">
          <Star className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-500">
          Dashboards
        </Button>
        <span className="text-gray-500">/</span>
        <Button variant="ghost" size="sm" className="text-gray-500">
          Default
        </Button>
      </nav>

      {/* Search + Icons */}
      <div className="flex items-center space-x-2 lg:space-x-4">
        {/* Search input (hidden on mobile) */}
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search..."
            className="pl-10 w-48 lg:w-64 bg-gray-100 border-0"
          />
          <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-white px-1 rounded">
            ⌘K
          </kbd>
        </div>

        {/* Mobile search button */}
        <Button variant="ghost" size="sm" className="sm:hidden">
          <Search className="w-4 h-4" />
        </Button>

        {/* Icons */}
        <Button variant="ghost" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Bell className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default TopNav;
