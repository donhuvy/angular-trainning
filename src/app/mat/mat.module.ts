import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule,MatTabsModule,MatIconModule,MatCardModule,MatChipsModule,MatSidenavModule,
  MatInputModule,MatCheckboxModule,MatFormFieldModule,MatListModule,MatRadioModule,MatBadgeModule,MatSelectModule

} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule
    
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
    MatSelectModule
  ]
})
export class MatModule { }
