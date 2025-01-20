import { Component, OnInit } from '@angular/core';
import { IProductCard } from '../models/product-card.interface';
import { AnimeService } from '../services/anime.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
})
export class ProductsComponent implements OnInit {
  constructor(private _animeService: AnimeService) {}

  products: IProductCard[] = [];

  ngOnInit(): void {
    this._animeService.getAnimes().subscribe((response) => {
      this.products = response;
    });
  }
}
