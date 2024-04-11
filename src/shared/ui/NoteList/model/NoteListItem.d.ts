import { NoteInfo } from "@shared/api/models";
import { ComponentProps } from "react";

export interface NoteListItemProps extends NoteInfo, ComponentProps<"div"> {
  isActive?: boolean;
  content?: string;
}
