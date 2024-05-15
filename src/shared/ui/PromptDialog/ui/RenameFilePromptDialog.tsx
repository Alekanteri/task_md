import { RenameFile } from "@entities/RenameFile";
import { ValueProvider } from "@shared/ui/NoteList/ui/NoteListItem";
import { FC, useContext } from "react";

type RemoveFileProps = {
  curname: string;
  func: () => void;
};

export const RenameFilePromptDialog: FC<RemoveFileProps> = ({
  curname,
  func,
}) => {
  const data = useContext(ValueProvider);

  const handleSub = (e: any) => {
    e.preventDefault();
    const { value } = e.target.elements;
    RenameFile(curname, value.value);
    location.reload();
  };

  const handleClose = (e: any) => {
    if (e.key == "Escape") {
      func();
    }
  };

  return data == true ? (
    <form
      onSubmit={handleSub}
      className={`fixed top-10 left-2 px-2 py-4 bg-zinc-600 rounded-lg flex gap-2`}
    >
      <input
        className="bg-transparent max-w-36"
        id="value"
        type="text"
        onKeyDown={handleClose}
        placeholder="Input new file name:"
      />
      <button type="submit">Rename</button>
    </form>
  ) : (
    ""
  );
};
