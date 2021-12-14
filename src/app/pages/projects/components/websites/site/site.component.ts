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
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      data: {
        url: siteUrl,
      },
    };
    const dialogRef = this.dialog.open(ViewSiteModalComponent, config);

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
