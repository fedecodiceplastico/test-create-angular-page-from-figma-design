import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Request, Driver, GiroInfo } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class GiroDataService {
  private requestsSubject = new BehaviorSubject<Request[]>([]);
  public requests$ = this.requestsSubject.asObservable();

  private driverData: Driver = {
    name: 'mario rossi',
    role: 'AUTISTA'
  };

  private giroInfoData: GiroInfo = {
    name: 'Nome giro',
    date: '09/06/2025',
    week: 'SETTIMANA 2',
    completed: 8,
    total: 10,
    showCompleted: true
  };

  private mockRequests: Request[] = [
    {
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
      status: 'completed'
    },
    {
      id: '2',
      number: '24861',
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
      status: 'completed'
    },
    {
      id: '3',
      number: '24862',
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
      status: 'in-progress'
    },
    {
      id: '4',
      number: '24863',
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
    },
    {
      id: '5',
      number: '24864',
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
    }
  ];

  constructor() {
    this.requestsSubject.next(this.mockRequests);
  }

  getRequests(): Observable<Request[]> {
    return this.requests$;
  }

  getDriver(): Driver {
    return this.driverData;
  }

  getGiroInfo(): GiroInfo {
    return this.giroInfoData;
  }

  updateShowCompleted(showCompleted: boolean): void {
    this.giroInfoData.showCompleted = showCompleted;
  }
}
