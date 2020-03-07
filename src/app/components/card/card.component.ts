
import { Component, OnInit, Input } from '@angular/core';
import { CarrierDTO } from '../../models/CarrierDTO';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() carrier: CarrierDTO;

  ngOnInit(): void {
  }

}
