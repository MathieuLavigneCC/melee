import {Component, OnInit} from '@angular/core';
import {Imputation} from '../imputation/imputation.model';

@Component({
  selector: 'app-imputations',
  templateUrl: './imputations.component.html',
  styleUrls: ['./imputations.component.scss']
})
export class ImputationsComponent implements OnInit {

  pourcentage = 0;
  cumulN1 = new Imputation();
  jourN = new Imputation();
  cumulN = new Imputation();

  constructor() {
  }

  ngOnInit(): void {
  }
}
