import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';

const routes: Routes = [
  {
    path: '',
    component: MainScreenComponent
  }
];

export const routerModule = RouterModule.forChild(routes);

@NgModule({
  imports: [routerModule],
  exports: [RouterModule]
})
export class Plugin2RoutingModule { }
