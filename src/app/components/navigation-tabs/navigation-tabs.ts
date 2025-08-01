import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-tabs',
  templateUrl: './navigation-tabs.html',
  styleUrls: ['./navigation-tabs.scss']
})
export class NavigationTabsComponent {
  @Input() activeTab: string = 'calendar';
  @Output() tabChange = new EventEmitter<string>();

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.tabChange.emit(tab);
  }
}
