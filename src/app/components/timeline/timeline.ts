import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Request } from '../../models/request.model';
import { RequestCardComponent } from '../request-card/request-card';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.scss'],
  imports: [CommonModule, RequestCardComponent]
})
export class TimelineComponent {
  @Input() requests: Request[] = [];
}
