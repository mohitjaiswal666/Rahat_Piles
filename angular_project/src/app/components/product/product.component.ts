import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal(event?: MouseEvent) {
    this.isModalOpen = false;
  }
}
