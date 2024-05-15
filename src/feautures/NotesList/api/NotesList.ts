import { noteStore, selectedNoteIndexStore } from "@feautures/NoteStore";
import { useAtom, useAtomValue } from "jotai/react";

export const NotesList = ({ onSelect }: { onSelect?: () => void }) => {
  const notes = useAtomValue(noteStore);

  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(
    selectedNoteIndexStore,
  );

  const handleNoteSelect = async (index: number) => {
    setSelectedNoteIndex(index);

    if (onSelect) {
      onSelect();
    }
  };

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect,
  };
};
