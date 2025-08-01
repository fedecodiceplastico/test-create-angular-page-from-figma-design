import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Request } from '../../models/request.model';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.html',
  styleUrls: ['./request-card.scss'],
  imports: [CommonModule]
})
export class RequestCardComponent {
  @Input() request: Request = {
    id: '1',
    number: '24860',
    companyName: 'Cartiera xx',
    address: 'Via Moretto 51, Mairano 25030 Brescia',
    isZTL: true,
    expectedArrival: '09/06/2025 12:00',
    wasteTypes: [
      {
        name: 'Rifiuto 1',
        quantity: 4,
        weight: '10kg',
        volume: '20L'
      }
    ],
    status: 'pending'
  };
}
