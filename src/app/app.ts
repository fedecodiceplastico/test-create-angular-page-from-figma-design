import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home';
import { GiriSectionComponent } from './components/giri-section/giri-section';
import { RistorniTableComponent } from './components/ristorni-table/ristorni-table';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HomeComponent,
    GiriSectionComponent,
    RistorniTableComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  currentSection: 'home' | 'giri' | 'ristorni' = 'home';

  ngOnInit() {
    // Initialization logic if needed
  }

  onNavigate(section: string) {
    this.currentSection = section as 'home' | 'giri' | 'ristorni';
  }

  onBackToHome() {
    this.currentSection = 'home';
  }
}
