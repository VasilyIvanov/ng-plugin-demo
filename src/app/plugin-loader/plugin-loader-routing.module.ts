import { Compiler, NgModule } from '@angular/core';
import { Route, RouterModule, ROUTES, UrlMatchResult, UrlSegment, UrlSegmentGroup } from '@angular/router';
import { PluginConfigService } from 'common';
import { dependencyMap } from './dependencies.config';

const loadModule = (url: string): Promise<any> => {
  try {
    return fetch(url)
      .then((response) => response.text())
      .then((source) => {
        const exports = {}; // This will hold module exports
        // Shim 'require'
        const require = (module) => {
          if (!dependencyMap[module]) {
            throw new Error(`No '${module}' module defined in the provided dependency map for the '${url}' module`);
          }
          return dependencyMap[module];
        };
        eval(source); // Interpret the plugin source
        return exports;
      });
  } catch (error) {
    const message =
      `Cannot load a module at '${url}'. ` +
      (error instanceof Error ? `${error.name} ${error.message}` : JSON.stringify(error));
    window.alert(message);
    return Promise.reject(message);
  }
};

@NgModule({
  imports: [RouterModule.forChild([])],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: (pluginConfigService: PluginConfigService /*, compiler: Compiler*/) => pluginConfigService.value.map(plugin => ({
        matcher: (_segments: UrlSegment[], group: UrlSegmentGroup, _route: Route): UrlMatchResult | null => group.segments[0].path === plugin.path ? { consumed: [] } : null,
        loadChildren: () =>
          loadModule(`${plugin.baseUrl}/${plugin.pluginFile}?v=${new Date().getTime()}`)
            .then(m => m[plugin.moduleName])
            // .then(result => result instanceof NgModuleFactory ? Promise.resolve(result) : compiler.compileModuleAsync(result))
      })),
      // The member below must exist if Ivy is off
      // useValue: [],
      deps: [PluginConfigService /*, Compiler*/],
      multi: true,
    },
  ]
})
export class PluginLoaderRoutingModule { }
