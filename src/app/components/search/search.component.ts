import {Component} from '@angular/core';
import {MusicService} from '../services/music,service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  SearchStr: string;


  constructor(private _MusicService: MusicService) {
  }



  SearchMusic() {
    this._MusicService.searchMusic(this.SearchStr).subscribe(res =>{
      console.log(res.artists.items);
    });
  }

}



