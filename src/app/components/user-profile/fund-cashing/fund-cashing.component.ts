import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fund-cashing',
  templateUrl: './fund-cashing.component.html',
  styleUrls: ['./fund-cashing.component.scss']
})
export class FundCashingComponent implements OnInit {

  selectedCategory: {} = {
    'name': 'name',
    'img': 'img'
  };
  isSelected: boolean = false; 

  constructor(
    private _modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openBankTransfer(bankTransferModal) {

    this._modalService.open(bankTransferModal, { size: 'lg' });
  };


  onCategorySelect(type: string) {

    this.isSelected = true; 

    switch (type) {
      case 'crystal' :
          console.log(type); 
          this.selectedCategory['name'] = 'კრისტალის ფილიალებში გადაღდება'; 
          this.selectedCategory['img'] = 'assets/img/crystal.png'; 
                 
        break;
      case 'intel-express' :
        this.selectedCategory['name'] = 'ინტელ-ექსპრესის ფილიალებში გადაღდება'; 
        this.selectedCategory['img'] = 'assets/img/intel_express.png';          
        break;
      case 'liberty' :
        this.selectedCategory['name'] = 'Liberty ბანკის ბანკომატიდან განაღდება ელექტრონული პირადობის მოწმობით'; 
        this.selectedCategory['img'] = 'assets/img/liberty_logo.png';        
        break;
  
    }
  }

}
