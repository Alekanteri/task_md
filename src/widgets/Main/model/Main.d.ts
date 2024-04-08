import { ComponentProps, ReactNode } from "react";

export interface MainProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export type Ref = HTMLDivElement;
