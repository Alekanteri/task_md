import { renameFile, BaseDirectory } from "@tauri-apps/api/fs";

export const RenameFile = async (curFilename: string, newFilename: string) => {
  await renameFile(`dir/${curFilename}.md`, `dir/${newFilename}.md`, {
    dir: BaseDirectory.Resource,
  });
};
