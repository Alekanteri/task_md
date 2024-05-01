import { ComponentProps } from "react";

export interface NoteListBodyProps extends ComponentProps<"ul"> {
  onSelect?: () => void;
}
