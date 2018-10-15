import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  showContent = false;
  constructor(public router: Router) {}

  /**
   * callback header
   * @param result result
   */
  callbackHeader(result) {
    this.showContent = result;
  }


}
