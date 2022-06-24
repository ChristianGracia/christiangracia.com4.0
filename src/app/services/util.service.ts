import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/internal/operators/map";
import { environment } from "@environments/environment";

@Injectable({
  providedIn: "root",
})
export class UtilService {
  constructor(private http: HttpClient) {}

  public getObservable(url: string, options = {}) {
    const observable = this.createObservable("get", url, options);
    return options === {}
      ? observable.pipe(
          map((data: any) => (data.fromJSON ? data.fromJSON(data) : data))
        )
      : observable;
  }

  public postObservable(url: string, options = {}) {
    return this.createObservable("post", url, options);
  }

  private createObservable(method: string, url: string, options = {}) {
    return this.http[method](environment.apiUrl + url, options);
  }
}
