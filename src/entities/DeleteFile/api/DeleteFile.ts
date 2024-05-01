import { removeFile, BaseDirectory } from "@tauri-apps/api/fs";

export const DeleteFile = async (filename: string) => {
  await removeFile(`dir/${filename}.md`, { dir: BaseDirectory.Resource });
};
