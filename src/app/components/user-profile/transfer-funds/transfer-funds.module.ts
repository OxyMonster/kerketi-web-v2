import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferFundsComponent } from './transfer-funds.component';
import { TransferFundsService } from "src/app/services/transfer-funds.service";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { PayBillNewComponent } from './pay-bill/pay-bill-new/pay-bill-new.component';
import { PayBillNewChildComponent } from './pay-bill/pay-bill-new/pay-bill-new-child/pay-bill-new-child.component';
import { PayBillTemplatesComponent } from './pay-bill/pay-bill-templates/pay-bill-templates.component';
import { PayBillConfirmModalComponent } from './pay-bill/pay-bill-templates/pay-bill-confirm-modal/pay-bill-confirm-modal.component';
import { PayBillAddNewTemplateComponent } from "./pay-bill/pay-bill-new/pay-bill-new-child/pay-bill-add-new-template/pay-bill-add-new-template.component";
import { FillBallanceBankCardComponent } from './fill-ballance-bank-card/fill-ballance-bank-card.component';
import { TransferToBankComponent } from './transfer-to-bank/transfer-to-bank.component';
import { FillMobileBallanceComponent } from './fill-mobile-ballance/fill-mobile-ballance.component';
import { P2pComponent } from './p2p/p2p.component';
import { P2pOtpConfirmModalComponent } from './p2p/p2p-otp-confirm-modal/p2p-otp-confirm-modal.component';
import { P2pAddNewTemplateComponent } from './p2p/p2p-add-new-template/p2p-add-new-template.component';
import { TransferBankOtpModalComponent } from './transfer-to-bank/transfer-bank-otp-modal/transfer-bank-otp-modal.component';
import { AddMobileToTemplatesComponent } from './fill-mobile-ballance/add-mobile-to-templates/add-mobile-to-templates.component';
import { FillMobileConfirmModalComponent } from './fill-mobile-ballance/fill-mobile-confirm-modal/fill-mobile-confirm-modal.component';
import { RegisteredCardTemplatesComponent } from './fill-ballance-bank-card/bank-card-from/registered-card-templates/registered-card-templates.component';
import { RegisterNewCardComponent } from './fill-ballance-bank-card/bank-card-from/register-new-card/register-new-card.component';
import { BankCardFromComponent } from './fill-ballance-bank-card/bank-card-from/bank-card-from.component';
  
const COMPONENTS = [
  TransferFundsComponent, 
  PayBillComponent, 
  PayBillNewComponent, 
  PayBillNewChildComponent, 
  PayBillTemplatesComponent,
  PayBillAddNewTemplateComponent,
  PayBillConfirmModalComponent, 
  FillBallanceBankCardComponent,
  TransferToBankComponent, 
  FillMobileBallanceComponent,
  P2pComponent, 
  P2pOtpConfirmModalComponent,
  P2pAddNewTemplateComponent,
  TransferBankOtpModalComponent, 
  AddMobileToTemplatesComponent,
  FillMobileConfirmModalComponent
]


@NgModule({
  declarations: [ COMPONENTS, RegisteredCardTemplatesComponent, RegisterNewCardComponent, BankCardFromComponent  ],
  imports: [
    CommonModule,  
    ReactiveFormsModule,
    FormsModule,
    SharedModule, 
    RouterModule  
  ],
  providers: [
    TransferFundsService
  ], 
  exports: [ COMPONENTS ]
})
export class TransferFundsModule { }
