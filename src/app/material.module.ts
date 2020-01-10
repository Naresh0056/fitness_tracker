import { NgModule } from "@angular/core";
import {
    MatFormFieldModule, MatInputModule, MatButtonModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule
} from '@angular/material';
@NgModule({
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatTabsModule, MatSelectModule, MatCardModule,
        MatIconModule, MatListModule],
    exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatTabsModule, MatSelectModule, MatCardModule, MatIconModule, MatListModule]
})
export class MaterialModule { }