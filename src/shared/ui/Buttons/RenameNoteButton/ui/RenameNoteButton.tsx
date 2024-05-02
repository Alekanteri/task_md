import { DefaultButton } from "@shared/ui/Buttons/DefaultButton";
import { FC } from "react";
import { MdCreate } from "react-icons/md";

type DelButtonProps = {
  func: () => void;
};

export const RenameNoteButton: FC<DelButtonProps> = ({
  func,
}: DelButtonProps): JSX.Element => {
  return (
    <DefaultButton onClick={func}>
      <MdCreate className="w-3 h-3 text-zinc-300" />
    </DefaultButton>
  );
};
