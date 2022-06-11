import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GithubService } from "src/app/shared-components/services/github.service";
import { Commit } from "src/app/shared-components/models/commit.model";
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
  public pageSize = 15;
  public totalCommits: number = 0;

  displayedColumns: string[] = ["time", "message"];

  @ViewChild(MatPaginator, { static: false }) paginator: any;

  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private githubService: GithubService
  ) {}
  ngOnInit() {
    this.loadCommits();
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
        this.dataSource.paginator = this.paginator;
        this.commits = data;
        this.totalCommits = this.commits.length;
        this.loadingCommits = false;
      });
  }

  public openLink(url: string) {
    window.open(url, "_blank");
  }
}
