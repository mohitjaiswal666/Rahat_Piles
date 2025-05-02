import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  constructor(private router: Router) {}

  // Method to navigate to the learn more page
  // learnMore() {
  //   console.log('abc');
  //   // this.router.navigate(['/learn-more']);
  // }

}
