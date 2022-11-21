import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-user',
  templateUrl: './nav-bar-user.component.html',
  styleUrls: ['./nav-bar-user.component.css']
})
export class NavBarUserComponent implements OnInit {
  
  menuOptions: string[] = ["Home","Mis Publicaciones","Crear Publicación","Perfil"] 

  constructor(){  }

  ngOnInit(): void {

  }
 


}
