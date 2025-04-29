import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    address: '',
    quantity: 1
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Order Details:', this.form);
    // Here, you would connect to backend or email service
  }
}
