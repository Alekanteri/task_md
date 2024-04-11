import { FC } from "react";
import { DefaultButtonProps } from "../model/DefaultButton";

export const DefaultButton: FC<DefaultButtonProps> = ({
  children,
  ...props
}: DefaultButtonProps): JSX.Element => {
  return (
    <button
      {...props}
      className="px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-zinc-600/50 transition-colors duration-100"
    >
      {children}
    </button>
  );
};
