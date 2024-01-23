import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LifecycleComponent } from './pages/lifecycle/lifecycle.component';

const routes: Routes = [
  {
    path:'', redirectTo:'lifecycle', pathMatch:"full"
  },
  {path:'lifecycle', component:LifecycleComponent, title:'Lifecycle'},
  {path:'home', component:HomeComponent, title:'title'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
