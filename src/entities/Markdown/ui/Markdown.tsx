import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin,
} from "@mdxeditor/editor";
import { FC } from "react";

export const Markdown: FC = (): JSX.Element => {
  return (
    <MDXEditor
      markdown="# Hello world"
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
      ]}
      contentEditableClassName="prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500
prose-code:before:content-[''] prose-code:after: content-[''] outline-none min-h-full max-w-none text-lg px-8 py-5 caret-yelow-500"
    />
  );
};
