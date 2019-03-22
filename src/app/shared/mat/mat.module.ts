import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule,MatTabsModule,MatIconModule,MatCardModule,MatChipsModule,MatSidenavModule,
  MatInputModule,MatCheckboxModule,MatFormFieldModule,MatListModule,MatRadioModule,MatBadgeModule,MatSelectModule,
  MatProgressSpinnerModule

} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatSidenavModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatListModule,
    MatRadioModule,
    MatBadgeModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ]
})
export class MatModule { }
