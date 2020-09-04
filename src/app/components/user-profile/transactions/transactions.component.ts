import { Component, OnInit } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  allTransactionsHistory: any[] = [];

  constructor(
    private _utileService: UtileService,
    private _transactionsService: TransactionsService

  ) { }

  ngOnInit(): void {
    this.getTransactionsHistory(); 
  }


  getTransactionsHistory( ) {    
    

     let getTransHistArg  = {
       "count": 1000,
       "dateFrom": '2020-01-27T12:11:51.587Z',
       "dateTo": '2020-08-27T12:11:51.587Z',
       "languageId": this._utileService.getUserLanguage(),
       "msisdn": this._utileService.getMsidn(),
       "sessionId": this._utileService.getSessionId(),
       "walletId": 1
     }; 
   
    return this._transactionsService
                .getTransactionsHistory(getTransHistArg)
                .subscribe( data => {
                  console.log(data);
                  
                  if (data['isSuccess']) {
                    this.allTransactionsHistory = data['data']['transaction']; 
                    console.log(this.allTransactionsHistory);
  
                  } else {

                    location.reload(); 
                    console.log("Error");
                    
                  }
                  
                }, err => {

                  console.log(err);
                  
                });
  };


}
