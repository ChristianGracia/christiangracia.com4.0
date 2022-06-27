import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Repo } from "src/app/modules/shared/models/github-repo.model";
import { GithubService } from "src/app/modules/shared/services/github.service";
import { formatRepoLanguage } from "src/app/modules/shared/util/util";
import { RepoCommitModalComponent } from "../../modals/repo-commit-modal/repo-commit-modal.component";

@Component({
  selector: "app-github-repos",
  templateUrl: "./github-repos.component.html",
  styleUrls: ["./github-repos.component.scss"],
})
export class GithubReposComponent implements OnInit {
  public gitRepos: Repo[] = [];
  public data: Repo[] = [];
  public page = 0;
  public size = 15;

  constructor(private githubService: GithubService, public dialog: MatDialog) {}

  public loadingRepos: boolean = false;

  ngOnInit() {
    this.getGithubRepos();
  }

  public openRepoCommitModal(repoName: string, repoUrl: string) {
    let config = new MatDialogConfig();
    config = {
      minWidth: "100vw",
      height: "100vh",
      data: {
        repo: repoName,
        url: repoUrl,
      },
    };
    const dialogRef = this.dialog.open(RepoCommitModalComponent, config);
    dialogRef.afterClosed().subscribe((result) => {});
  }

  public formatRepoLanguage(language: string) {
    return formatRepoLanguage(language);
  }
  public getData(obj: any) {
    let index = 0,
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.data = this.gitRepos.filter(() => {
      index++;
      return index > startingIndex && index <= endingIndex ? true : false;
    });
  }

  private getGithubRepos() {
    this.loadingRepos = true;
    this.githubService.getAllRepos().subscribe((repos: Repo[]) => {
      if (repos) {
        this.gitRepos = repos;
        this.getData({ pageIndex: this.page, pageSize: this.size });
      }
      this.loadingRepos = false;
    });
  }
}
