import { Markdown } from "@entities/Markdown";
import { NoteListBody } from "@shared/ui/NoteList";
import { Title } from "@shared/ui/Title";
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
        <Main>
          <Title title="hello world" />
          <Markdown />
        </Main>
      </Layout>
    </>
  );
};
