import { noteArray } from "@shared/api/store";
import { NoteListBodyProps } from "../model/NoteListBody";
import { FC } from "react";
import { NoteListItem } from "./NoteListItem";

export const NoteListBody: FC<NoteListBodyProps> = ({
  ...props
}: NoteListBodyProps): JSX.Element => {
  if (noteArray.length === 0) {
    return <div className="text-center py-8">No notes yet</div>;
  }

  return (
    <ul {...props} className="list-none mx-2 space-y-3">
      {noteArray.map((note) => (
        <NoteListItem
          key={note.title}
          title={note.title}
          lastEditedTime={note.lastEditedTime}
        />
      ))}
    </ul>
  );
};
