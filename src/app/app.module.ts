import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { MedicineModule } from './medicine/medicine.module';
import { ContactModule } from './contact/contact.module';
import { ModalModule } from './modal/modal.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { MenuModule } from './menu/menu.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    UserModule, 
    MedicineModule, 
    ContactModule,
    ReactiveFormsModule,
    FormsModule, 
    ModalModule, 
    MenuModule,
    SidebarModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
