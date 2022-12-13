import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor() { }

  profileIconUrl= "assets/resources/profileIcon.png"
  greetIconUrl= "assets/resources/greetIcon.png"
  addImage= "assets/resources/addImage.png"
  add= "assets/resources/add.png"
  cam= "assets/resources/cam.png"

  ngOnInit(): void {
  }

}
