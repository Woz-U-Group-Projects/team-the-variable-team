import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpPostJobComponent } from './emp-post-job.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//TextEditor Imports
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
@NgModule({
  declarations: [EmpPostJobComponent],
  imports: [CommonModule, NgbModule.forRoot(), FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()],
  exports: [EmpPostJobComponent],
  bootstrap: [EmpPostJobComponent],
  entryComponents: [
    EmpPostJobComponent
  ]
})
export class EmpPostJobModule { }
