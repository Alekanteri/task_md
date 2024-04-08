import { Body } from "@pages/Body";
import React from "react";

export const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <div className="top-0 h-8 w-40" data-tauri-drag-region />
      <Body />
    </div>
  );
};
