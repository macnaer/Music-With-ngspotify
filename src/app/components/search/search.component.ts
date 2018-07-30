import {Component} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  SearchStr: string;

  SearchMusic() {
    console.log(this.SearchStr);
  }

  constructor() {
  }

}
