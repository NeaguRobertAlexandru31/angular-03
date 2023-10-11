import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProfiloComponent } from "./profilo/profilo.component";

const routes: Routes = [
  {path: 'home-component', component: HomeComponent},
  {path: 'profilo-component', component: ProfiloComponent},
  {path: '', redirectTo: '/home-component', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}