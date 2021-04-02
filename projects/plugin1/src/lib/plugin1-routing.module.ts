import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildScreenComponent } from './child-screen/child-screen.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

export const routes: Routes = [
  {
    path: '',
    component: MainScreenComponent
  },
  {
    path: 'child',
    component: ChildScreenComponent
  }
];

export const routerModule = RouterModule.forChild(routes);

@NgModule({
  imports: [routerModule],
  exports: [RouterModule]
})
export class Plugin1RoutingModule { }
