import { FC } from "react";
import { SidebarHeaderProps } from "../model/Header";
import { DeleteNoteButton, NewNoteButton } from "@shared/ui/Buttons";

export const SidebarHeader: FC<SidebarHeaderProps> = ({
  ...props
}: SidebarHeaderProps): JSX.Element => {
  return (
    <header className="flex items-center justify-between mx-4 my-2">
      <NewNoteButton />
      <DeleteNoteButton />
    </header>
  );
};
