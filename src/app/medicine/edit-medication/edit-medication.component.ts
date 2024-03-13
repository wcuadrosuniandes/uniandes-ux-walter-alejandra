import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-medication',
  templateUrl: './edit-medication.component.html',
  styleUrl: './edit-medication.component.css'
})
export class EditMedicationComponent {
  createMedForm!: FormGroup
  constructor(
  private formBuilder: FormBuilder,
  private routerPath: Router,
  ){}
  ngOnInit() {
    this.createMedForm =this.formBuilder.group({
      nombre: ["Nombre medicamento a editar", [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      cantidad_dosis: ["Cantidad de dosis a editar", Validators.required],
      unidad_medida: ["1", Validators.required],
      frecuencia: ["Frecuencia a editar", [Validators.required]]
    });
  }
}
