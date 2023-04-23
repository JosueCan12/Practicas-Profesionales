import { Component, ViewChild, ElementRef } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('firstNameInput')
  firstNameInput!: ElementRef;
  @ViewChild('lastNameInput')
  lastNameInput!: ElementRef;
  @ViewChild('passwordInput')
  passwordInput!: ElementRef;
  @ViewChild('confirmpasswordInput')
  confirmpasswordInput!: ElementRef;
  constructor(private registerService: RegisterService) { }

  onCreateAccount() {
    const firstName = this.firstNameInput.nativeElement.value;
    const lastName = this.lastNameInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;
    const confirmpassword = this.confirmpasswordInput.nativeElement.value;

    if (!firstName || !lastName) {
      alert('Por favor, Ingresa los datos');
      return;
    }
    if (password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }
    if (!confirmpassword) {
      alert('Por favor, confirma tu contraseña.');
      return;
    }
    if (confirmpassword !== password) {
      alert('Las contraseñas no son iguales.');
      return;
    }
    this.registerService.toggleRegisterComponent(false);
  }
}
