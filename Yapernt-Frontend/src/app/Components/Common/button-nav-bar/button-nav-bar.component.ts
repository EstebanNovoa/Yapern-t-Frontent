import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button-nav-bar',
  templateUrl: './button-nav-bar.component.html',
  styleUrls: ['../nav-bar-user/nav-bar-user.component.css']
})
export class ButtonNavBarComponent implements OnInit {
    
  constructor() { }
  
  @Input() buttonText: string = "no text";
  
  ngOnInit(): void {
  }
}
