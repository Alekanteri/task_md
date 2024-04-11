import { FC } from "react";
import { BodyProps } from "../model/Body";

export const SidebarBody: FC<BodyProps> = ({ children }: BodyProps) => {
  return <section className="mt-6">{children}</section>;
};
