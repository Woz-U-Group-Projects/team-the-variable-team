import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpPostJobComponent } from './emp-post-job.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//TextEditor Imports
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { EmpJobPostsService } from '../../services/empjobposts.service';
@NgModule({
  declarations: [EmpPostJobComponent],
  imports: [
    CommonModule, 
    NgbModule.forRoot(), 
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  exports: [EmpPostJobComponent],
  bootstrap: [EmpPostJobComponent],
  entryComponents: [
    EmpPostJobComponent
  ],
  // Needed to add the provider so that I can access the service within this module
  providers: [EmpJobPostsService]
})
export class EmpPostJobModule { }
