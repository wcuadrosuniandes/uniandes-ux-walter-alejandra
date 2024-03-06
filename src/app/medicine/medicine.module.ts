import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMedicationComponent } from './list-medication/list-medication.component';
import { CreateMedicationComponent } from './create-medication/create-medication.component';
import { EditMedicationComponent } from './edit-medication/edit-medication.component';



@NgModule({
  declarations: [
    ListMedicationComponent,
    CreateMedicationComponent,
    EditMedicationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MedicineModule { }
