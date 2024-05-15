import { writeTextFile, BaseDirectory } from "@tauri-apps/api/fs";

export const WriteFile = async (filename: string, content: string) => {
  const writeFileContent = await writeTextFile(`dir/${filename}.md`, content, {
    dir: BaseDirectory.Resource,
  });

  return writeFileContent;
};
