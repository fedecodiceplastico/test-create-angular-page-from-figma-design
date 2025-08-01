import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { HeaderComponent } from './components/header/header';
import { NavigationTabsComponent } from './components/navigation-tabs/navigation-tabs';
import { GiroInfoComponent } from './components/giro-info/giro-info';
import { TimelineComponent } from './components/timeline/timeline';

import { GiroDataService } from './services/giro-data.service';
import { Request, Driver, GiroInfo } from './models/request.model';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderComponent,
    NavigationTabsComponent,
    GiroInfoComponent,
    TimelineComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  driver: Driver;
  giroInfo: GiroInfo;
  requests$: Observable<Request[]>;
  activeTab: string = 'calendar';

  constructor(private giroDataService: GiroDataService) {
    this.driver = this.giroDataService.getDriver();
    this.giroInfo = this.giroDataService.getGiroInfo();
    this.requests$ = this.giroDataService.getRequests();
  }

  ngOnInit() {
    // Initialization logic if needed
  }

  onTabChange(tab: string) {
    this.activeTab = tab;
  }

  onToggleChange(showCompleted: boolean) {
    this.giroDataService.updateShowCompleted(showCompleted);
  }
}
