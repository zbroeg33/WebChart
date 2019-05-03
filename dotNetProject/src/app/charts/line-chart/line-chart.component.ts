import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  {data: [32, 15, 63, 75, 86, 23], label: 'Sentiment Analysis'},
  {data: [12, 23, 45, 66, 46, 76], label: 'Image Recognition'},
  {data: [34, 86, 24, 45, 87, 57], label: 'Forcasting'}
];

const LINE_CHART_LABELS: string[] = ['jan', 'feb', 'mar', 'apr', 'may', 'jun'];



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio:false
  };
  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;
  ngOnInit() {
  }

  

}
