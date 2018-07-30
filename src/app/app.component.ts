import {Component} from '@angular/core';
import {MusicService} from './components/services/music,service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MusicService]
})
export class AppComponent {
  title = 'MusicWithSpotify';
}
