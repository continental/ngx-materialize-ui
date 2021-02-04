import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeUiCoreModule } from 'ngx-materialize-ui-core';

const routes: Routes = [];

@NgModule({
  imports: [
    MaterializeUiCoreModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
