import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";

@Injectable({
  providedIn: "root",
})
export class UtilService {
  constructor(private http: HttpClient) {
    console.log("created util");
  }

  public getObservable(url: string, options = {}) {
    return this.createObservable("get", url, options);
  }

  public postObservable(url: string, options = {}) {
    return this.createObservable("post", url, options);
  }

  private createObservable(method: string, url: string, options = {}) {
    return this.http[method](`${environment.apiUrl}${url}`, options);
  }
}
