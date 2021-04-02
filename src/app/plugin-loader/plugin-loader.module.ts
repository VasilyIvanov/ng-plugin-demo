import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginLoaderRoutingModule } from './plugin-loader-routing.module';

// export function createCompiler(compilerFactory: CompilerFactory) {
//   return compilerFactory.createCompiler();
// }

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PluginLoaderRoutingModule
  ],
  // providers: [
  //   { provide: COMPILER_OPTIONS,
  //     useValue: {},
  //     multi: true
  //   },
  //   {
  //     provide: CompilerFactory,
  //     useClass: JitCompilerFactory,
  //     deps: [COMPILER_OPTIONS],
  //   },
  //   {
  //     provide: Compiler,
  //     useFactory: createCompiler,
  //     deps: [CompilerFactory],
  //   },
  // ]
})
export class PluginLoaderModule { }
