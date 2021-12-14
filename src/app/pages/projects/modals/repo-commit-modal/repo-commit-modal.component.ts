import {
  Component,
  OnInit,
  Inject,
  AfterViewInit,
  ViewChild,
} from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GithubService } from "../../../shared-components/services/github.service";
import { Commit } from "src/app/modules/shared-components/models/commit.model";
import { formatDateAndTime } from "src/app/util/dateMethods";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
export interface DialogData {
  repo: string;
  url: string;
}

@Component({
  selector: "app-repo-commit-modal",
  templateUrl: "./repo-commit-modal.component.html",
  styleUrls: ["./repo-commit-modal.component.scss"],
})
export class RepoCommitModalComponent implements OnInit {
  public loadingCommits: boolean = false;
  public commits: Commit[] = [];
  public pageSize = 25;
  public totalCommits;

  displayedColumns: string[] = ["time", "message"];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  public dataSource;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private githubService: GithubService
  ) {}
  ngOnInit() {
    this.loadCommits();
  }
  public formatDate(date: string) {
    return formatDateAndTime(date);
  }
  public openSite(url: string) {
    window.open(url, "_blank");
  }
  private loadCommits() {
    this.loadingCommits = true;
    this.githubService
      .getAllCommitsOfRepo(this.data.repo, 1000)
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource<any>(data);
        setTimeout(() => (this.dataSource.paginator = this.paginator));
        this.commits = data;
        this.totalCommits = this.commits.length;
        console.log(this.totalCommits);
        this.loadingCommits = false;
      });
  }
}
