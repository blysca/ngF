import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {InternalServerErrorComponent} from './pages/internal-server-error/internal-server-error.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthComponent} from './auth/auth.component';
import {TrainingDayComponent} from './training-day/training-day.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: AuthComponent}
  , {path: 'dashboard', component: DashboardComponent}
  , {path: 'training-day', component: TrainingDayComponent}
  , {path: '500', component: InternalServerErrorComponent}
  , {path: '404', component: PageNotFoundComponent}
  , {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
