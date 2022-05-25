import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { CovidService } from '../../services/covid.service';

@Component({
  selector: 'app-covid-bar',
  templateUrl: './covid-bar.component.html',
  styleUrls: ['./covid-bar.component.scss'],
})
export class CovidBarComponent implements OnInit {
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [{ data: [], label: '' }],
  };

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.covidService.getCovidCasesData().subscribe(({ labels, datasets }) => {
      this.barChartData = { labels, datasets };
    });
  }
}
