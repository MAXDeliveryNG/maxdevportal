import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'MAX API | Build on-demand into your app or website'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'MAX API | Login'
        }
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})

export class SiteRoutingModule {}