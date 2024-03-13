import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMedicationComponent } from './list-medication/list-medication.component';
import { CreateMedicationComponent } from './create-medication/create-medication.component';
import { EditMedicationComponent } from './edit-medication/edit-medication.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [
    ListMedicationComponent,
    CreateMedicationComponent,
    EditMedicationComponent
  ],
  imports: [
    CommonModule, 
    SidebarModule,
    ReactiveFormsModule,
    MenuModule,
    RouterModule
  ]
})
export class MedicineModule { }
