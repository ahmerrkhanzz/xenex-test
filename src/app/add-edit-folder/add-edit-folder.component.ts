import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-edit-folder',
  templateUrl: './add-edit-folder.component.html',
  styleUrl: './add-edit-folder.component.scss',
})
export class AddEditFolderComponent {
  @Input() uid?: number;
  @Output() name = new EventEmitter<string>();
  @Output() reset = new EventEmitter<boolean>();

  public folderName: string = '';

  save() {
    this.name.emit(this.folderName);
    this.folderName = ''
  }

  cancel() {
    this.reset.emit(false);
  }
}
