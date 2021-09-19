import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  public sidenavToggle = new EventEmitter<void>();
  @Output()
  public changeTheme = new EventEmitter<boolean>();
  public links: string[] = ['about', 'projects', 'contact'];
  constructor() {}

  ngOnInit() {}
  public onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }
  public toggleTheme(event: any): void {
    console.log(event);
    this.changeTheme.emit(event);
  }
}
