import { Markdown } from "@entities/Markdown";
import { NoteListBody } from "@shared/ui/NoteList";
import { Title } from "@shared/ui/Title";
import { Layout } from "@widgets/Layout";
import { Main } from "@widgets/Main";
import { Sidebar } from "@widgets/Sidebar";
import { FC, useRef } from "react";

export const Body: FC = (): JSX.Element => {
  const bodyRef = useRef<HTMLDivElement>(null);

  const handleResetScroll = () => {
    bodyRef.current?.scrollTo(0, 0);
  };

  return (
    <>
      <Layout>
        <Sidebar>
          <NoteListBody onSelect={handleResetScroll} />
        </Sidebar>
        <Main ref={bodyRef}>
          <Title />
          <Markdown />
        </Main>
      </Layout>
    </>
  );
};
