import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCreditCard, faAngleDoubleRight, faPlus, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-bank-card-from',
  templateUrl: './bank-card-from.component.html',
  styleUrls: ['./bank-card-from.component.scss']
})
export class BankCardFromComponent implements OnInit {

  @Output() result: EventEmitter<string> = new EventEmitter<string>();
  @Output() setSelectedTemplate: EventEmitter<any> = new EventEmitter<any>();

  @Input() selectedBoxType: string;

  isTemplateSelected: boolean = false;

  // Icons 
  faCreditCard = faCreditCard; 
  faAngleDoubleRight = faAngleDoubleRight; 
  faPlus = faPlus;
  faCheckDouble = faCheckDouble;


  isRegisterNewActive = false;
  isDefaultMenu = true; 
  boxType = 'from'; 
  selectedPayment: string; 


  constructor() { }

  ngOnInit(): void {
  }

  getSelectedTemplate(event) {
   
    this.setSelectedTemplate.emit(event)
    this.boxType = 'description';
    this.selectedPayment = event['cardName'] ; 
    this.result.emit('description',);
  };

  onChange() {
    this.result.emit('from');
    this.boxType = 'from';
    this.isDefaultMenu = true;
    console.log(this.boxType);
    
  }; 

  onPayTypeSelect(type) {
    switch (type) {
      case 'new' :
        this.isRegisterNewActive= true  
        break;
        case 'default' :
          this.result.emit('description');
          this.setSelectedTemplate.emit('გადახდა ბარათის დამატების გარეშე');
          this.boxType = 'description';  
          this.selectedPayment = 'გადახდა ბარათის დამატების გარეშე';
          this.isRegisterNewActive= false  

        break;
        case 'template' :
          this.isRegisterNewActive= false;  
          this.isDefaultMenu = false;
        break;
      
    }
  }; 

  
  showDefaultMenu() {
    this.isDefaultMenu = true;
    this.isRegisterNewActive = false;
  }; 

  getResultFromRegisterNew(e) {
    this.isRegisterNewActive = e; 
    
  };

  isGoBackFromRegNew(e) { 

    if (e) {
        this.isRegisterNewActive = false;
        this.isDefaultMenu = true; 
    }; 

   
  };

}
