import { FC } from "react";

export const DragRegion: FC = (): JSX.Element => {
  return (
    <>
      <div className="top-0 h-8 w-full fixed" data-tauri-drag-region />
    </>
  );
};
