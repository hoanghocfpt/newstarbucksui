import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeVI from '@angular/common/locales/vi';
registerLocaleData(localeVI);

@Component({
  selector: 'app-searchpopup',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './searchpopup.component.html',
  styleUrl: './searchpopup.component.css'
})
export class SearchpopupComponent {
  constructor(private productService:ProductService) {}
  listProducts: any[] = []
  searchProducts: any[] = []
  listPosts: any[] = []
  
  @Input() keyword :string = '';
  @Input() search! :boolean;
  @Output() closePopupEvent = new EventEmitter<void>();
  closePopup() {
    this.closePopupEvent.emit();
  }
  ngOnInit():void {
    this.productService.getProducts().subscribe(data => {
      this.listProducts = data;
    })
  }
  deleteKeyword() {
    this.keyword = '';
    this.searchProducts = []
  }
  keyupSearch() {
    console.log(this.keyword);
    if(this.keyword == '') {
      this.searchProducts = []
      return
    }
    this.searchProducts = this.listProducts.filter((product) => {
      return product.name.toLowerCase().includes(this.keyword.toLowerCase())
    })
    console.log(this.searchProducts.length);
    
  }
}
