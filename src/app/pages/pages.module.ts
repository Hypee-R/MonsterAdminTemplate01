import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ContentRoutingModule } from '../content/content-routing.module';
import { ContentComponent } from '../content/content.component';

import { PrimeNGModule } from './prime-ng.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MessagesComponent } from './messages/messages.component';
import { ProductsComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';
import { SetingsComponent } from './setings/setings.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        ContentRoutingModule,
        // StoreModule.forFeature('viewUsers', usersReducer),
        PrimeNGModule,
    ],
    declarations: [
        ContentComponent,
        HomeComponent,
        DashboardComponent,
        CustomersComponent,
        AnalyticsComponent,
        MessagesComponent,
        ProductsComponent,
        ReportsComponent,
        SetingsComponent,
        AddProductComponent
    ]
})
export class PagesModule { }
