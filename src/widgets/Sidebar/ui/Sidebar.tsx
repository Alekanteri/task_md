import { FC, forwardRef } from "react";
import { SidebarProps } from "../model/Sidebar";

export const Sidebar: FC<SidebarProps> = ({
  children,
  ...props
}: SidebarProps): JSX.Element => {
  return <div {...props}>{children}</div>;
};

