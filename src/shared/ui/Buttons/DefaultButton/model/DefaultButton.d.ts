import { ButtonType } from "@shared/Buttons/model/ButtonType";
import { ComponentProps, ReactNode } from "react";

export interface DefaultButtonProps extends ButtonType {
  children: ReactNode;
}
