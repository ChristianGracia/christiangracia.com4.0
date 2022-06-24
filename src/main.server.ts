import { enableProdMode } from "@angular/core";

import { environment } from "@environments/environment";

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from "@appserver";
export { ngExpressEngine } from "@nguniversal/express-engine";
