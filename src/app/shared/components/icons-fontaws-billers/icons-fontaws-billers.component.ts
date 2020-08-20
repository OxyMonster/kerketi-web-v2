import { Component, OnInit, Input } from '@angular/core';
import { faBolt, faHandHoldingWater ,faTrash, faBurn, faParking, faGavel, faHandHoldingHeart, faPray, 
  faPassport , faShippingFast, faBriefcase, faWifi, faTv, faMobile, faPhone, faHandHoldingMedical, faLaptopCode, 
  faHandHoldingUsd, faPiggyBank, faDice, faUniversity, faUsers,faSchool, faBaby , faPeace, faCoins, faDiceD20 } 
  from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icons-fontaws-billers',
  templateUrl: './icons-fontaws-billers.component.html',
  styleUrls: ['./icons-fontaws-billers.component.scss']
})
export class IconsFontawsBillersComponent implements OnInit {

  @Input() category: string; 
 
  faBolt = faBolt
  faHandHoldingWater = faHandHoldingWater; 
  faTrash = faTrash; 
  faBurn = faBurn; 
  faParking = faParking; 
  faGavel = faGavel; 
  faHandHoldingHeart = faHandHoldingHeart; 
  faPray = faPray; 
  faPeace = faPeace; 
  faUniversity = faUniversity; 
  faSchool = faSchool; 
  faBaby = faBaby; 
  faUsers = faUsers; 
  faDice = faDice; 
  faDiceD20 = faDiceD20; 
  faPiggyBank = faPiggyBank; 
  faHandHoldingUsd = faHandHoldingUsd; 
  faHandHoldingMedical = faHandHoldingMedical; 
  faCoins = faCoins; 
  faLaptopCode = faLaptopCode; 
  faPhone = faPhone; 
  faMobile = faMobile; 
  faTv = faTv; 
  faWifi = faWifi; 
  faBriefcase = faBriefcase; 
  faShippingFast = faShippingFast; 
  faPassport = faPassport; 

  constructor() { }

  ngOnInit(): void {
  }


}
