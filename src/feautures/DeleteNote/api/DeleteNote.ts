import {
  noteStore,
  selectedNoteIndexStore,
  selectedNoteStore,
} from "@feautures/NoteStore";
import { NoteInfo } from "@shared/model/models";
import { atom } from "jotai";

export const DeleteNote = atom(null, (get, set) => {
  const notes = get(noteStore);
  const selectedNote = get(selectedNoteStore);

  if (!selectedNote) return;

  if (!notes) return null;

  set(
    noteStore,
    notes.filter((note: NoteInfo): boolean => {
      return note.title !== selectedNote.title;
    })
  );
  set(selectedNoteIndexStore, null);
});
