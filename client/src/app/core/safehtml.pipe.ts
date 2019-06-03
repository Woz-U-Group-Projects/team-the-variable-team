import { DomSanitizer } from '@angular/platform-browser'
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value, command) {
    if (command == 'resource') {
      return this.sanitized.bypassSecurityTrustResourceUrl(value);  
    }
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
