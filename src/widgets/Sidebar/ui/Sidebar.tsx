import { FC } from "react";
import { SidebarProps } from "../model/Sidebar";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarBody } from "./SidebarBody";

export const Sidebar: FC<SidebarProps> = ({
  children,
  ...props
}: SidebarProps): JSX.Element => {
  return (
    <aside {...props} className="w-[250px] mt-8">
      <SidebarHeader />
      <SidebarBody>{children}</SidebarBody>
    </aside>
  );
};
