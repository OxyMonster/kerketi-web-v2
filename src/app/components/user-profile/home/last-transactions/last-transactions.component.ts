import { Component, OnInit } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-transactions',
  templateUrl: './last-transactions.component.html',
  styleUrls: ['./last-transactions.component.scss']
})
export class LastTransactionsComponent implements OnInit {

  
  allTransactionsHistory: any[] = [];
  lastTransactions: any[] = []; 

  constructor(
    private _utileService: UtileService,
    private _transactionsService: TransactionsService,
    private _router: Router

  ) { }

  ngOnInit(): void {
    this.getTransactionsHistory(); 
  }

  routeToTransactions() {
    this._router.navigate(['/user-profile/transactions']);
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
                    
                    let i: number; 
                    for ( i = 0; i <= 10; i++) { 

                          this.lastTransactions.push(this.allTransactionsHistory[i]); 
                          
                      }  

                    console.log(this.lastTransactions);

  
                  } else {

                    // location.reload(); 
                    // console.log("Error");  
                    
                  }
                  
                }, err => {

                  console.log(err);
                  
                });
  };

}
