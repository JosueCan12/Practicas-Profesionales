import { Component } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private registerService: RegisterService) {}

  onCreateAccount() {
    // Aquí iría el código para crear la cuenta
    this.registerService.toggleRegisterComponent(false);

   
  }
}
