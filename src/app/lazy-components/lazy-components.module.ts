import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Component5Component } from '../component5/component5.component';
import { Component6Component } from '../component6/component6.component';
import { Component7Component } from '../component7/component7.component';

const routes: Routes = [
  // { path: 'component5', component: Component5Component },
  { path: 'component6', component: Component6Component },
  { path: 'component7', component: Component7Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [Component6Component, Component7Component],
  exports: [RouterModule],
})
export class LazyComponentsRoutingModule {}
