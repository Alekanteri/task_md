import { ComponentProps } from "react";

export interface ButtonType extends ComponentProps<"button"> {
  func?: () => void;
}
