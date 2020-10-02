import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent} from "./user-settings.component";
import { RouterModule } from '@angular/router';
import { ContactSettingsComponent } from './contact-settings/contact-settings.component';
import { PrivacySettingsComponent } from './privacy-settings/privacy-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserSettingsComponent,
    ContactSettingsComponent,
    PrivacySettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class UserSettingsModule { }
