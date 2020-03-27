import { Component, OnInit } from '@angular/core';
import {Page} from "../../interfaces/page";
import {PagesService} from "../../services/pages.service";
import {FunctionsService} from "../../services/functions.service";

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

  constructor(
      private functionsService: FunctionsService,
      private pagesService: PagesService
  ) { }

  ngOnInit() {
    // Detects if the device is a mobile device
    this.mobile = this.functionsService.isMobile();

    // Gets all pages
    this.pages = this.pagesService.getAllPages();
  }

}
