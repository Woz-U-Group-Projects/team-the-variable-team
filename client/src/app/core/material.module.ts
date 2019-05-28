import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { SafeHtmlPipe } from './safehtml.pipe';
import { AppDatePipe } from './date.pipe';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule
    ],
    exports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        SafeHtmlPipe,
        AppDatePipe
    ],
    declarations: [
        SafeHtmlPipe,
        AppDatePipe
    ]
})
export class CustomMaterialModule { }
