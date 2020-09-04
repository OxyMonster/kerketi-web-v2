import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from "./payments.component";
import { PaymentsService } from "src/app/services/payments.service";
import { PaymentsTemplatesComponent } from './payments-templates/payments-templates.component';
import { RouterModule } from '@angular/router';
import { PaymentsTemplatesModalComponent } from './payments-templates/payments-templates-modal/payments-templates-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentsBillersComponent } from './payments-billers/payments-billers.component';
import { PaymentBillersChildComponent } from './payments-billers/payment-billers-main/payment-billers-child/payment-billers-child.component';
import { PaymentBillersMainComponent } from './payments-billers/payment-billers-main/payment-billers-main.component';
import { PaymentsMobileModalComponent } from './payments-templates/payments-mobile-modal/payments-mobile-modal.component';
import { PaymentsMainComponent } from './payments-main/payments-main.component';

const COMPONENTS = [
  PaymentsComponent,
  PaymentsTemplatesComponent,
  PaymentsTemplatesModalComponent,
  PaymentsBillersComponent, 
  PaymentBillersChildComponent,
  PaymentBillersMainComponent,
  PaymentsMobileModalComponent, 
  PaymentsMainComponent
]

@NgModule({
  declarations: [ COMPONENTS,  ],
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
