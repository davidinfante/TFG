import { Component, OnInit } from '@angular/core';
import {Page} from "../../interfaces/page";
import {PagesService} from "../../services/pages.service";

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
  /**
   * List of pages
   */
  pages: Page[];

  constructor(private pagesService: PagesService) { }

  ngOnInit() {
    // Detects if the device is a mobile device
    if (window.screen.width <= 1000) this.mobile = true;
    else this.mobile = false;

    // Gets all pages
    this.pagesService.pagesObs.subscribe(pages => {
      this.pages = pages;
    });
  }

}
