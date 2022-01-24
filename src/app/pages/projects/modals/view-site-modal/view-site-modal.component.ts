import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SafePipe } from '../../services/safe.pipe';

export interface DialogData {
  repo: string;
  url: string;
}

@Component({
  selector: 'app-view-site-modal',
  templateUrl: './view-site-modal.component.html',
  styleUrls: ['./view-site-modal.component.scss'],
})
export class ViewSiteModalComponent implements OnInit {
  public iframeLoading = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    const iframe = document.getElementById('site-iframe');
    if (iframe) {
      iframe.addEventListener('load', this.iframeLoaded.bind(this), {
        passive: true,
      });
    }
  }

  public openSite(url: string) {
    window.open(url, '_blank');
  }
  private iframeLoaded() {
    this.iframeLoading = false;
  }
}
