import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.scss']
})
export class DashboardDetailsComponent implements OnInit {

  public prop: any = {};

  public psvs: any = {
    ps: 175,
    vs: 1000,
    psPercent: 0,
    vsPercent: 0
  };

  public env: any = {
    dev: 200,
    test: 400,
    prod: 400,
    devPercent: 0,
    testPercent: 0,
    prodPercent: 0
  };

  source: any =
    {
      datatype: 'csv',
      datafields: [
        { name: 'Country' },
        { name: 'GDP' },
        { name: 'DebtPercent' },
        { name: 'Debt' }
      ],
      url: '../../../assets/data/tech.txt'
    };


  padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

  titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

  constructor(public router: ActivatedRoute) {

  }

  ngOnInit() {
    this.prop.logger = this.router.snapshot.params['username'];
    this.prop.type = this.router.snapshot.params['type'];
/* tslint:disable */
    this.psvs.psPercent = this.psvs.ps / (this.psvs.ps + this.psvs.vs) * 100;
    this.psvs.vsPercent = 100 - this.psvs.psPercent;

    const envSum = this.env.dev + this.env.test + this.env.prod;
    this.env.devPercent =  this.env.dev / envSum * 100;
    this.env.testPercent = this.env.test / envSum * 100;
    this.env.prodPercent = this.env.prod / envSum * 100;
    /* tslint:enable */
  }
}


