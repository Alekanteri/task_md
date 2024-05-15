import { MarkdownContentRender } from "@feautures/MarkdownContentRender";
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin,
  linkPlugin,
  linkDialogPlugin,
  tablePlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  BlockTypeSelect,
  codeBlockPlugin,
  codeMirrorPlugin,
  sandpackPlugin,
  ConditionalContents,
  ChangeCodeMirrorLanguage,
  InsertCodeBlock,
  InsertSandpack,
  ShowSandpackInfo,
  SandpackConfig,
  InsertTable,
  AdmonitionDirectiveDescriptor,
  directivesPlugin,
  InsertAdmonition,
  InsertThematicBreak,
  ListsToggle,
  CreateLink,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { FC } from "react";

const defaultSnippetContent = `
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
`.trim();

const simpleSandpackConfig: SandpackConfig = {
  defaultPreset: "react",
  presets: [
    {
      label: "React",
      name: "react",
      meta: "live react",
      sandpackTemplate: "react",
      sandpackTheme: "light",
      snippetFileName: "/App.js",
      snippetLanguage: "jsx",
      initialSnippetContent: defaultSnippetContent,
    },
  ],
};

export const Markdown: FC = (): JSX.Element | null => {
  const { markDownRef, handleAutoSave, selectedNote } = MarkdownContentRender();

  if (!selectedNote) return null;

  return (
    <MDXEditor
      ref={markDownRef}
      key={selectedNote.title.substring(0, selectedNote.title.indexOf("."))}
      markdown={selectedNote.content}
      onChange={handleAutoSave}
      plugins={[
        headingsPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
        codeMirrorPlugin({
          codeBlockLanguages: {
            js: "JavaScript",
            css: "CSS",
            txt: "Text",
            ts: "TypeScript",
          },
        }),
        linkPlugin(),
        linkDialogPlugin(),
        tablePlugin(),
        directivesPlugin({
          directiveDescriptors: [AdmonitionDirectiveDescriptor],
        }),
        toolbarPlugin({
          toolbarContents: () => (
            <div className="flex justify-between w-full">
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <ListsToggle />
              <div>
                <InsertThematicBreak />
                <CreateLink />
                <InsertTable />
              </div>
              <BlockTypeSelect />
              <InsertAdmonition />
              <ConditionalContents
                options={[
                  {
                    when: (editor) => editor?.editorType === "codeblock",
                    contents: () => <ChangeCodeMirrorLanguage />,
                  },
                  {
                    when: (editor) => editor?.editorType === "sandpack",
                    contents: () => <ShowSandpackInfo />,
                  },
                  {
                    fallback: () => (
                      <>
                        <InsertCodeBlock />
                        <InsertSandpack />
                      </>
                    ),
                  },
                ]}
              />
            </div>
          ),
        }),
      ]}
      contentEditableClassName="prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500
prose-code:before:content-[''] prose-code:after: content-[''] outline-none min-h-full max-w-none text-lg px-8 py-5 caret-yelow-500"
    />
  );
};
