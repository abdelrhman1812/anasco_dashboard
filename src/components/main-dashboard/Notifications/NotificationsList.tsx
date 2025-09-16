"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar } from "@/components/ui/avatar";

import {
  notifications,
  activities,
  contacts,
} from "@/mock-data/notificationData";

const NotificationsList = () => {
  return (
    <>
      <Sidebar side="right" className="hidden xl:block">
        <SidebarHeader className="px-4 py-4"></SidebarHeader>

        <SidebarContent className="px-3">
          {/* ====================================== Notifications ======================================  */}
          <SidebarGroup className="mb-4">
            <h2 className="text-lg font-bold mb-5">Notifications</h2>
            <SidebarGroupContent>
              <SidebarMenu>
                {notifications.map((notif) => (
                  <SidebarMenuItem
                    key={notif.id}
                    className="flex items-center gap-3 space-y-5"
                  >
                    <Avatar className="w-8 h-8 flex items-center justify-center bg-gray-100">
                      {notif.icon}
                    </Avatar>
                    <div className="space-y-1 ">
                      <p className="text-sm font-medium ">{notif.title}</p>
                      <p className="text-xs text-gray-500">{notif.time}</p>
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* ====================================== Activities ====================================== */}
          <SidebarGroup className="mb-4">
            <h2 className="text-lg font-bold mb-5">Activities</h2>
            <SidebarGroupContent>
              <SidebarMenu>
                {activities.map((act) => (
                  <SidebarMenuItem
                    key={act.id}
                    className="flex items-center gap-3 space-y-5"
                  >
                    <SidebarMenuButton className="flex items-center gap-3">
                      <Avatar className="w-8 h-8 flex items-center justify-center bg-gray-100">
                        {act.icon}
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium ">{act.title}</p>
                        <p className="text-xs text-gray-500">{act.time}</p>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* ====================================== Contacts ====================================== */}
          <SidebarGroup>
            <h2 className="text-lg font-bold mb-5">Contacts</h2>
            <SidebarGroupContent>
              <SidebarMenu>
                {contacts.map((contact) => (
                  <SidebarMenuItem
                    key={contact.id}
                    className="flex items-center gap-3 space-y-5"
                  >
                    <SidebarMenuButton className="flex items-center gap-3">
                      <Avatar className="w-8 h-8 flex items-center justify-center bg-gray-100">
                        {contact.icon}
                      </Avatar>
                      <span className="text-sm ">{contact.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
};

export default NotificationsList;
