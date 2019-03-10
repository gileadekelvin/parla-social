import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Parlamentar } from '../models/Parlamentar.model';

@Injectable({
  providedIn: 'root'
})
export class ParlamentarService {

  private url = environment.apiUrl + 'parlamentares';

  constructor(private http: HttpClient) { }

  getParlamentares(): Observable<Parlamentar[]> {
    return this.http.get<Parlamentar[]>(this.url).pipe(map(data => data.map(parlamentar => new Parlamentar(parlamentar))));
  }

}
