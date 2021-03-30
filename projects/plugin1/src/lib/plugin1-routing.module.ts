import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildScreenComponent } from './child-screen/child-screen.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

const routes: Routes = [
  {
    path: '',
    component: MainScreenComponent
  },
  {
    path: 'child',
    component: ChildScreenComponent
  },
  {
    path: 'plugin1',
    component: ChildScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Plugin1RoutingModule { }
