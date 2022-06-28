import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SequenciaService {

  private readonly API = 'alticci/';

  constructor(private httpClient: HttpClient) { }

  getResultado(numero: number) {
    console.log(this.API + numero);
    return this.httpClient.get<number>(this.API + numero).pipe(first());
  }
}
