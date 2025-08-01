import { Component, Input } from '@angular/core';
import { Driver } from '../../models/request.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  @Input() driver: Driver = {
    name: 'mario rossi',
    role: 'AUTISTA'
  };
}
