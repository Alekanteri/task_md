import { FC } from "react";
import { NoteListItemProps } from "../model/NoteListItem";
import { formateDate } from "@shared/api/dateFormatter";

export const NoteListItem: FC<NoteListItemProps> = ({
  title,
  lastEditedTime,
  content,
  isActive = false,
  ...props
}): JSX.Element => {
  const date = formateDate(lastEditedTime);
  return (
    <div
      {...props}
      className={`cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75 ${
        isActive ? "bg-zinc-400/75" : "hover:bg-zinc-500/75"
      }`}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">
        {date}
      </span>
    </div>
  );
};
