import { ComponentProps, ReactNode } from "react";

export interface LayoutProps extends ComponentProps<"main"> {
  children: ReactNode;
}
