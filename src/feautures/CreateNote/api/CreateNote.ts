import { noteStore, selectedNoteIndexStore } from "@feautures/NoteStore";
import { NoteInfo } from "@shared/model/models";
import { atom } from "jotai";

export const CreateNote = atom(null, async (get, set) => {
  const notes = get(noteStore);

  if (!notes) return null;

  const title = `New note${notes.length}`;

  if (!title) {
    console.error("Failed to create new file");
    return;
  }

  const newNote: NoteInfo = {
    title,
    lastEditedTime: Date.now(),
  };

  set(noteStore, [
    newNote,
    ...notes.filter((note: NoteInfo): boolean => {
      return note.title !== newNote.title;
    }),
  ]);

  set(selectedNoteIndexStore, notes.length);
  location.reload();
});
