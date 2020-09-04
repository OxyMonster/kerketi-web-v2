import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FillBallanceComponent } from './fill-ballance/fill-ballance.component';
import { FundCashingComponent } from './fund-cashing/fund-cashing.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { AuthGuard } from "src/app/shared/guard/auth.component";
import { UserProfileComponent } from './user-profile.component';
import { PaymentsComponent } from './payments/payments.component';
import { FillBallanceCardComponent } from './fill-ballance/fill-ballance-card/fill-ballance-card.component';
import { FillBallanceCategoriesComponent } from './fill-ballance/fill-ballance-categories/fill-ballance-categories.component';
import { PaymentsBillersComponent } from './payments/payments-billers/payments-billers.component';
import { PaymentBillersChildComponent } from './payments/payments-billers/payment-billers-main/payment-billers-child/payment-billers-child.component';
import { PaymentBillersMainComponent } from './payments/payments-billers/payment-billers-main/payment-billers-main.component';
import { PaymentsMainComponent } from './payments/payments-main/payments-main.component';
import { TransactionsComponent } from './transactions/transactions.component';
 

const routes: Routes = [
  { path: '', canActivate: [ AuthGuard ], component: UserProfileComponent, children: [

    { path: '', redirectTo: 'home', pathMatch:'full' }, 
    { path: 'home', component: HomeComponent }, 
    { path: 'fill-ballance', component: FillBallanceComponent, children: [
      { path: '', redirectTo: 'categories', pathMatch: 'full' },
      { path: 'categories', component: FillBallanceCategoriesComponent },
      { path: 'card', component: FillBallanceCardComponent }
    ]},
    { path: 'fund-cashing', component: FundCashingComponent,  }, 
    { path: 'transfer-funds', component: TransferFundsComponent, children: [

    ]},
    { path: 'payments', component: PaymentsComponent, children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' }, 
      { path: 'main', component: PaymentsMainComponent },
      { path: 'billers', component: PaymentsBillersComponent, children: [
        { path: '', redirectTo: 'main', pathMatch: 'full' },
        { path: 'main', component: PaymentBillersMainComponent },
        { path: ':id', component: PaymentBillersChildComponent }
      ]}

    ]}, 

    { path: 'transactions', component: TransactionsComponent }

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
