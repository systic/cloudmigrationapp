import { Component, OnInit } from '@angular/core';
import AppSvc from '../../services/application.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  public db: any = {};

  constructor(
    private appSvc: AppSvc
  ) { }

  ngOnInit() {
    this.appSvc.get()
    .subscribe(res => {
      this.db = res;
    });
  }

}
