import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferFundsComponent } from './transfer-funds.component';
import { TransferFundsService } from "src/app/services/transfer-funds.service";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { P2pTemplatesComponent } from "./p2p-templates/p2p-templates.component";
import { P2pTransferNewComponent } from "./p2p-transfer-new/p2p-transfer-new.component";
import { P2pTemplatesModalComponent } from "./p2p-templates/p2p-templates-modal/p2p-templates-modal.component";

const COMPONENTS = [
  TransferFundsComponent, 
  P2pTemplatesComponent,
  P2pTransferNewComponent,
  P2pTemplatesModalComponent
]


@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    CommonModule,  
    ReactiveFormsModule,
    SharedModule, 
    RouterModule
  ],
  providers: [
    TransferFundsService
  ], 
  exports: [ COMPONENTS ]
})
export class TransferFundsModule { }
