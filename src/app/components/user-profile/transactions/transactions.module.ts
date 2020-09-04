import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component'; 
import { TransactionsService } from "../../../services/transactions.service";
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [
  TransactionsComponent
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule
  ], 
  providers: [
    TransactionsService
  ]
})
export class TransactionsModule { }
