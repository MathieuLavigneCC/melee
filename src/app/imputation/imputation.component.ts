import {Component, Input, OnInit, Output} from '@angular/core';
import {Duree} from '../duree/duree.model';
import {Imputation} from './imputation.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-imputation',
  templateUrl: './imputation.component.html',
  styleUrls: ['./imputation.component.scss']
})
export class ImputationComponent implements OnInit {

  @Input()
  imputation = new Imputation();
  @Output()
  imputationChange = new EventEmitter<Imputation>();

  constructor() { }

  ngOnInit(): void {
  }
}
