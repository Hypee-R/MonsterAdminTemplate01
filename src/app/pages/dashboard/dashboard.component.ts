import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../../services/variablesGL.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listOrders: any;
  statusPantalla: number;
  constructor(
    public variablesService: VariablesService
  ) {
    this.listOrders = [{
      productName: 'Foldable Mini Drone',
      productNumber: '85631',
      paymentStatus: 'Due',
      shipping: 'Pending'
  },
  {
      productName: 'LARVENDER KF1 Drone',
      productNumber: '36378',
      paymentStatus: 'Refunded',
      shipping: 'Declined'
  },
  {
      productName: 'Ruko F1 Drone',
      productNumber: '49347',
      paymentStatus: 'Due',
      shipping: 'Pending'
  },
  {
      productName: 'Drone with Camera Drone',
      productNumber: '98763',
      paymentStatus: 'Paid',
      shipping: 'Delivered'
  },
  {
      productName: 'GPS 4K Drone',
      productNumber: '78903',
      paymentStatus: 'Paid',
      shipping: 'Delivered'
  },
  {
      productName: ' DJI Air 2S',
      productNumber: '73256',
      paymentStatus: 'Refunded',
      shipping: 'Declined'
  },
  {
      productName: 'Lozenge Drone',
      productNumber: '00432',
      paymentStatus: 'Paid',
      shipping: 'Delivered'
  }
];

this.statusPantalla = variablesService.getStatusPantalla();
  }

  ngOnInit() {
  }

}
