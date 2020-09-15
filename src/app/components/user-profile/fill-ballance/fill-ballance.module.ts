import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillBallanceComponent } from './fill-ballance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [
  FillBallanceComponent, 

]

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [  
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
   
  ]
})
export class FillBallanceModule { }
