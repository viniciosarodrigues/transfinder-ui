
import { Component, OnInit, Input } from '@angular/core';
import { CarrierDTO } from '../../models/CarrierDTO';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('carrier') carrier: CarrierDTO;

  faPhone = faPhone;

  constructor() {
  }

  ngOnInit(): void {
  }

}
