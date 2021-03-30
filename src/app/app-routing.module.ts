import { NgModule } from '@angular/core';
import { Route, RouterModule, ROUTES, UrlMatchResult, UrlSegment, UrlSegmentGroup } from '@angular/router';
import { PluginConfigService } from 'common';

const staticRoutes: Route[] = [];

const getRoutes = (pluginConfigService: PluginConfigService): Route[] => {
  const pluginRoute = {
    matcher: (_segments: UrlSegment[], group: UrlSegmentGroup, _route: Route): UrlMatchResult | null =>
      group.segments.length && pluginConfigService.value.some(p => p.path === group.segments[0].path) ? { consumed: [group.segments[0]] } : null,
    loadChildren: () => import('./plugin-loader/plugin-loader.module').then((m) => m.PluginLoaderModule)
  };
  return [...staticRoutes, pluginRoute];
};

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: getRoutes,
      deps: [PluginConfigService],
      multi: true,
    },
  ]
})
export class AppRoutingModule { }
