import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  constructor() { }

  lostObject1= "assets/resources/lostObject.png"
  lostObject2= "assets/resources/lostObject2.png"
  lostObject3= "assets/resources/lostObject3.png"
  lostObject4= "assets/resources/lostObject4.png"
  lostObject5= "assets/resources/lostObject5.png"

  ngOnInit(): void {
  }

  headerDescription = ""



}
