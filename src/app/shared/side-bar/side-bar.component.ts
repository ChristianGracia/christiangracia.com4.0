import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Output() private closeSidenavEvent = new EventEmitter<void>();
  constructor() {}
  ngOnInit(): void {}

  public onClose() {
    this.closeSidenavEvent.emit();
  }
}