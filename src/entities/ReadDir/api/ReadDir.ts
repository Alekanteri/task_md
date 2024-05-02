import { invoke } from "@tauri-apps/api/tauri";
import { BaseDirectory, readDir } from "@tauri-apps/api/fs";
import {
  FileEntryArray,
  GetLastEdditedTimeProps,
  NoteInfoArray,
  ReadDirectoryProps,
} from "../model/ReadDir";

const getLastEdditedTime: GetLastEdditedTimeProps = async (item) => {
  const fileTime: number = await invoke("modified_time", {
    filePath: item.path,
  });

  return fileTime;
};

export const readDirectory: ReadDirectoryProps = async () => {
  const array: NoteInfoArray = [];
  try {
    const files: FileEntryArray = await readDir("dir", {
      dir: BaseDirectory.Resource,
      recursive: true,
    });

    const noteInfos: NoteInfoArray = await Promise.all(
      files.map(async (item) => {
        const time = await getLastEdditedTime(item);
        return { title: item.name!, lastEditedTime: time };
      }),
    );

    array.push(...noteInfos);
  } catch (err) {
    console.log(err);
  }
  return array;
};
