import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//COMPONENTS
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverpassComponent } from './components/recoverpass/recoverpass.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'recoverpass', component: RecoverpassComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
