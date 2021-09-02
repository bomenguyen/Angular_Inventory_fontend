import { Component, OnInit} from '@angular/core';
import { productSales, productSalesMulti } from '../products';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  productSales: any[]
  productSalesMulti: any[]

  view: any[] = [700, 270];
  view1: any[] = [500, 500];
  // options pie chart
  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'below';
  legendTitle: string = 'Products';
 
  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };

  colorScheme1 = {
    domain: ['#4876FF', '#FF0000', '#FFC1C1', '#97FFFF', '#33FF99']
  };
  schemeType: string = 'ordinal'; // 'ordinal' or 'linear'

 

  constructor() { Object.assign(this, { productSales, productSalesMulti }) }

  ngOnInit(): void {
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  formatString(input: string): string {
    return input.toUpperCase()
  }

  formatNumber(input: number): number {
    return input
  }
}