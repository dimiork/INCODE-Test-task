import { NgModule } from '@angular/core';
import { 
	MatButtonModule, 
	MatCheckboxModule, 
	MatSidenavModule,
	MatGridListModule,
	MatToolbarModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
  	MatButtonModule, 
  	MatCheckboxModule, 
  	MatSidenavModule,
  	MatGridListModule,
  	MatToolbarModule,
  	MatIconModule,
  	MatInputModule,
  	MatListModule,
  	MatCardModule
  ],
  exports: [
  	MatButtonModule, 
  	MatCheckboxModule, 
  	MatSidenavModule,
  	MatGridListModule,
  	MatToolbarModule,
  	MatIconModule,
  	MatInputModule,
  	MatListModule,
  	MatCardModule
  ],
})
export class MaterialModule { }
