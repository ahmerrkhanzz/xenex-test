export interface FileSystem {
  uid: number;
  name: string;
  folders: FileSystem[];
  files?: File[];
  isExpanded: boolean;
}

export interface File {
  uid: number;
  name: string;
  isExpanded: boolean;
}
