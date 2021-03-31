import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PluginConfigService } from 'common';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PluginConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (pluginConfigService: PluginConfigService) =>
        () => pluginConfigService.load(`${environment.pluginConfigUri}?v=${new Date().getTime()}`),
      deps: [PluginConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
