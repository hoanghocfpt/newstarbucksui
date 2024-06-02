import { Component } from '@angular/core';
import { IProduct } from '../iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  listProduct: IProduct[] = [];
  ngOnInit(): void {
    fetch(` https://665aef83003609eda45f4d1a.mockapi.io/products`)
      .then(res => res.json())
      .then(data => {
        this.listProduct = data;
      })
  }

}
