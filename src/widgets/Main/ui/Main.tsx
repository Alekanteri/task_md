import { forwardRef, ForwardedRef } from "react";
import { MainProps, Ref } from "../model/Main";

export const Main = forwardRef<Ref, MainProps>(
  ({ children, ...props }: MainProps, ref: ForwardedRef<Ref>) => (
    <div
      ref={ref}
      {...props}
      className="border-l bg-zinc-900/50 border-l-white/20 flex-1 overflow-auto"
    >
      {children}
    </div>
  )
);

Main.displayName = "Main";
