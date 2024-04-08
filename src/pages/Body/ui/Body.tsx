import { Layout } from "@widgets/Layout";
import { Main } from "@widgets/Main";
import { Sidebar } from "@widgets/Sidebar";
import { FC } from "react";

export const Body: FC = (): JSX.Element => {
  return (
    <div>
      <Layout>
        <Sidebar>Hello sidebar</Sidebar>
        <Main>Hello Main</Main>
      </Layout>
    </div>
  );
};
