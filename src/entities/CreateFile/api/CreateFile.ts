import { writeTextFile, BaseDirectory } from "@tauri-apps/api/fs";

export const CreateFile = async (filename: string) => {
  await writeTextFile(`dir/${filename}.md`, "", {
    dir: BaseDirectory.Resource,
  });
};
