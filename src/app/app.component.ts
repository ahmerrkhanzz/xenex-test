import { Component } from '@angular/core';
import { FileSystem } from './interfaces/FileSystems';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'xenex-media-ahmer-test';
  public folderName: string = '';
  public showDuplicateError: boolean = false;

  public root: FileSystem[] = [
    {
      uid: Date.now(),
      name: 'Animal GIFs',
      isExpanded: false,
      folders: [
        {
          isExpanded: false,
          uid: Date.now(),
          name: 'Photos',
          folders: [],
          files: [
            {
              isExpanded: false,
              uid: Date.now(),
              name: 'IMG-839.jpg',
            },
            {
              isExpanded: false,
              uid: Date.now(),
              name: 'IMG-937A.jpg',
            },
          ],
        },
      ],
      files: [
        { uid: Date.now(), name: 'cat-roomba.gif', isExpanded: false },
        { uid: Date.now(), name: 'duck-shuffle.gif', isExpanded: false },
        { uid: Date.now(), name: 'monkey-on-a-pig.gif', isExpanded: false },
      ],
    },
  ];

  cancel(event: any) {
    this.showDuplicateError = false;
  }

  addFolderHandler(name: any) {
    this.showDuplicateError = false;
    if (!name) return;

    const duplicate = this.root.filter((e: any) => e.name === name);
    if (duplicate.length) {
      this.showDuplicateError = true;
      return;
    }
    this.root.unshift({
      uid: Date.now(),
      name: name,
      isExpanded: false,
      files: [],
      folders: [],
    });
  }
}
