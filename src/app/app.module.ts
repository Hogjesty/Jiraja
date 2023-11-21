import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {JirajaModule} from './jiraja/jiraja.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TodoLocalStorageService} from "./shared/services/storages/todo/todolocalstorage.service";
import {TODO_STORAGE_TOKEN} from "./shared/services/storages/todo/todostorage.interface";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JirajaModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
