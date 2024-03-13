import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrl: './create-contact.component.css'
})
export class CreateContactComponent {
  createCtForm!: FormGroup
  constructor(
  private formBuilder: FormBuilder,
  private routerPath: Router,
  ){}
  ngOnInit() {
    this.createCtForm =this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      parentesco: ["", Validators.required],
      correo: ["", [Validators.required, Validators.maxLength(50)]],
      contacto: ["", [Validators.required]]
    });
  }
}
