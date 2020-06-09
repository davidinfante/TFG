import { Component, OnInit } from '@angular/core';
import {FunctionsService} from '../../services/functions.service';
import {HeaderOption} from '../../classes/header-option';
import {HeaderOptionsService} from '../../services/header-options.service';

@Component({
  selector: 'app-userheadermenu',
  templateUrl: './userheadermenu.component.html',
  styleUrls: ['./userheadermenu.component.scss'],
})
/**
 * Header menu bar in the user pages
 * both in mobile and desktop view
 */
export class UserheadermenuComponent implements OnInit {
  /**
   * Kind of device
   */
  private mobile: boolean;
  /**
   * List of options
   */
  headerOptions: HeaderOption[];

  constructor(
    private functionsService: FunctionsService,
    private headerOptionsService: HeaderOptionsService
  ) { }

  ngOnInit() {
    // Detects if the device is a mobile device
    this.mobile = this.functionsService.isMobile();

    // Gets all header options
    this.headerOptions = this.headerOptionsService.getAllHeaderOptions();
  }

}
