import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  @Output() navigate = new EventEmitter<string>();
  
  onNavigateToGiri() {
    this.navigate.emit('giri');
  }

  onNavigateToRistorni() {
    this.navigate.emit('ristorni');
  }
}
