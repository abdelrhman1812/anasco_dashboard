import { Activity, Bug, Contact, User } from "lucide-react";

export const notifications = [
  {
    id: 1,
    title: "You have a bug that needs",
    time: "Just now",
    icon: <Bug className="w-5 h-5 text-red-500" />,
  },
  {
    id: 2,
    title: "New user registered",
    time: "37 minutes ago",
    icon: <User className="w-5 h-5 text-blue-500" />,
  },
  {
    id: 3,
    title: "You have a bug that needs",
    time: "37 minutes ago",
    icon: <User className="w-5 h-5 text-blue-500" />,
  },
  {
    id: 4,
    title: "Andi Lane Submited to you",
    time: "37 minutes ago",
    icon: <User className="w-5 h-5 text-blue-500" />,
  },
];

export const activities = [
  {
    id: 1,
    title: "New user registered",
    time: "Just now",
    icon: <Activity className="w-5 h-5 text-green-500" />,
  },
];

export const contacts = [
  {
    id: 1,
    name: "Natali Craig",
    icon: <Contact className="w-5 h-5 text-purple-500" />,
  },
];
