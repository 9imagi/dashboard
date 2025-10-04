"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "./ui/button";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();
  const footerItem = [{ name: "Sign Out" }];
  const sideItem = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "Customers",
      path: "/dashboard/Customers",
    },
    {
      name: "Invoice",
      path: "/dashboard/Invoice",
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="flex items-center">
        {sideItem.map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className=".active:bg-gray-200"
          >
            <div
              key={item.name}
              className={clsx(" rounded w-full pl-2 hover:bg-gray-200 p-2 ", {
                "bg-gray-200": pathname === item.path,
              })}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </SidebarContent>
      <SidebarFooter>
        {footerItem.map((item) => (
          <Button key={item.name} variant="ghost">
            {item.name}
          </Button>
        ))}
      </SidebarFooter>
    </Sidebar>
  );
}
