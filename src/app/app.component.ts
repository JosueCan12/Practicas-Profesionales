import { Component } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica';
  showRegisterComponent = true;

  constructor(private registerService: RegisterService) {}

  ngOnInit() {
    this.registerService.getShowRegisterComponent().subscribe(value => {
      this.showRegisterComponent = value;
    });
  }
}
