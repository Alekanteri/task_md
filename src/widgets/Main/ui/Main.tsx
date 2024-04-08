import { forwardRef, ComponentProps, ForwardedRef } from "react";
import { MainProps, Ref } from "../model/Main";

export const Main = forwardRef<Ref, MainProps>(
  ({ children, ...props }: MainProps, ref: ForwardedRef<Ref>) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  ),
);
