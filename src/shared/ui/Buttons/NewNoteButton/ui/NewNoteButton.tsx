import { DefaultButton } from "@shared/ui/Buttons/DefaultButton";
import { ButtonType } from "@shared/ui/Buttons/model/ButtonType";
import { FC } from "react";
import { MdOutlineNoteAdd } from "react-icons/md";

export const NewNoteButton: FC<ButtonType> = ({
  func,
}: ButtonType): JSX.Element => {
  return (
    <DefaultButton onClick={func}>
      <MdOutlineNoteAdd className="w-4 h-4 mx-10 text-zinc-300" />
    </DefaultButton>
  );
};
