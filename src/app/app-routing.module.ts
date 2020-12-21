import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFieldsComponent } from './add-fields/add-fields.component';

const routes: Routes = [
  { path: '', component: AddFieldsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
