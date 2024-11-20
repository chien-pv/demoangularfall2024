import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Init } from 'v8';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() name = '';
  @Input() price = 0;
  @Input() url = '';
  @Input() isSave = false;
  @Input() idproduct: any = '';
  @Output() isSaveEvent = new EventEmitter<any>();

  handleClick() {
    this.isSaveEvent.emit({ id: this.idproduct, isSave: !this.isSave });
  }
}
