import { NoteListBody } from "@shared/ui/NoteList";
import { Layout } from "@widgets/Layout";
import { Main } from "@widgets/Main";
import { Sidebar } from "@widgets/Sidebar";
import { FC } from "react";

export const Body: FC = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Sidebar>
          <NoteListBody />
        </Sidebar>
        <Main>Hello Main</Main>
      </Layout>
    </>
  );
};
