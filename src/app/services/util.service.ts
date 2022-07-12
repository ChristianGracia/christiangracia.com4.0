import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";

@Injectable({
  providedIn: "root",
})
export class UtilService {
  constructor(private http: HttpClient) {}

  public createObservable(method: string, url: string, options = {}) {
    return this.http[method](`${environment.apiUrl}${url}`, options);
  }
}
