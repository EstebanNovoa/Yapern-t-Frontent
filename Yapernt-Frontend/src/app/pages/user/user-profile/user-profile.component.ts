import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  modalSwitch: boolean;
  textEdit = "";
  UserName = "Nombre de usuario ..."
  UserEmail = "Email del usuario ..."

  constructor() {
    this.modalSwitch= false;
  }

  ngOnInit(): void {
  }

  openModalName(){
    this.modalSwitch = true;
    this.textEdit = "Nuevo Nombre:"
  }

  openModalEmail(){
    this.modalSwitch = true;
    this.textEdit = "Nuevo Email:"
  }

  openModalPass(){
    this.modalSwitch = true;
    this.textEdit = "Nueva Contraseña:"
  }

  closeModal(){
    this.modalSwitch = false;
  }

  sendForm(){

  }
}
