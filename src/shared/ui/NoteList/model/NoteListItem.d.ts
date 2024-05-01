import { NoteInfo } from "@shared/model/models";
import { ComponentProps } from "react";

export interface NoteListItemProps extends NoteInfo, ComponentProps<"div"> {
  isActive?: boolean;
}
