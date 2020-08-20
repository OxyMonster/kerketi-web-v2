import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from "./payments.component";
import { PaymentsService } from "src/app/services/payments.service";
import { PaymentsTemplatesComponent } from './payments-categories/payments-templates/payments-templates.component';
import { PaymentsCategoriesComponent } from './payments-categories/payments-categories.component';
import { RouterModule } from '@angular/router';
import { PaymentsTemplatesModalComponent } from './payments-categories/payments-templates/payments-templates-modal/payments-templates-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentsBillersComponent } from './payments-billers/payments-billers.component';
import { PaymentBillersChildComponent } from './payments-billers/payment-billers-main/payment-billers-child/payment-billers-child.component';
import { PaymentBillersMainComponent } from './payments-billers/payment-billers-main/payment-billers-main.component';
import { PaymentsMobileModalComponent } from './payments-categories/payments-mobile-modal/payments-mobile-modal.component';

const COMPONENTS = [
  PaymentsComponent,
  PaymentsTemplatesComponent,
  PaymentsCategoriesComponent,
  PaymentsTemplatesModalComponent,
  PaymentsBillersComponent, 
  PaymentBillersChildComponent,
  PaymentBillersMainComponent
]

@NgModule({
  declarations: [ COMPONENTS, PaymentsMobileModalComponent ],
  imports: [ 
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PaymentsService
  ]
})
export class PaymentsModule { }
