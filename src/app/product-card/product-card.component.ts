import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import PubSub from 'pubsub-js';
import { IProductCard } from '../models/product-card.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductCardComponent {
  @Input() product?: IProductCard;

  constructor() {}

  clickCard(): void {
    PubSub.publish('products', this.product);
  }
}
