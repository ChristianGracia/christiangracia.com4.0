import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Site } from 'src/app/models/site.model';
import { ViewSiteModalComponent } from '../../../modals/view-site-modal/view-site-modal.component';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {
  @Input()
  public site!: Site;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  public viewSite(siteUrl: string) {
    let config = new MatDialogConfig();
    config = {
      minWidth: '100vw',
      height: '100vh',
      data: {
        url: siteUrl,
      },
    };
    const dialogRef = this.dialog.open(ViewSiteModalComponent, config);

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
