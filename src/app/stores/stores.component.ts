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
  constructor(private s: StoresService) { }
  listStore: IStore[] = [];
  listSearch: IStore[] = []
  listloc: IStore[] = []
  opID : any;
  ngOnInit(): void {
    this.s.getStore().subscribe(data => {
      this.listStore = data as IStore[];
      this.listSearch = data as IStore[];
    });
  }
  search() {
    this.listSearch = this.listStore.filter(s => s.name.toLowerCase().includes(this.tukhoa.toLowerCase()));
    if (this.listStore.length === 0) {
      alert('Không tìm thấy cửa hàng!');
    }
  }
  onCitySelected(event: any) {
    this.opID = event.target.value; 
    this.listSearch = this.listStore.filter(store => store.role === this.opID);
  }
  
  
  
}
