import { NoteInfo } from "@shared/model/models";
import { readDirectory } from "@entities/ReadDir";
import { atom } from "jotai";
import { unwrap } from "jotai/utils";
import { readFile } from "@entities/ReadFile";
import { WriteFile } from "@entities/WriteFile";

const getNotes = async () => {
  const notes = await readDirectory();

  return notes;
};

const notesStoreAsync = atom<NoteInfo[] | Promise<NoteInfo[]>>(getNotes());

export const noteStore = unwrap(notesStoreAsync, (prev) => prev);

export const selectedNoteIndexStore = atom<number | null>(null);

const selectedNoteStoreAsync = atom(async (get) => {
  const notes = get(noteStore);
  const selectedNoteIndex = get(selectedNoteIndexStore);

  if (selectedNoteIndex === null || !notes) return null;

  const selectedNote = notes[selectedNoteIndex];

  const noteContent = await readFile(
    selectedNote.title.substring(0, selectedNote.title.indexOf("."))
  );

  return { ...selectedNote, content: noteContent };
});

export const selectedNoteStore = unwrap(
  selectedNoteStoreAsync,
  (prev) => prev ?? { title: "", content: "", lastEditedTime: Date.now() }
);

export const saveNoteStore = atom(
  null,
  async (get, set, newContent: string) => {
    const notes = get(noteStore);
    const selectedNote = get(selectedNoteStore);

    if (!selectedNote || !notes) return;

    await WriteFile(
      selectedNote.title.substring(0, selectedNote.title.indexOf(".")),
      newContent
    );

    set(
      noteStore,
      notes.map((note) => {
        if (note.title === selectedNote.title) {
          return {
            ...note,
            lastEditedTime: Date.now(),
          };
        }
        return note;
      })
    );
  }
);
