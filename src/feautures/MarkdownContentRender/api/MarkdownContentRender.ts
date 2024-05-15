import { selectedNoteStore } from "@feautures/NoteStore";
import { saveNoteStore } from "@feautures/NoteStore/api/NoteStore";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { useAtomValue, useSetAtom } from "jotai";
import { useRef } from "react";

export const MarkdownContentRender = () => {
  const selectedNote = useAtomValue(selectedNoteStore);
  const saveNote = useSetAtom(saveNoteStore);
  const markDownRef = useRef<MDXEditorMethods>(null);

  const handleAutoSave = async (content: string) => {
    if (!selectedNote) return;

    await saveNote(content);
  };

  return { markDownRef, handleAutoSave, selectedNote };
};
