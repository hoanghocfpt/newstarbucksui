import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private productService:ProductService, private router:ActivatedRoute){}
  product:any = {}
  id: any
  ngOnInit():void{
    this.id = this.router.snapshot.paramMap.get('id')
    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data
      console.log(this.product);
    })
  }
}
