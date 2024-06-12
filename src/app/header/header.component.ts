import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchpopupComponent } from '../searchpopup/searchpopup.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink,SearchpopupComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpenNav = false;
  isOpenSearch = false;

  openSearch() {
    if (this.isOpenSearch) {
      this.isOpenSearch = false;
    } else {    
      this.isOpenSearch = true;
    }
    console.log(this.isOpenSearch);
    
  }
  handleClosePopup() {
    this.isOpenSearch = false; // Đóng popup khi click ra ngoài
  }
  openNav(boolean?: boolean) {
    if (boolean === false) {
      this.isOpenNav = false;
      return;
    }
    if (this.isOpenNav) {
      this.isOpenNav = false;
    } else {    
      this.isOpenNav = true;
    }
  }
}
