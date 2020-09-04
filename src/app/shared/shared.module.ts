import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { EnvironmentUrlService } from "./services/environment-url.service";
import { BurgerComponent } from './components/burger/burger.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { UserProfNavigationComponent } from './components/user-profile/user-prof-navigation/user-prof-navigation.component';
import { UserProfHeaderComponent } from './components/user-profile/user-prof-header/user-prof-header.component';
import { ModalHeaderComponent } from './components/modal-header/modal-header.component';
import { TransactionProcessingComponent } from './components/transaction-processing/transaction-processing.component';
import { TransactionFailComponent } from './components/transaction-fail/transaction-fail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TransferBankPayFormComponent } from 'src/app/shared/components/user-profile/modals/transfer-bank-pay-form/transfer-bank-pay-form.component';
import { TransferToBankComponent } from 'src/app/shared/components/user-profile/modals/transfer-to-bank/transfer-to-bank.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IconsFontawsBillersComponent } from './components/icons-fontaws-billers/icons-fontaws-billers.component';
import { PaymentsBillersModalComponent } from './components/user-profile/modals/payments-billers-modal/payments-billers-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { UserInfoBallanceLogoutComponent } from './components/user-profile/user-prof-header/user-info-ballance-logout/user-info-ballance-logout.component';

const COMPONENTS = [
  PageNotFoundComponent, 
  LoadingSpinnerComponent,
  BurgerComponent,
  UserProfNavigationComponent, 
  UserProfHeaderComponent,
  ModalHeaderComponent,
  TransactionProcessingComponent, 
  TransactionFailComponent,
  TransferBankPayFormComponent,
  TransferToBankComponent,
  IconsFontawsBillersComponent, 
  PaymentsBillersModalComponent,
  UserInfoBallanceLogoutComponent
] 


@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    TranslateModule
  ], 
  providers: [
    EnvironmentUrlService
  ], 
  exports: [
    COMPONENTS,
    FontAwesomeModule,
    TranslateModule
  ]
})
export class SharedModule { }
