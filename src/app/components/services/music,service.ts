import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class MusicService {
  private searchUrl: string;

  constructor(private _http: Http) {

  }


  searchMusic(str: string, type = 'artist') {
    const accessToken = 'BQDoXCjZ2wXj3U0tT3Yob0InuVxxmO_Pl-2shZLARjNWdZ2bTvJzwmYbblx9c5Oj21OvTPkPsxnLZHi1j0ADY-6dnRu5njwSantRxrO12QgqEJRBew0DlVUmI8txPn0dAZ2Dq1IXLdBl3nN0Uz4rmCJACccO3x34hA5vw3vF92a_4Ma16Q&refresh_token=AQBk6Oa5pgMUm_FLjYF8wfWHHBjYrPGPr3dkIVj48iR_mRf7nGJMicQR72PknudRATL44d8ZqGV-wDHJ892YsMXcd3K_Xp64YNU8JhBZX6xsSGfc4cCyU0r1mhf18qmOaNw';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',  'Bearer ' + accessToken);
    let options = new RequestOptions({ headers: headers });
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
    return this._http.get(this.searchUrl, options)
      .map(res => res.json());
  }
}
