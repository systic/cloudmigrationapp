import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';


@Injectable({
  providedIn: 'root'
})
export default class ApplicationService {

  constructor(private helper: HelperService) { }
  /**
   * gets the applications
   * @returns {Observable} the applications data
   */
  get() {
    return this.helper.get('/assets/data/db.json');
  }


  /**
   * gets the application
   * @param {string} id id application
   * @returns {Observable} the application data
   */
  getApplicationById(id) {
    return this.helper.get('/applications/' + id);
  }

  /**
   * gets the application
   * @returns {Observable} the application data
   */
  getApplicationByUrl(url) {
    return this.helper.get(url);
  }

  /**
   * gets the applications on Right Filter
   * @param {any[]} filters
   * @returns {Observable} the applications data
   */
  getApplicationOnFilter(filters?: any[]) {
    let url = '/applications?';
    filters.forEach(filter => {
      if (filter.val && filter.val !== '') {
        url = url + '&' + filter.attr + '=' + filter.val;
      }
    });
    return this.helper.get(url);
  }

  /**
   * gets the applications
   * @param {any} params data
   * @param {boolean} pagination get data has pagination
   * @returns {Observable} the applications data
   */
  getApplicationData(params: any = {}, pagination) {
    let url = '/applications?';

    if (params.sort && params.sort.attr !== '') {
      url = url + '&_sort=' + params.sort.attr + '&_order=' + params.sort.orderBy;
    }
    return this.helper.get(url);
  }
}
