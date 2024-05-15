import { Body } from "@pages/Body";
import { DragRegion } from "@shared/ui/DragRegion";
import React from "react";

export const App: React.FC = (): JSX.Element => {
  return (
    <>
      <DragRegion />
      <Body />
    </>
  );
};
