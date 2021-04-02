import { NgModule } from '@angular/core';
import { Route, RouterModule, ROUTES, UrlMatchResult, UrlSegment, UrlSegmentGroup } from '@angular/router';
import { PluginConfigService } from 'common';

const staticRoutes: Route[] = [];

// let service: PluginConfigService;

// export function pluginMatcher(_segments: UrlSegment[], group: UrlSegmentGroup, _route: Route): UrlMatchResult | null {
//   return group.segments.length && service.value.some(plugin => plugin.path === group.segments[0].path) ? { consumed: [group.segments[0]] } : null;
// }

@NgModule({
  imports: [RouterModule.forRoot([
    // ...staticRoutes,
    // {
    //   matcher: pluginMatcher,
    //   loadChildren: () => import('./plugin-loader/plugin-loader.module').then((m) => m.PluginLoaderModule)
    // }
  ])],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: (pluginConfigService: PluginConfigService) => {
        const pluginRoute = {
          // This function is called when APP_INITIALIZER is not yet completed, so matcher is the only option
          matcher: (_segments: UrlSegment[], group: UrlSegmentGroup, _route: Route): UrlMatchResult | null =>
            group.segments.length && pluginConfigService.value.some(plugin => plugin.path === group.segments[0].path) ? { consumed: [group.segments[0]] } : null,
          // Lazy load the plugin loader module because it may contain many 'heavy' dependencies
          loadChildren: () => import('./plugin-loader/plugin-loader.module').then((m) => m.PluginLoaderModule)
        };
        return [...staticRoutes, pluginRoute];
      },
      // The member below must exist if Ivy is off
      // useValue: [],
      deps: [PluginConfigService],
      multi: true,
    }
  ]
})
export class AppRoutingModule {
  // public constructor(private readonly pluginConfigService: PluginConfigService) {
  //   service = this.pluginConfigService;
  // }
}
