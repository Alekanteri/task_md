import { readTextFile, BaseDirectory } from "@tauri-apps/api/fs";
import { ReadFileProps, ContentType } from "../model/ReadFile";

export const readFile: ReadFileProps = async (filename) => {
  const content: ContentType = await readTextFile(`dir/${filename}.md`, {
    dir: BaseDirectory.Resource,
  });

  return content;
};
