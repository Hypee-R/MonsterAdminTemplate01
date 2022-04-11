import { Routes } from '@angular/router';
import { AddProductComponent } from '../pages/add-product/add-product.component';
import { AnalyticsComponent } from '../pages/analytics/analytics.component';
import { CustomersComponent } from '../pages/customers/customers.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

import { HomeComponent } from '../pages/home/home.component';
import { MessagesComponent } from '../pages/messages/messages.component';
import { ProductsComponent } from '../pages/products/products.component';
import { ReportsComponent } from '../pages/reports/reports.component';
import { SetingsComponent } from '../pages/setings/setings.component';

export const contentRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'analytics', component: AnalyticsComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'settings', component: SetingsComponent },
    { path: 'add-product', component: AddProductComponent },
    // {
    //     path: 'usuarios',
    //     data: { pagina: 'Lista de Usuarios'},
    //     component: UsuariosComponent
    // },
    {
        path: '**',
        redirectTo: 'home'
    }


];
