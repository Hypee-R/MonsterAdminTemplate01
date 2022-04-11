import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';

@NgModule({
    imports: [
        CardModule,
        ToastModule,
    ],
    exports: [
        CardModule,
        ToastModule,
    ]
})
export class PrimeNGModule { }
