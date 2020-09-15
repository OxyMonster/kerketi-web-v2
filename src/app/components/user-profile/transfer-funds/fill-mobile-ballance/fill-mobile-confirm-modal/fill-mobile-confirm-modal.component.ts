import { Component, OnInit, Input } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';
import { TransferFundsService } from 'src/app/services/transfer-funds.service';
import { PaymentsService } from 'src/app/services/payments.service';
 
@Component({
  selector: 'app-fill-mobile-confirm-modal',
  templateUrl: './fill-mobile-confirm-modal.component.html',
  styleUrls: ['./fill-mobile-confirm-modal.component.scss']
})
export class FillMobileConfirmModalComponent implements OnInit {

 
  @Input() selectedAbonent: any; 
  isLoading: boolean = false; 
  isPayed: boolean = false; 

  constructor(
    private _paymentsService: PaymentsService
  ) { }

  ngOnInit(): void {
      this.selectedAbonent
  }

  onSubmit() {
    this.isLoading = true;     

    return this._paymentsService
               .payBill(this.selectedAbonent)
               .subscribe( data => {
                 console.log(data);
                 this.isLoading = false;
                 data['isSuccess'] ? this.isPayed = true : this.isPayed = false;

               }, err => {
                  this.isLoading = false;   
                   console.log(err);
                 
               })

  }; 

}
