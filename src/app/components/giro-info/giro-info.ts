import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GiroInfo } from '../../models/request.model';

@Component({
  selector: 'app-giro-info',
  templateUrl: './giro-info.html',
  styleUrls: ['./giro-info.scss'],
  imports: [FormsModule]
})
export class GiroInfoComponent {
  @Input() giroInfo: GiroInfo = {
    name: 'Nome giro',
    date: '09/06/2025',
    week: 'SETTIMANA 2',
    completed: 8,
    total: 10,
    showCompleted: true
  };

  @Output() toggleChange = new EventEmitter<boolean>();

  onToggleChange() {
    this.toggleChange.emit(this.giroInfo.showCompleted);
  }
}
