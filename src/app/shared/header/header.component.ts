import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  sidenavToggle = new EventEmitter<void>();
  public links: string[] = ['about', 'projects', 'contact'];
  constructor() {}

  ngOnInit() {}
  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
