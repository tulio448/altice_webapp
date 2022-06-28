import { Component, Input, OnInit } from '@angular/core';

import { SequenciaService } from './service/sequencia.service';

@Component({
  selector: 'app-sequencia',
  templateUrl: './sequencia.component.html',
  styleUrls: ['./sequencia.component.scss']
})
export class SequenciaComponent implements OnInit {

  resultado: Number;

  constructor(private sequenciaService: SequenciaService) {
    this.resultado = new Number;
   }

  ngOnInit(): void {
  }

  calcular(numero: number) {
    this.sequenciaService.getResultado(numero).subscribe( x => this.resultado = x );
  }
}
