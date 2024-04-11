import { DefaultButton } from "@shared/ui/Buttons/DefaultButton";
import { ButtonType } from "@shared/ui/Buttons/model/ButtonType";
import { ComponentProps, FC } from "react";
import { MdOutlineNoteAdd } from "react-icons/md";

export const NewNoteButton: FC<ButtonType> = ({
  ...props
}: ButtonType): JSX.Element => {
  return (
    <DefaultButton>
      <MdOutlineNoteAdd className="w-4 h-4 text-zinc-300" />
    </DefaultButton>
  );
};
