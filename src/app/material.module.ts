import { NgModule } from "@angular/core";
import {
    MatFormFieldModule, MatInputModule, MatButtonModule,
    MatDatepickerModule,MatPaginatorModule, MatNativeDateModule, MatCheckboxModule, MatDialogModule, MatSidenavModule, MatSortModule, MatTableModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule
} from '@angular/material';
@NgModule({
    imports: [MatFormFieldModule, MatInputModule,MatPaginatorModule, MatButtonModule, MatDialogModule, MatDatepickerModule, MatSortModule, MatTableModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatTabsModule, MatProgressSpinnerModule, MatSelectModule, MatCardModule,
        MatIconModule, MatListModule],
    exports: [MatFormFieldModule, MatInputModule, MatButtonModule,MatPaginatorModule, MatDialogModule, MatDatepickerModule, MatTableModule, MatSortModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatProgressSpinnerModule, MatToolbarModule, MatTabsModule, MatSelectModule, MatCardModule, MatIconModule, MatListModule]
})
export class MaterialModule { }