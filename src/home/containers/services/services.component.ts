import { Component, OnInit } from '@angular/core';
import { single, multi } from './data';
import { PieChart } from './pieChart';
@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single, multi });
  }

  onSelect(event) {
    console.log(event);
  }

  //ProgressBars
  public pbar1: PieChart = {
    color: '#1ebfae',
    max: 100,
    label: 'Server Solutions',
    current: 93
  };
  public pbar2: PieChart = {
    color: '#30a5ff',
    max: 100,
    label: 'Fiber Connectivity',
    current: 96
  };
  public pbar3: PieChart = {
    color: '#ffb53e',
    max: 100,
    label: 'Power Backup Solutions',
    current: 91
  };
  public pbar4: PieChart = {
    color: '#f9243f',
    max: 100,
    label: 'Online Technical Support',
    current: 97
  };
}
