import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component'; 
import { TransactionsService } from "../../../services/transactions.service";
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterTransactionsComponent } from './filter-transactions/filter-transactions.component';

const COMPONENTS = [
  TransactionsComponent
]

@NgModule({
  declarations: [
    COMPONENTS,
    FilterTransactionsComponent
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
