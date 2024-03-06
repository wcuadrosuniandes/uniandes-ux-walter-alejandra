import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ListMedicationComponent } from './medicine/list-medication/list-medication.component';
import { CreateMedicationComponent } from './medicine/create-medication/create-medication.component';
import { EditMedicationComponent } from './medicine/edit-medication/edit-medication.component';
import { CreateContactComponent } from './contact/create-contact/create-contact.component';

const routes: Routes = [
  {  path:'', component: LoginComponent, pathMatch: 'full'  },
  {  path:'registro', component: RegisterComponent, pathMatch: 'full'  },
  { path: 'medicamentos', component: ListMedicationComponent,  pathMatch: 'full' },
  { path: 'medicamentos/crear', component: CreateMedicationComponent, pathMatch: 'full'  },
  { path: 'medicamentos/editar/:id', component: EditMedicationComponent, pathMatch: 'full'},
  { path: 'contacto/crear', component: CreateContactComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
