import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medication',
  templateUrl: './create-medication.component.html',
  styleUrl: './create-medication.component.css'
})
export class CreateMedicationComponent {
  createMedForm!: FormGroup
  constructor(
  private formBuilder: FormBuilder,
  private routerPath: Router,
  ){}
  ngOnInit() {
    this.createMedForm =this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      cantidad_dosis: ["", Validators.required],
      unidad_medida: ["", Validators.required],
      frecuencia: ["", [Validators.required]]
    });
  }
  cancelarRegister(): void {
    this.createMedForm.reset();
    this.routerPath.navigate(['/medicamentos']);
  }
}
