import { FileEntry } from "@tauri-apps/api/fs";
import { NoteInfo } from "@shared/model/models";

export type NoteInfoArray = Array<NoteInfo>;

export type FileEntryArray = Array<FileEntry>;

export type GetLastEdditedTimeProps = (item: FileEntry) => Promise<number>;

export type ReadDirectoryProps = () => Promise<NoteInfoArray>;
