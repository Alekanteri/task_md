import { DefaultButton } from "@shared/ui/Buttons/DefaultButton";
import { ButtonType } from "@shared/ui/Buttons/model/ButtonType";
import { ComponentProps, FC } from "react";
import { MdDeleteOutline } from "react-icons/md";

export const DeleteNoteButton: FC<ButtonType> = ({
  ...props
}: ButtonType): JSX.Element => {
  return (
    <DefaultButton>
      <MdDeleteOutline className="w-4 h-4 text-zinc-300" />
    </DefaultButton>
  );
};
