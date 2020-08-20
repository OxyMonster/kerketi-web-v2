import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillBallanceCardComponent } from './fill-ballance-card/fill-ballance-card.component';
import { FillBallanceCategoriesComponent } from './fill-ballance-categories/fill-ballance-categories.component';
import { FillBallanceTbcComponent } from './fill-ballance-card/fill-ballance-tbc/fill-ballance-tbc.component';
import { FillBallancePaygeComponent } from './fill-ballance-card/fill-ballance-payge/fill-ballance-payge.component';
import { FillBallanceComponent } from './fill-ballance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [
  FillBallanceCardComponent, 
  FillBallanceCategoriesComponent, 
  FillBallanceTbcComponent, 
  FillBallancePaygeComponent,
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
