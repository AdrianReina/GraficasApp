import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Colors, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Colors[] = [
    {
      backgroundColor: ['#E87764', '#F29068', '#DB9B69'],
    },
  ];

  constructor(private graficaService: GraficasService) {}

  ngOnInit(): void {
    /* this.graficaService.getUsuariosRedesSciales().subscribe((data) => {
      console.log(data);
      const labels = Object.keys(data);
      const values = Object.values(data);

      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);
    }); */
    this.graficaService
      .getUsuariosRedesScialesDonaData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      });
  }
}
