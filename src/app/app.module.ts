import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PluginConfigService } from 'common';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const appInitializerFactory = (pluginConfigService: PluginConfigService): (() => Promise<any>) => {
  return () => pluginConfigService.load(environment.pluginConfigUri);
};

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
      useFactory: appInitializerFactory,
      deps: [PluginConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
