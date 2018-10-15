import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import AppSvc from '../../services/application.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public db: any = {};
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
        this.state.profiles = res.profiles;
      });
  }

  /**
   * paginate Save pagination data and fetch new api data
   * @param {any} pagination Pagination data
   */
  callBackPaginate(pagination) {
    this.state = { ...this.state, pagination: { ...pagination } };
  }

  /**
   * updateFilterList
   */
  updateFilterList(e) {
    const val = e.target.value;
    const list = _.cloneDeep(this.db.profiles);
    this.state.profiles = _.filter(list, (o) =>  o.fullName.toLowerCase().indexOf(val.toLowerCase()) >= 0 );
  }

}
