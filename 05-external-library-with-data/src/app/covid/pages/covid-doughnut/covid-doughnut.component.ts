import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { CovidService } from '../../services/covid.service';

@Component({
  selector: 'app-covid-doughnut',
  templateUrl: './covid-doughnut.component.html',
  styleUrls: ['./covid-doughnut.component.css'],
})
export class CovidDoughnutComponent implements OnInit {
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.covidService.getCovidCasesData().subscribe(({ labels, datasets }) => {
      this.doughnutChartData = { labels, datasets };
    });
  }
}
