import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { HeaderComponent } from '../header/header';
import { NavigationTabsComponent } from '../navigation-tabs/navigation-tabs';
import { GiroInfoComponent } from '../giro-info/giro-info';
import { TimelineComponent } from '../timeline/timeline';

import { GiroDataService } from '../../services/giro-data.service';
import { Request, Driver, GiroInfo } from '../../models/request.model';

@Component({
  selector: 'app-giri-section',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavigationTabsComponent,
    GiroInfoComponent,
    TimelineComponent
  ],
  templateUrl: './giri-section.html',
  styleUrls: ['./giri-section.scss']
})
export class GiriSectionComponent implements OnInit {
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
