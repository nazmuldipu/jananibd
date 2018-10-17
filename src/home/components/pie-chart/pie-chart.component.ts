import { Component, Input } from '@angular/core';
import { PieChart } from '../../containers/services/pieChart';

// import { PieChart } from './pieChart';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  @Input('data')
  properties: PieChart = {
    color: '#30a5ff',
    current: 0,
    max: 100,
    label: 'fa-line-chart'
  };
}
