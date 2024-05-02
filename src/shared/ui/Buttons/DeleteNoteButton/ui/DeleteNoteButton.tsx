import { DeleteFile } from "@entities/DeleteFile";
import { DeleteNote } from "@feautures/DeleteNote";
import { DefaultButton } from "@shared/ui/Buttons/DefaultButton";
import { useSetAtom } from "jotai";
import { FC } from "react";
import { MdClose } from "react-icons/md";

type DelButtonProps = {
  filename: string;
};

export const DeleteNoteButton: FC<DelButtonProps> = ({
  filename,
}: DelButtonProps): JSX.Element => {
  const deleteCurNote = useSetAtom(DeleteNote);

  const handleDeleteCurNote = () => {
    DeleteFile(filename);
    deleteCurNote();
    location.reload();
  };

  return (
    <DefaultButton onClick={handleDeleteCurNote}>
      <MdClose className="w-3 h-3 text-zinc-300" />
    </DefaultButton>
  );
};
