import { FC, createContext, useState } from "react";
import { NoteListItemProps } from "../model/NoteListItem";
import { formateDate } from "@shared/api/dateFormatter";
import { DeleteNoteButton } from "@shared/ui/Buttons";
import { RenameNoteButton } from "@shared/ui/Buttons/RenameNoteButton";
import { RenameFilePromptDialog } from "@shared/ui/PromptDialog";

export const ValueProvider = createContext(false);

export const NoteListItem: FC<NoteListItemProps> = ({
  title,
  content,
  lastEditedTime,
  isActive = false,
  ...props
}): JSX.Element => {
  const date = formateDate(lastEditedTime);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(false);

  const handleSetDataTrue = () => {
    setData(true);
  };

  const handleSetDataFalse = () => {
    setData(false);
  };

  return (
    <div
      {...props}
      className={`relative cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75 ${
        isActive ? "bg-zinc-400/75" : "hover:bg-zinc-500/75"
      }`}
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">
        {date}
      </span>
      <ValueProvider.Provider value={data}>
        <div
          className={`${
            show ? "flex" : "hidden"
          } absolute top-1 right-2 flex flex-col justify-around h-[90%]`}
        >
          <DeleteNoteButton filename={title} />
          <RenameNoteButton func={handleSetDataTrue} />
        </div>
        <RenameFilePromptDialog curname={title} func={handleSetDataFalse} />
      </ValueProvider.Provider>
    </div>
  );
};
