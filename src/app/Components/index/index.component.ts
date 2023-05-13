import { Component } from '@angular/core';
import { Store } from 'src/app/Models/store';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  // amazonStore: Store = new Store("Amazon", "assets/amazon.png", ["Cairo", "Minya", "Alex"]);
  // noonStore: Store = new Store("Noon", "assets/noon.png", ["Sohag", "Cairo", "Luxor"]);
  stores: Store[] = [];
  constructor(){
    this.stores=[
      new Store("Amazon", "assets/amazon.png", ["Cairo", "Minya", "Alex"]),
      new Store("Noon", "assets/noon.png", ["Sohag", "Cairo", "Luxor"]),
    ]
  }

}
