import { FC } from "react";
import { LayoutProps } from "../model/Layout";

export const Layout: FC<LayoutProps> = ({
  children,
  ...props
}: LayoutProps): JSX.Element => {
  return (
    <main {...props} className="flex flex-row h-screen">
      {children}
    </main>
  );
};
