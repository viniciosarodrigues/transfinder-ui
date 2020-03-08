import { Component, OnInit } from '@angular/core';

import { CarrierDTO } from '../models/CarrierDTO'

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.css']
})
export class CarriersComponent implements OnInit {

  carriers: Array<CarrierDTO> = [new CarrierDTO(
    'https://teclandotudo.com/wp-content/uploads/2013/06/Rapid%C3%A3o-Cometa-Rastreamento-de-Carga.jpg',
    'Rapidão Cometa',
    '10.970.887/0001-02',
    '(81) 3464-5288',
    '(81) 9 9950-9300',
    'atendimento@rapidaocometa.com.br'),
  new CarrierDTO(
    'https://cdn.freebiesupply.com/logos/large/2x/hamburg-logo-png-transparent.png',
    'Hamburg Log',
    '23.125.857/0001-02',
    '(81) 3464-5288',
    '(81) 9 8756-1837',
    'atendimento@hamburg.com'),
  new CarrierDTO(
    'https://www.lojas-na.net/WebRoot/Store/Shops/SINFIC_002E_Lojas-na-Net_002E_061004/55E5/9A96/AE6B/68EF/8C04/25E6/6498/70E6/icon-correios-brasil_ml.png',
    'Sedex Log',
    '21.642.531/0001-08',
    '(81) 4312-3451',
    '(81) 9 6347-5341',
    'atendimento@sedex.com.br')]

  constructor() { }

  ngOnInit(): void {
  }

}
