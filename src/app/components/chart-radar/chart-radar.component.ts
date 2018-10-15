import { Component, OnInit } from '@angular/core';
import AppSvc from '../../services/application.service';

@Component({
  selector: 'app-chart-radar',
  templateUrl: './chart-radar.component.html'
})
export class ChartRadarComponent implements OnInit {
  public db: any = {};
  public state: any = {};

  // Radar
  public radarChartLabels: string[] = ['Windows', 'Red Hat', 'Unix', 'Ubuntu', 'Solaris'];

  public radarChartData: any = [
    {
      data: [], label: 'OS Versions'
    }
  ];

  public radarChartColors: any = [{
    backgroundColor: 'rgba(0, 162, 224, 0.15)',
    borderWidth: 2,
    borderColor: '#00a2e0',
    pointRadius: 3,
    pointBorderWidth: 0,
    pointBackgroundColor: ['#0e3570', '#8a25c3', '#6dc24b', '#ffd92a', '#dddddd'],
    pointBorderColor: 'transparent',
    pointHoverRadius: 6,
  }];

  public radarChartOptions = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    legend: false,
    scale: {
      // Hides the scale
      ticks: {
        display: false
      },
      gridLines: {
        color: '#eaeaea'
      },
      pointLabels: {
                        // callback: function(value, index, values) {
                        //     return '$' + value;
                        // }
                        fontColor: ['#0e3570', '#8a25c3', '#6dc24b', '#ffd92a', '#dddddd'],
                    },
    }
  };

  public radarChartType: string = 'radar';

  constructor(private appSvc: AppSvc) { }


  ngOnInit() {
    this.appSvc.get()
      .subscribe(res => {
        this.db = res;
        this.state.profiles = res.profiles;
        this.radarChartData = res.osVersions;
      });
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
