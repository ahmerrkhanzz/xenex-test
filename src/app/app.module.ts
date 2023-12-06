import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FolderComponent } from './folder/folder.component';
import { FileComponent } from './file/file.component';
import { FormsModule } from '@angular/forms';
import { AddEditFolderComponent } from './add-edit-folder/add-edit-folder.component';

@NgModule({
  declarations: [
    AppComponent,
    FolderComponent,
    FileComponent,
    AddEditFolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
