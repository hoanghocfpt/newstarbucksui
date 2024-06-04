import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { CategoriesService, } from '../categories.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ICategories } from '../icategories';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  listProduct: any[] = [];
  listCategories: any[] = [];

  constructor(
    private productService: ProductService,
    private categoriesService: CategoriesService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.listProduct = data;
    });

    this.categoriesService.getCategories().subscribe(data => {
      this.listCategories = data as ICategories[];
    });

  }

   

}
