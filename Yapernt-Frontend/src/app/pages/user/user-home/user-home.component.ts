import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DOMElement } from 'react';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor() { }
  
  profileIconUrl= "assets/resources/profileIcon.png"
  greetIconUrl= "assets/resources/greetIcon.png"
  count = 0;

  onClickSearch(){
    

  }

  ngOnInit(): void {
  }


}
