import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FillBallanceComponent } from './fill-ballance/fill-ballance.component';
import { FundCashingComponent } from './fund-cashing/fund-cashing.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { AuthGuard } from "src/app/shared/guard/auth.component";
import { UserProfileComponent } from './user-profile.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { PayBillComponent } from './transfer-funds/pay-bill/pay-bill.component';
import { PayBillNewComponent } from './transfer-funds/pay-bill/pay-bill-new/pay-bill-new.component';
import { PayBillNewChildComponent } from './transfer-funds/pay-bill/pay-bill-new/pay-bill-new-child/pay-bill-new-child.component';
import { PayBillTemplatesComponent } from './transfer-funds/pay-bill/pay-bill-templates/pay-bill-templates.component';
import { FillBallanceBankCardComponent } from './transfer-funds/fill-ballance-bank-card/fill-ballance-bank-card.component';
import { TransferToBankComponent } from './transfer-funds/transfer-to-bank/transfer-to-bank.component';
import { P2pComponent } from "./transfer-funds/p2p/p2p.component";
import { FillMobileBallanceComponent } from './transfer-funds/fill-mobile-ballance/fill-mobile-ballance.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { ContactSettingsComponent } from './user-settings/contact-settings/contact-settings.component';
import { PrivacySettingsComponent } from './user-settings/privacy-settings/privacy-settings.component';

const routes: Routes = [
  { path: '', canActivate: [ AuthGuard ], component: UserProfileComponent, children: [

    { path: '', redirectTo: 'home', pathMatch:'full' }, 
    { path: 'home', component: HomeComponent }, 

    { path: 'fill-ballance', component: FillBallanceComponent },
 
    { path: 'fund-cashing', component: FundCashingComponent,  }, 

    { path: 'transfer', component: TransferFundsComponent, children: [
      { path: 'p2p', component: P2pComponent },  
      { path: 'bank-transfer', component: TransferToBankComponent },  
      { path: 'pay-templates', component: PayBillTemplatesComponent },
      { path: 'fill-mobile', component: FillMobileBallanceComponent }, 
      { path: 'pay-bill', component: PayBillComponent, children: [
        { path: '', redirectTo: 'pay', pathMatch: 'full' },
        { path: 'pay', component: PayBillTemplatesComponent },
        { path: 'new', component: PayBillNewComponent },
        { path: ':id', component: PayBillNewChildComponent }
      ],
    }, 
      { path: 'to-account-bank-card', component: FillBallanceBankCardComponent }
    ]},

    { path: 'transactions', component: TransactionsComponent },
    { path: 'settings', component: UserSettingsComponent, children:[
      { path: '', redirectTo: 'contact', pathMatch: 'full' }, 
      { path: 'contact', component: ContactSettingsComponent },
      { path: 'privacy', component: PrivacySettingsComponent }   
    ]}
  ]},   
  


];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
