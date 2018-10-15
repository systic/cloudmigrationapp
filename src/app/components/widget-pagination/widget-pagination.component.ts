import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-widget-pagination',
  templateUrl: './widget-pagination.component.html',
  styleUrls: ['./widget-pagination.component.scss']
})
export class WidgetPaginationComponent implements OnChanges {
  // number of items available for pagination
  @Input() items = 0;

  // number of items visible on a page
  @Input() perPage: any = 5;

  // options for the perPage dropdown
  @Input() options = [{ name: 5 }, { name: 10 }, { name: 25 }, { name: 50 }];

  // outputs the number of items per page and current page
  @Output() paginationChange: EventEmitter<any> = new EventEmitter;

  // visible page
  currentPage = 0;

  // list with page numbers
  pageList = [];

  /**
   * ngOnChanges Create the page list
   */
  ngOnChanges() {
    if (this.items) {
      this.currentPage = 0;
      this.paginate();
    }
  }

  /**
   * paginate Create the page list by dividing all available items by number of items per page
   * @param {number|string} perPage Number of items to be shown per page
   */
  paginate(perPage?) {
    perPage = this.perPage === 'All' ? this.items : this.perPage;
    const pageCount = Math.ceil(Math.max(1, +this.items) / +perPage);
    this.pageList = Array.from(Array(pageCount).keys());
    this.currentPage = 0;
  }

  /**
   * changePerPage Change the selected per page itme
   * @param {number|string} perPage Number of items to be shown per page
   */
  changePerPage(value) {
    let perPage = value.name;
    // convert to number if possible
    perPage = +perPage || perPage;

    if (perPage === this.perPage) {
      return;
    }
    this.perPage = perPage;
    this.paginate(perPage);
    // trigger the pagination change event
    this.triggerPagination();
  }

  /**
   * select Change the selected visible page
   * @param {number} page The selected page
   */
  select(page) {
    if (page === this.currentPage) {
      return;
    }
    this.currentPage = page;
    // trigger the pagination change event
    this.triggerPagination();
  }

  /**
   * next Change the selected visible page
   */
  nextFunc() {
    if (this.currentPage >= this.pageList[this.pageList.length - 1]) {
      return;
    }
    this.currentPage++;
    // trigger the pagination change event
    this.triggerPagination();
  }

  /**
   * previous Change the selected visible page
   */
  preFunc() {
    if (this.currentPage === 0) {
      return;
    }
    this.currentPage--;
    // trigger the pagination change event
    this.triggerPagination();
  }

  /**
   * show all item
   */
  showAllFunc() {
    this.perPage = 'All';
    this.triggerPagination();
  }

  /**
   * triggerPagination Trigger an event containing:
   *  {number} perPage - number of items per page
   *  {number} page - active page
   */
  triggerPagination() {
    this.paginationChange.emit({ perPage: this.perPage, page: this.currentPage + 1 });
  }

}
