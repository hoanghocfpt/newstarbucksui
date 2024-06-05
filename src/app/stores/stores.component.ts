import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StoresService,IStore } from '../stores.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css'
})
export class StoresComponent {
  tukhoa:string = '';
  map:any = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111462.53921030085!2d106.57075445480308!3d10.825950586931244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d5ee197131%3A0x1ffb3dea3491e41a!2zU3RhcmJ1Y2tzIE5ndXnhu4VuIFbEg24gVHLhu5dp!5e0!3m2!1svi!2s!4v1717240254243!5m2!1svi!2s';
  constructor(private s: StoresService) { }
  listStore: IStore[] = [];
  listSearch: IStore[] = []
  ngOnInit(): void {
    this.s.getStore().subscribe(data => {
      this.listStore = data as IStore[];
      this.listSearch = data as IStore[];
      console.log("this.listStore=", this.listStore);
    });
  }
  search() {
    this.listSearch = this.listStore.filter(s => s.name.toLowerCase().includes(this.tukhoa.toLowerCase()));
    if (this.listStore.length === 0) {
      alert('Không tìm thấy cửa hàng!');
    }
  }
  view(map:any){
    this.map = map
    console.log(this.map);
  }
  
}
