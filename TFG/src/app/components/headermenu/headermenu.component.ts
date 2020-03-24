import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headermenu',
  templateUrl: './headermenu.component.html',
  styleUrls: ['./headermenu.component.scss'],
})
export class HeadermenuComponent implements OnInit {
  /**
   * Kind of device
   */
  private mobile: boolean;

  constructor() { }

  ngOnInit() {
    // Detects if the device is a mobile device
    if (window.screen.width <= 1000) this.mobile = true;
    else this.mobile = false;
  }

}
