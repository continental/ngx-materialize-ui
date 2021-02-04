import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterializeUiCoreModule } from 'ngx-materialize-ui-core';
import { CommonModule } from '@angular/common';

@Pipe({
  name: 'cap'
})
export class CapPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value[0].toUpperCase() + value.substr(1, value.length);
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeUiCoreModule,
    CommonModule
  ],
  providers: [ {provide: 'cap', useClass: CapPipe}],
  bootstrap: [AppComponent]
})
export class AppModule { }
