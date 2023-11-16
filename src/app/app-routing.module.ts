import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JirajaComponent } from './jiraja/jiraja.component';

const routes: Routes = [
  {
    path: "jiraja",
    component: JirajaComponent
  },
  {
    path: "",
    redirectTo: "jiraja",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
