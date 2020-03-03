import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditOrCreateComponent } from './edit-or-create/edit-or-create.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'edit-or-create', component: EditOrCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
