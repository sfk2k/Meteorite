import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeteorListComponent } from './meteor-list/meteor-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "meteorlist",
    pathMatch: "full"
}, 
{
    path: 'meteorlist',
    component: MeteorListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
