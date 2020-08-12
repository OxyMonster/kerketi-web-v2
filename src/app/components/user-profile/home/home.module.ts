import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { HomeService } from "../../../services/home.service";
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [
  HomeComponent
]

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    HomeService
  ], 
  exports : [
    COMPONENTS
  ]
})
export class HomeModule { }
