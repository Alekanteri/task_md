import { ComponentProps, ReactNode } from "react";

export interface BodyProps extends ComponentProps<"section"> {
  children: ReactNode;
}
