import { FC } from "react";
import { TitleProps } from "../model/Title";
import { useAtomValue } from "jotai";
import { selectedNoteStore } from "@feautures/NoteStore";

export const Title: FC<TitleProps> = ({
  ...props
}: TitleProps): JSX.Element => {
  const selectedNote = useAtomValue(selectedNoteStore);

  return (
    <div {...props} className="flex justify-center py-2">
      <span className="text-gray-400">
        {selectedNote
          ? selectedNote.title.substring(0, selectedNote.title.indexOf("."))
          : ""}
      </span>
    </div>
  );
};
