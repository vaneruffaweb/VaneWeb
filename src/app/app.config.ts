import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { SafeResourceUrlPipe } from './core/utils/pipes/safe-resource-url.pipe';
import { SafeHtmlPipe } from './core/utils/pipes/safe-html.pipe';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
  ]
};
