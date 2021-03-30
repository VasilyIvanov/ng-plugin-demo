import { NgModule } from '@angular/core';
import { Plugin2Component } from './plugin2.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { Plugin2RoutingModule } from './plugin2-routing.module';

@NgModule({
  declarations: [Plugin2Component, MainScreenComponent],
  imports: [
    Plugin2RoutingModule
  ],
  exports: [Plugin2Component]
})
export class Plugin2Module { }
