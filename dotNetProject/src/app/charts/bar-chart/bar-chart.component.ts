import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[]= [
  {data: [87, 45 ,76 ,23, 11 ,55, 67], label: 'Q3 sales'},
  {data: [95, 53 ,86 ,45, 23 ,64, 86], label: 'Q4 sales'},
]

const SAMPLE_BARCHART_LABELS: string[] = ['w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7'];
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  ngOnInit() {
  }

}
