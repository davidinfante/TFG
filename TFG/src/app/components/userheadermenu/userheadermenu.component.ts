import { Component, OnInit } from '@angular/core';
import {FunctionsService} from "../../services/functions.service";
import {HeaderOption} from "../../interfaces/header-option";
import {HeaderOptionsService} from "../../services/header-options.service";

@Component({
  selector: 'app-userheadermenu',
  templateUrl: './userheadermenu.component.html',
  styleUrls: ['./userheadermenu.component.scss'],
})
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
