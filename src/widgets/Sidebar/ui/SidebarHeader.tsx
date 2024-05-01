import { FC, createContext, useState } from "react";
import { SidebarHeaderProps } from "../model/Header";
import { NewNoteButton } from "@shared/ui/Buttons";
import { NewFilenamePromptDialog } from "@shared/ui/PromptDialog/ui/NewFilenamePromptDialog";

export const ValueProvider = createContext(false);

export const SidebarHeader: FC<SidebarHeaderProps> = (): JSX.Element => {
  const [data, setData] = useState(false);

  const handleSetDataTrue = () => {
    setData(true);
  };

  const handleSetDataFalse = () => {
    setData(false);
  };

  return (
    <header className="flex items-center justify-center mx-4 my-2">
      <ValueProvider.Provider value={data}>
        <NewNoteButton func={handleSetDataTrue} />
        <NewFilenamePromptDialog func={handleSetDataFalse} />
      </ValueProvider.Provider>
    </header>
  );
};
