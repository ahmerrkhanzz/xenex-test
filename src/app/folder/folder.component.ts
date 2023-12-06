import {
  Component,
  Input,
} from '@angular/core';
import { FileSystem } from '../interfaces/FileSystems';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.scss',
})
export class FolderComponent {
  @Input() expandedFolder: any;
  @Input() name: string = '';
  @Input() isExpanded: boolean = false;
  @Input() rootFolder: FileSystem[] = [];

  public isEditMode: boolean = false;
  public folderName: string = '';
  public showDuplicateError: boolean = false

  toggleHandler(id: number) {
    const x = this.rootFolder.findIndex((x: FileSystem) => x.uid === id);
    this.rootFolder[x].isExpanded = !this.rootFolder[x].isExpanded;
  }


  save(folderName: string, id: number) {
    this.showDuplicateError = false;
    if (!folderName) return;

    const x = this.rootFolder.findIndex((x: FileSystem) => x.uid === id);
    const duplicate = this.rootFolder[x].folders.filter((e: any) => e.name === folderName);
    if(duplicate.length){
      this.showDuplicateError = true;
      return;
    }


    this.rootFolder[x].folders.push({
      uid: Date.now(),
      name: folderName,
      isExpanded: false,
      files: [],
      folders: [],
    });
    this.isEditMode = !this.isEditMode;
  }

  cancel(event: any) {
    this.isEditMode = false;
  }
}


