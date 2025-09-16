"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BookText,
  DollarSign,
  Package,
  Settings,
  User,
  ChartBarBig,
  ChevronDown,
  ChevronRight,
  Heart,
  History,
  Home,
  Building,
  BookOpen,
  Users,
  BarChart3,
  Calendar,
  MessageSquare,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import sidebarIcon from "../../../../public/Icons/sidebarIcon.png";
import Image from "next/image";
import { useState } from "react";
import Shortcuts from "./Shortcuts";
import { navigationItems } from "@/mock-data/sidbarData";

const iconChoose: Record<string, LucideIcon> = {
  Default: ChartBarBig,
  "e-commerce": DollarSign,
  projects: Package,
  "online courses": BookText,
  "user profile": User,
  Account: Settings,
  Corporate: Building,
  Blog: BookOpen,
  Social: Users,
  Favorites: Heart,
  Recently: History,
  Overview: Home,
  Analytics: BarChart3,
  Schedule: Calendar,
  Messages: MessageSquare,
};

export default function DashboardSidebar() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  const toggleExpanded = (itemTitle: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemTitle]: !prev[itemTitle],
    }));
  };

  return (
    <Sidebar className="hidden border-r md:block" id="main-sidebar">
      <SidebarHeader className="px-4 py-4">
        {/* Logo */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className=" ">
              <Link href="/" className="flex items-center gap-3">
                <div className="p-1 bg-blue-100 rounded-lg">
                  <Image
                    width={24}
                    height={24}
                    src={sidebarIcon}
                    alt="ANASCO GROUP"
                    className="rounded-md"
                  />
                </div>
                <span className="font-bold">ANASCO GROUP</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Shortcuts */}
        <Shortcuts />
      </SidebarHeader>

      <SidebarContent className="px-3">
        {/* ====================================== Dashboard  ====================================== */}
        <SidebarGroup className="mb-3">
          <SidebarGroupLabel className="px-2 text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems?.Dashboard?.map((item) => {
                const Icon = iconChoose[item.title] || ChartBarBig;
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={`${
                          item.url === "/"
                            ? " bg-gray-100 border-l-4 text-black rounded-e-2xl border-black rounded-none"
                            : ""
                        } flex items-center gap-2`}
                      >
                        <ChevronRight size={16} className="opacity-50" />

                        <Icon className="h-4 w-4" />
                        <span className="capitalize">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* ====================================== Pages ====================================== */}
        <SidebarGroup className="mb-6">
          <SidebarGroupLabel className="px-2 text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            Pages
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems?.pages?.map((item, idx) => {
                const Icon = iconChoose[item.title] || User;
                return (
                  <SidebarMenuItem key={idx}>
                    {item.children ? (
                      <>
                        <SidebarMenuButton
                          onClick={() => toggleExpanded(item.title)}
                          className="flex items-center "
                        >
                          {expandedItems[item.title] ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4" />
                            <span className="capitalize">{item.title}</span>
                          </div>
                        </SidebarMenuButton>
                        {expandedItems[item.title] && (
                          <div className="ml-6 mt-1 space-y-1">
                            {item.children.map((child, cidx) => {
                              return (
                                <SidebarMenuButton
                                  key={cidx}
                                  asChild
                                  className="pl-3 text-sm"
                                >
                                  <Link
                                    href={child.url}
                                    className="flex items-center gap-2"
                                  >
                                    <span className="capitalize">
                                      {child.title}
                                    </span>
                                  </Link>
                                </SidebarMenuButton>
                              );
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.url}
                          className="flex items-center gap-2"
                        >
                          <ChevronRight size={16} className="opacity-50" />

                          <Icon className="h-4 w-4" />
                          <span className="capitalize">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
