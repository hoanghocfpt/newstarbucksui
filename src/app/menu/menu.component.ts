import { Component } from '@angular/core';
import { IProduct } from '../iproduct';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  listProduct: any[] = []
  constructor(private productService:ProductService, private router:ActivatedRoute){}
  ngOnInit():void{
    this.productService.getProducts().subscribe(data => {
      this.listProduct = data
    })
  }
}
