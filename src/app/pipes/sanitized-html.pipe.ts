import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
    name: "sanitizedHtml",
    standalone: false
})
export class SanitizedHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}

  transform(value: any): any {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
