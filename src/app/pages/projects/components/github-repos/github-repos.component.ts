import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Repo } from "src/app/models/github-repo.model";
import { GithubService } from "src/app/services/github.service";
import { formatDateAndTime } from "src/app/util/dateMethods";
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

  public formatUpdateAtDate(date: string) {
    return formatDateAndTime(date);
  }

  public formatRepoLanguage(language: string) {
    let color = "";

    switch (language) {
      case "Ruby":
        color = "red";
        break;
      case "Java":
        color = "#B07219";
        break;
      case "JavaScript":
        color = "#F0D91D";
        break;
      case "Kotlin":
        color = "#a87bfe";
        break;
      case "TypeScript":
        color = "#61D2F8";
        break;
      case "C#":
        color = "green";
        break;
      case "C":
        color = "#ed7014";
        break;
      case "Python":
        color = "#90EE90";
        break;
      case "Rust":
        color = "#B34313";
        break;
      case "Swift":
        color = "#F7B0BB";
        break;
      default:
        break;
    }
    return color;
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
