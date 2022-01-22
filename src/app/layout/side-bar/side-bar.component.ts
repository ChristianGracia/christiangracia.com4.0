import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';

const LINKS = {
  home: '/',
  about: '/about',
  projects: '/projects',
  contact: '/contact',
};
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  public links = Object.keys(LINKS);
  @Output() private closeSidenavEvent = new EventEmitter<void>();
  @Input() public currentUrl : string = '';
  constructor(private routingService: RoutingService) {}
  ngOnInit(): void {}

  public onClose() {
    this.closeSidenavEvent.emit();
  }

  public goToLink(page: string): void {
    this.routingService.navigateToPage(page !== 'home' ? page : '/');
  }
}
