import { NgModule } from "@angular/core";
import {
    MatFormFieldModule, MatInputModule, MatButtonModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatDialogModule, MatSidenavModule, MatSortModule, MatTableModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule
} from '@angular/material';
@NgModule({
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule, MatDatepickerModule, MatSortModule, MatTableModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatTabsModule, MatProgressSpinnerModule, MatSelectModule, MatCardModule,
        MatIconModule, MatListModule],
    exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule, MatDatepickerModule, MatTableModule, MatSortModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatProgressSpinnerModule, MatToolbarModule, MatTabsModule, MatSelectModule, MatCardModule, MatIconModule, MatListModule]
})
export class MaterialModule { }