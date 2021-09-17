import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  @Output() closeSidenavEvent = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.closeSidenavEvent.emit();
  }
}
