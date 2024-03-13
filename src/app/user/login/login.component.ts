import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup
  constructor(
  private formBuilder: FormBuilder,
  ) {}
  ngOnInit() {
    this.loginForm =this.formBuilder.group({
      correo: ["", [Validators.required, Validators.maxLength(50)]],
      contrasena: ["", [Validators.required, Validators.maxLength(50), Validators.minLength(4)]],
    });
  }



}
