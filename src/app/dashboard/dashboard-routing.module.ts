import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { DeliveryDetailComponent } from './delivery-detail/delivery-detail.component';
import { AppsComponent } from './apps/apps.component';
import { AppDetailComponent } from './app-detail/app-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'apps',
        component: AppsComponent
      },
      {
        path: 'apps/:id',
        component: AppDetailComponent
      },
      {
        path: 'deliveries',
        component: DeliveriesComponent
      },
      {
        path: 'deliveries/:id',
        component: DeliveryDetailComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})

export class DashboardRoutingModule {}