import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeUiCoreModule } from 'ngx-materialize-ui-core';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'table',
  component: TableComponent
}, {
  path: 'forms',
  component: FormsComponent
}, {
  path: '**',
  redirectTo: 'home'
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}];

@NgModule({
  imports: [
    MaterializeUiCoreModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
