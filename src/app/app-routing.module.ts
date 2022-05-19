import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { RemoveComponent } from './remove/remove.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'add', component:AddComponent},
  {path:'remove',component:RemoveComponent},
  
  {path:'list', component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
