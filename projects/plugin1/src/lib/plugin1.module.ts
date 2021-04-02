import { NgModule } from '@angular/core';
import { Plugin1Component } from './plugin1.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ChildScreenComponent } from './child-screen/child-screen.component';
import { Plugin1RoutingModule } from './plugin1-routing.module';
import { DemoPlugin, MODULE_BASE_PATH, PluginConfigService } from 'common';

export function find(plugin: DemoPlugin): boolean {
  return plugin.path === 'plugin1';
}

export function moduleBasePathFactory(pluginConfigService: PluginConfigService): string {
  return pluginConfigService.value.find(find).baseUrl;
}

@NgModule({
  declarations: [Plugin1Component, MainScreenComponent, ChildScreenComponent],
  imports: [
    Plugin1RoutingModule
  ],
  exports: [Plugin1Component],
  providers: [
    {
      provide: MODULE_BASE_PATH,
      useFactory: moduleBasePathFactory,
      deps: [PluginConfigService],
    }
  ]
})
export class Plugin1Module { }
