import { NoteListBodyProps } from "../model/NoteListBody";
import { FC } from "react";
import { NoteListItem } from "./NoteListItem";
import { NotesList } from "@feautures/NotesList";

export const NoteListBody: FC<NoteListBodyProps> = ({
  onSelect,
  ...props
}: NoteListBodyProps): JSX.Element | null => {
  const { notes, selectedNoteIndex, handleNoteSelect } = NotesList({
    onSelect,
  });

  if (!notes) return null;

  if (notes.length === 0) {
    return <div className="text-center py-8">No notes yet</div>;
  }

  return (
    <ul {...props} className="list-none mx-2 space-y-3">
      {notes.map((note, index) => (
        <NoteListItem
          key={note.title + note.lastEditedTime}
          title={note.title.substring(0, note.title.indexOf("."))}
          lastEditedTime={note.lastEditedTime}
          isActive={selectedNoteIndex === index}
          onClick={() => handleNoteSelect(index)}
        />
      ))}
    </ul>
  );
};
