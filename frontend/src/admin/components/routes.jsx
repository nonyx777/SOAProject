import { IconLayoutDashboard, IconUser } from "@tabler/icons-react";

export const routes = [
  {
    path: "",
    name: "Dashboard",
    icon: <IconLayoutDashboard size={20} />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <IconUser size={20} />,
  },
];
