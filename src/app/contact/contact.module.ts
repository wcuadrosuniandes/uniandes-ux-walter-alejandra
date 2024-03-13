import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from '../sidebar/sidebar.module';
import { MenuModule } from '../menu/menu.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    CreateContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SidebarModule,
    MenuModule,
    RouterModule
  ]
})
export class ContactModule { }
