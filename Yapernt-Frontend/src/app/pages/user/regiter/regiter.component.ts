import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.css']
})
export class RegiterComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
