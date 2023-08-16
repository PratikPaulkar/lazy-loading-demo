import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // ... other routes
  { path: 'lazy', loadChildren: () => import('./lazy-components/lazy-components.module').then(m => m.LazyComponentsRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
