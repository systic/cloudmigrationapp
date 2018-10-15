import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import AppSvc from '../../services/application.service';


@Component({
  selector: 'app-details-migration',
  templateUrl: './details-migration.component.html']
})
export class DetailsMigrationComponent implements OnInit {

  public db: object = {
    discovery: {}
  };
  public prop: any = {};
  public state: any = {
    pagination: { perPage: 5, page: 1 },
    filter: { tab: 'All', query: '' },
    profiles: [],
    selected: []
  };

  constructor(private appSvc: AppSvc) { }

  ngOnInit() {
    this.appSvc.get()
      .subscribe(res => {
        this.db = res;
      });
  }


}

