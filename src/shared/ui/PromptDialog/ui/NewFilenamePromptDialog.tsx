import { CreateFile } from "@entities/CreateFile";
import { CreateNote } from "@feautures/CreateNote";
import { ValueProvider } from "@widgets/Sidebar/ui/SidebarHeader";
import { useSetAtom } from "jotai";
import { useContext } from "react";

export const NewFilenamePromptDialog = ({ func }: any) => {
  const data = useContext(ValueProvider);
  const createNewNote = useSetAtom(CreateNote);

  const handleSub = (e: any) => {
    e.preventDefault();
    const { value } = e.target.elements;
    CreateFile(value.value);
    createNewNote();
  };

  const handleClose = (e: any) => {
    if (e.key == "Escape") {
      func();
    }
  };

  return data == true ? (
    <form
      onSubmit={handleSub}
      className={`fixed top-10 p-4 bg-zinc-600 rounded-lg`}
    >
      <input
        className="bg-transparent max-w-36"
        id="value"
        type="text"
        onKeyDown={handleClose}
        placeholder="Input the file name"
      />
      <button type="submit">Create</button>
    </form>
  ) : (
    ""
  );
};
