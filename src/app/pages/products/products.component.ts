import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/services/variablesGL.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  statusPantalla: number;
  constructor(
    private variablesService: VariablesService
  ) {
    this.statusPantalla = this.variablesService.getStatusPantalla();
  }

  ngOnInit() {
  }

}
