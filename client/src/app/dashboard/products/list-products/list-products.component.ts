import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  public loading = true;
  products = [
    {
      id: 1,
      name: 'Café allongé',
      type: 'Boisson',
      price: 3.5,
      stock: 150
    },
    {
      id: 2,
      name: 'Café court',
      type: 'Boisson',
      price: 1.60,
      stock: 250
    },
    {
      id: 3,
      name: 'Café crème',
      type: 'Boisson',
      price: 2.60,
      stock: 150
    },
    {
      id: 4,
      name: 'Croissant',
      type: 'Pâtisserie',
      price: 1.10,
      stock: 100
    },
    {
      id: 5,
      name: 'Blonde Cappucinno',
      type: 'Boisson',
      price: 3.10,
      stock: 160
    },
    {
      id: 6,
      name: 'Blonde Americano',
      type: 'Boisson',
      price: 2.90,
      stock: 200
    },
    {
      id: 7,
      name: 'Cookie 3 chocolats',
      type: 'Pâtisserie',
      price: 1.50,
      stock: 120
    }
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
