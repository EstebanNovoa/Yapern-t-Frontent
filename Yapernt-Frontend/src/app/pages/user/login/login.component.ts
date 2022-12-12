import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  btnRegister(){
    this.router.navigateByUrl('/login');
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
