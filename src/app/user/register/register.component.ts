import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../../modal/modal/modal.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  registerForm!: FormGroup
  constructor(
  private formBuilder: FormBuilder,
  private routerPath: Router,

  ) {}
  ngOnInit() {
    this.registerForm =this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      apellido: ["", Validators.required],
      correo: ["", [Validators.required, Validators.maxLength(50)]],
      contrasena: ["", [Validators.required, Validators.maxLength(50), Validators.minLength(4)]],
      confirmContrasena: ["", [Validators.required, Validators.maxLength(50), Validators.minLength(4)]]
    });
  }
  cancelarRegister(): void {
    this.registerForm.reset();
    this.routerPath.navigate(['/']);
  }


}
