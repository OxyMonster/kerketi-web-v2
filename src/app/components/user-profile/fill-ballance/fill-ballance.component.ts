import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-ballance',
  templateUrl: './fill-ballance.component.html',
  styleUrls: ['./fill-ballance.component.scss']
})
export class FillBallanceComponent implements OnInit {

 
  selectedCategory: {} = {
    'name': 'name',
    'img': 'img'
  };
  isSelected: boolean = false; 

  constructor(
  
  ) { }

  ngOnInit(): void {
  }


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
