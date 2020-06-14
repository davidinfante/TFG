import { Injectable } from '@angular/core';
import {IdImage} from '../../classes/Image';
import {CheckboxArray} from '../../classes/checkboxArray';
import {Observable} from 'rxjs';
import {FunctionsService} from '../functions.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PyramidsService {
  private path = '/api/pyramids';
  private pyramids: CheckboxArray[] = [
    /**
     * Demo pyramids
     */
    {
      id: 0,
      positions: [
        {value: true, isChecked: false, img: 'c1'},   //
        {value: false, isChecked: false, img: 'd5'},
        {value: true, isChecked: false, img: 'c2'},   //
        {value: true, isChecked: false, img: 'c3'},   //
        {value: false, isChecked: false, img: 'd8'},
        {value: false, isChecked: false, img: 'd2'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd20'},
        {value: true, isChecked: false, img: 'c4'},   //
        {value: false, isChecked: false, img: 'd15'},
        {value: false, isChecked: false, img: 'd16'},
        {value: true, isChecked: false, img: 'c5'},   //
        {value: false, isChecked: false, img: 'd29'},
        // --------------------------------------
        {value: true, isChecked: false, img: 'c6'},   //
        {value: false, isChecked: false, img: 'd23'},
        {value: false, isChecked: false, img: 'd11'},
        {value: true, isChecked: false, img: 'c7'},   //
        {value: true, isChecked: false, img: 'c8'},   //
        {value: false, isChecked: false, img: 'd28'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    /**
     * Exercise pyramids
     */
    {
      id: 1,
      positions: [
        {value: true, isChecked: false, img: 'c1'},   //
        {value: true, isChecked: false, img: 'c2'},   //
        {value: false, isChecked: false, img: 'd7'},
        {value: true, isChecked: false, img: 'c3'},   //
        {value: false, isChecked: false, img: 'd9'},
        {value: false, isChecked: false, img: 'd23'},
        {value: true, isChecked: false, img: 'c4'},   //
        {value: false, isChecked: false, img: 'd20'},
        {value: false, isChecked: false, img: 'd17'},
        {value: false, isChecked: false, img: 'd25'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd8'},
        {value: false, isChecked: false, img: 'd3'},
        {value: true, isChecked: false, img: 'c5'},   //
        {value: false, isChecked: false, img: 'd14'},
        {value: false, isChecked: false, img: 'd4'},
        {value: false, isChecked: false, img: 'd1'},
        {value: false, isChecked: false, img: 'd11'},
        {value: true, isChecked: false, img: 'c6'},   //
        {value: false, isChecked: false, img: 'd19'},
        {value: false, isChecked: false, img: 'd10'},
        // --------------------------------------
        {value: true, isChecked: false, img: 'c7'},   //
        {value: false, isChecked: false, img: 'd5'},
        {value: false, isChecked: false, img: 'd15'},
        {value: false, isChecked: false, img: 'd26'},
        {value: true, isChecked: false, img: 'c8'},   //
        {value: false, isChecked: false, img: 'd13'},
        {value: true, isChecked: false, img: 'c9'},   //
        {value: true, isChecked: false, img: 'c10'},   //
        {value: false, isChecked: false, img: 'd27'},
        {value: false, isChecked: false, img: 'd21'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd18'},
        {value: false, isChecked: false, img: 'd6'},
        {value: true, isChecked: false, img: 'c11'},   //
        {value: true, isChecked: false, img: 'c12'},   //
        {value: false, isChecked: false, img: 'd24'},
        {value: false, isChecked: false, img: 'd16'},
        {value: false, isChecked: false, img: 'd28'},
        {value: false, isChecked: false, img: 'd12'},
        {value: false, isChecked: false, img: 'd22'},
        {value: false, isChecked: false, img: 'd2'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 2,
      positions: [
        {value: false, isChecked: false, img: 'd10'},
        {value: false, isChecked: false, img: 'd20'},
        {value: false, isChecked: false, img: 'd3'},
        {value: false, isChecked: false, img: 'd26'},
        {value: true, isChecked: false, img: 'c12'},  //
        {value: true, isChecked: false, img: 'c1'},  //
        {value: true, isChecked: false, img: 'c2'},  //
        {value: true, isChecked: false, img: 'c3'},  //
        {value: false, isChecked: false, img: 'd17'},
        {value: false, isChecked: false, img: 'd11'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd14'},
        {value: true, isChecked: false, img: 'c4'},  //
        {value: true, isChecked: false, img: 'c5'},  //
        {value: false, isChecked: false, img: 'd13'},
        {value: true, isChecked: false, img: 'c6'},  //
        {value: false, isChecked: false, img: 'd15'},
        {value: true, isChecked: false, img: 'c7'},  //
        {value: false, isChecked: false, img: 'd7'},
        {value: false, isChecked: false, img: 'd9'},
        {value: false, isChecked: false, img: 'd19'},
        // --------------------------------------
        {value: true, isChecked: false, img: 'c8'},  //
        {value: false, isChecked: false, img: 'd25'},
        {value: true, isChecked: false, img: 'c9'},  //
        {value: false, isChecked: false, img: 'd22'},
        {value: false, isChecked: false, img: 'd8'},
        {value: false, isChecked: false, img: 'd27'},
        {value: false, isChecked: false, img: 'd18'},
        {value: false, isChecked: false, img: 'd5'},
        {value: false, isChecked: false, img: 'd24'},
        {value: false, isChecked: false, img: 'd2'},
        // --------------------------------------
        {value: true, isChecked: false, img: 'c10'},  //
        {value: false, isChecked: false, img: 'd21'},
        {value: false, isChecked: false, img: 'd23'},
        {value: true, isChecked: false, img: 'c11'},  //
        {value: false, isChecked: false, img: 'd6'},
        {value: false, isChecked: false, img: 'd1'},
        {value: false, isChecked: false, img: 'd20'},
        {value: false, isChecked: false, img: 'd4'},
        {value: false, isChecked: false, img: 'd16'},
        {value: false, isChecked: false, img: 'd12'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 3,
      positions: [
        {value: false, isChecked: false, img: 'd7'},
        {value: false, isChecked: false, img: 'd1'},
        {value: false, isChecked: false, img: 'd13'},
        {value: false, isChecked: false, img: 'd15'},
        {value: false, isChecked: false, img: 'd9'},
        {value: false, isChecked: false, img: 'd3'},
        {value: false, isChecked: false, img: 'd19'},
        {value: true, isChecked: false, img: 'c11'},  //
        {value: false, isChecked: false, img: 'd10'},
        {value: false, isChecked: false, img: 'd24'},
        // --------------------------------------
        {value: true, isChecked: false, img: 'c12'},  //
        {value: false, isChecked: false, img: 'd4'},
        {value: true, isChecked: false, img: 'c1'},  //
        {value: false, isChecked: false, img: 'd23'},
        {value: false, isChecked: false, img: 'd11'},
        {value: true, isChecked: false, img: 'c2'},  //
        {value: false, isChecked: false, img: 'd5'},
        {value: true, isChecked: false, img: 'c3'},  //
        {value: true, isChecked: false, img: 'c4'},  //
        {value: false, isChecked: false, img: 'd12'},
        // --------------------------------------
        {value: true, isChecked: false, img: 'c5'},  //
        {value: true, isChecked: false, img: 'c6'},  //
        {value: false, isChecked: false, img: 'd2'},
        {value: false, isChecked: false, img: 'd21'},
        {value: true, isChecked: false, img: 'c7'},  //
        {value: false, isChecked: false, img: 'd17'},
        {value: false, isChecked: false, img: 'd16'},
        {value: false, isChecked: false, img: 'd25'},
        {value: false, isChecked: false, img: 'd22'},
        {value: false, isChecked: false, img: 'd8'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd18'},
        {value: false, isChecked: false, img: 'd20'},
        {value: true, isChecked: false, img: 'c8'},  //
        {value: false, isChecked: false, img: 'd27'},
        {value: true, isChecked: false, img: 'c9'},  //
        {value: false, isChecked: false, img: 'd28'},
        {value: false, isChecked: false, img: 'd6'},
        {value: false, isChecked: false, img: 'd26'},
        {value: true, isChecked: false, img: 'c10'},  //
        {value: false, isChecked: false, img: 'd14'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 4,
      positions: [
        {value: true, isChecked: false, img: 'c10'},   //
        {value: true, isChecked: false, img: 'c11'},   //
        {value: false, isChecked: false, img: 'd4'},
        {value: false, isChecked: false, img: 'd5'},
        {value: true, isChecked: false, img: 'c12'},   //
        {value: false, isChecked: false, img: 'd23'},
        {value: false, isChecked: false, img: 'd22'},
        {value: false, isChecked: false, img: 'd13'},
        {value: false, isChecked: false, img: 'd10'},
        {value: false, isChecked: false, img: 'd25'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd12'},
        {value: false, isChecked: false, img: 'd9'},
        {value: false, isChecked: false, img: 'd1'},
        {value: false, isChecked: false, img: 'd7'},
        {value: true, isChecked: false, img: 'c1'},   //
        {value: true, isChecked: false, img: 'c2'},   //
        {value: false, isChecked: false, img: 'd6'},
        {value: true, isChecked: false, img: 'c3'},   //
        {value: true, isChecked: false, img: 'c4'},   //
        {value: true, isChecked: false, img: 'c5'},   //
        // --------------------------------------
        {value: false, isChecked: false, img: 'd16'},
        {value: false, isChecked: false, img: 'd15'},
        {value: false, isChecked: false, img: 'd17'},
        {value: false, isChecked: false, img: 'd2'},
        {value: true, isChecked: false, img: 'c6'},   //
        {value: true, isChecked: false, img: 'c7'},   //
        {value: false, isChecked: false, img: 'd11'},
        {value: false, isChecked: false, img: 'd14'},
        {value: false, isChecked: false, img: 'd3'},
        {value: false, isChecked: false, img: 'd8'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd20'},
        {value: false, isChecked: false, img: 'd26'},
        {value: false, isChecked: false, img: 'd4'},
        {value: true, isChecked: false, img: 'c8'},   //
        {value: false, isChecked: false, img: 'd24'},
        {value: false, isChecked: false, img: 'd21'},
        {value: false, isChecked: false, img: 'd18'},
        {value: false, isChecked: false, img: 'd27'},
        {value: true, isChecked: false, img: 'c9'},   //
        {value: false, isChecked: false, img: 'd19'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 5,
      positions: [
        {value: true, isChecked: false, img: 'c9'},   //
        {value: false, isChecked: false, img: 'd9'},
        {value: false, isChecked: false, img: 'd2'},
        {value: false, isChecked: false, img: 'd13'},
        {value: false, isChecked: false, img: 'd15'},
        {value: true, isChecked: false, img: 'c10'},   //
        {value: false, isChecked: false, img: 'd17'},
        {value: true, isChecked: false, img: 'c11'},   //
        {value: false, isChecked: false, img: 'd25'},
        {value: true, isChecked: false, img: 'c12'},   //
        // --------------------------------------
        {value: false, isChecked: false, img: 'd23'},
        {value: false, isChecked: false, img: 'd10'},
        {value: true, isChecked: false, img: 'c1'},   //
        {value: true, isChecked: false, img: 'c2'},   //
        {value: false, isChecked: false, img: 'd24'},
        {value: false, isChecked: false, img: 'd4'},
        {value: false, isChecked: false, img: 'd1'},
        {value: false, isChecked: false, img: 'd12'},
        {value: false, isChecked: false, img: 'd18'},
        {value: false, isChecked: false, img: 'd14'},
        // --------------------------------------
        {value: true, isChecked: false, img: 'c3'},   //
        {value: false, isChecked: false, img: 'd3'},
        {value: false, isChecked: false, img: 'd7'},
        {value: false, isChecked: false, img: 'd13'},
        {value: false, isChecked: false, img: 'd5'},
        {value: false, isChecked: false, img: 'd8'},
        {value: true, isChecked: false, img: 'c4'},   //
        {value: false, isChecked: false, img: 'd22'},
        {value: false, isChecked: false, img: 'd21'},
        {value: false, isChecked: false, img: 'd6'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd16'},
        {value: false, isChecked: false, img: 'd26'},
        {value: false, isChecked: false, img: 'd19'},
        {value: true, isChecked: false, img: 'c5'},   //
        {value: false, isChecked: false, img: 'd20'},
        {value: false, isChecked: false, img: 'd27'},
        {value: false, isChecked: false, img: 'd11'},
        {value: true, isChecked: false, img: 'c6'},   //
        {value: true, isChecked: false, img: 'c7'},   //
        {value: true, isChecked: false, img: 'c8'},   //
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 6,
      positions: [
        {value: true, isChecked: false, img: 'c8'},   //
        {value: true, isChecked: false, img: 'c9'},   //
        {value: false, isChecked: false, img: 'd4'},
        {value: true, isChecked: false, img: 'c10'},   //
        {value: false, isChecked: false, img: 'd13'},
        {value: false, isChecked: false, img: 'd7'},
        {value: true, isChecked: false, img: 'c1'},   //
        {value: true, isChecked: false, img: 'c12'},   //
        {value: false, isChecked: false, img: 'd20'},
        {value: true, isChecked: false, img: 'c1'},   //
        // --------------------------------------
        {value: false, isChecked: false, img: 'd23'},
        {value: true, isChecked: false, img: 'c2'},   //
        {value: false, isChecked: false, img: 'd10'},
        {value: false, isChecked: false, img: 'd9'},
        {value: false, isChecked: false, img: 'd18'},
        {value: false, isChecked: false, img: 'd14'},
        {value: false, isChecked: false, img: 'd19'},
        {value: false, isChecked: false, img: 'd17'},
        {value: false, isChecked: false, img: 'd21'},
        {value: false, isChecked: false, img: 'd5'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd22'},
        {value: true, isChecked: false, img: 'c3'},   //
        {value: false, isChecked: false, img: 'd6'},
        {value: false, isChecked: false, img: 'd12'},
        {value: false, isChecked: false, img: 'd2'},
        {value: false, isChecked: false, img: 'd13'},
        {value: true, isChecked: false, img: 'c4'},   //
        {value: false, isChecked: false, img: 'd1'},
        {value: false, isChecked: false, img: 'd11'},
        {value: true, isChecked: false, img: 'c5'},   //
        // --------------------------------------
        {value: false, isChecked: false, img: 'd27'},
        {value: true, isChecked: false, img: 'c6'},   //
        {value: false, isChecked: false, img: 'd3'},
        {value: false, isChecked: false, img: 'd16'},
        {value: false, isChecked: false, img: 'd25'},
        {value: false, isChecked: false, img: 'd15'},
        {value: false, isChecked: false, img: 'd26'},
        {value: false, isChecked: false, img: 'd24'},
        {value: true, isChecked: false, img: 'c7'},   //
        {value: false, isChecked: false, img: 'd8'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 7,
      positions: [
        {value: false, isChecked: false, img: 'd7'},
        {value: false, isChecked: false, img: 'd17'},
        {value: false, isChecked: false, img: 'd11'},
        {value: false, isChecked: false, img: 'd29'},
        {value: true, isChecked: false, img: 'c7'},   //
        {value: true, isChecked: false, img: 'c8'},   //
        {value: true, isChecked: false, img: 'c9'},   //
        {value: false, isChecked: false, img: 'd20'},
        {value: true, isChecked: false, img: 'c10'},   //
        {value: true, isChecked: false, img: 'c11'},   //
        // --------------------------------------
        {value: false, isChecked: false, img: 'd23'},
        {value: true, isChecked: false, img: 'c12'},   //
        {value: true, isChecked: false, img: 'c1'},    //
        {value: false, isChecked: false, img: 'd21'},
        {value: false, isChecked: false, img: 'd4'},
        {value: false, isChecked: false, img: 'd28'},
        {value: false, isChecked: false, img: 'd19'},
        {value: false, isChecked: false, img: 'd27'},
        {value: false, isChecked: false, img: 'd22'},
        {value: true, isChecked: false, img: 'c2'},   //
        // --------------------------------------
        {value: true, isChecked: false, img: 'c3'},   //
        {value: false, isChecked: false, img: 'd2'},
        {value: true, isChecked: false, img: 'c4'},   //
        {value: false, isChecked: false, img: 'd12'},
        {value: false, isChecked: false, img: 'd8'},
        {value: false, isChecked: false, img: 'd9'},
        {value: false, isChecked: false, img: 'd5'},
        {value: false, isChecked: false, img: 'd13'},
        {value: false, isChecked: false, img: 'd3'},
        {value: false, isChecked: false, img: 'd10'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd15'},
        {value: true, isChecked: false, img: 'c5'},   //
        {value: false, isChecked: false, img: 'd14'},
        {value: false, isChecked: false, img: 'd6'},
        {value: false, isChecked: false, img: 'd26'},
        {value: false, isChecked: false, img: 'd16'},
        {value: false, isChecked: false, img: 'd25'},
        {value: true, isChecked: false, img: 'c6'},   //
        {value: false, isChecked: false, img: 'd1'},
        {value: false, isChecked: false, img: 'd18'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 8,
      positions: [
        {value: false, isChecked: false, img: 'd9'},
        {value: false, isChecked: false, img: 'd21'},
        {value: false, isChecked: false, img: 'd17'},
        {value: false, isChecked: false, img: 'd19'},
        {value: true, isChecked: false, img: 'c6'},   //
        {value: false, isChecked: false, img: 'd8'},
        {value: false, isChecked: false, img: 'd4'},
        {value: false, isChecked: false, img: 'd11'},
        {value: false, isChecked: false, img: 'd7'},
        {value: false, isChecked: false, img: 'd24'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd23'},
        {value: true, isChecked: false, img: 'c7'},   //
        {value: true, isChecked: false, img: 'c8'},   //
        {value: true, isChecked: false, img: 'c9'},   //
        {value: true, isChecked: false, img: 'c10'},   //
        {value: true, isChecked: false, img: 'c11'},   //
        {value: false, isChecked: false, img: 'd12'},
        {value: true, isChecked: false, img: 'c12'},   //
        {value: false, isChecked: false, img: 'd3'},
        {value: false, isChecked: false, img: 'd6'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd13'},
        {value: false, isChecked: false, img: 'd18'},
        {value: true, isChecked: false, img: 'c1'},   //
        {value: false, isChecked: false, img: 'd15'},
        {value: false, isChecked: false, img: 'd20'},
        {value: false, isChecked: false, img: 'd14'},
        {value: true, isChecked: false, img: 'c2'},   //
        {value: false, isChecked: false, img: 'd1'},
        {value: false, isChecked: false, img: 'd25'},
        {value: false, isChecked: false, img: 'd27'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd26'},
        {value: false, isChecked: false, img: 'd16'},
        {value: true, isChecked: false, img: 'c3'},   //
        {value: true, isChecked: false, img: 'c4'},   //
        {value: false, isChecked: false, img: 'd22'},
        {value: false, isChecked: false, img: 'd10'},
        {value: false, isChecked: false, img: 'd21'},
        {value: false, isChecked: false, img: 'd5'},
        {value: true, isChecked: false, img: 'c5'},   //
        {value: false, isChecked: false, img: 'd2'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 9,
      positions: [
        {value: true, isChecked: false, img: 'c5'},   //
        {value: false, isChecked: false, img: 'd7'},
        {value: false, isChecked: false, img: 'd6'},
        {value: true, isChecked: false, img: 'c6'},   //
        {value: false, isChecked: false, img: 'd1'},
        {value: true, isChecked: false, img: 'c7'},   //
        {value: true, isChecked: false, img: 'c8'},   //
        {value: true, isChecked: false, img: 'c9'},   //
        {value: false, isChecked: false, img: 'd11'},
        {value: false, isChecked: false, img: 'd5'},
        // --------------------------------------
        {value: true, isChecked: false, img: 'c10'},   //
        {value: false, isChecked: false, img: 'd12'},
        {value: true, isChecked: false, img: 'c11'},   //
        {value: true, isChecked: false, img: 'c12'},   //
        {value: false, isChecked: false, img: 'd18'},
        {value: false, isChecked: false, img: 'd4'},
        {value: false, isChecked: false, img: 'd14'},
        {value: false, isChecked: false, img: 'd20'},
        {value: false, isChecked: false, img: 'd22'},
        {value: false, isChecked: false, img: 'd8'},
        // --------------------------------------
        {value: true, isChecked: false, img: 'c1'},   //
        {value: false, isChecked: false, img: 'd2'},
        {value: false, isChecked: false, img: 'd10'},
        {value: false, isChecked: false, img: 'd24'},
        {value: false, isChecked: false, img: 'd17'},
        {value: false, isChecked: false, img: 'd19'},
        {value: false, isChecked: false, img: 'd28'},
        {value: true, isChecked: false, img: 'c2'},   //
        {value: false, isChecked: false, img: 'd15'},
        {value: false, isChecked: false, img: 'd21'},
        // --------------------------------------
        {value: true, isChecked: false, img: 'c3'},   //
        {value: true, isChecked: false, img: 'c4'},   //
        {value: false, isChecked: false, img: 'd16'},
        {value: false, isChecked: false, img: 'd25'},
        {value: false, isChecked: false, img: 'd3'},
        {value: false, isChecked: false, img: 'd27'},
        {value: false, isChecked: false, img: 'd13'},
        {value: false, isChecked: false, img: 'd26'},
        {value: false, isChecked: false, img: 'd23'},
        {value: false, isChecked: false, img: 'd9'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 10,
      positions: [
        {value: false, isChecked: false, img: 'd26'},
        {value: true, isChecked: false, img: 'c4'},   //
        {value: false, isChecked: false, img: 'd2'},
        {value: false, isChecked: false, img: 'd18'},
        {value: true, isChecked: false, img: 'c5'},   //
        {value: true, isChecked: false, img: 'c6'},   //
        {value: false, isChecked: false, img: 'd11'},
        {value: false, isChecked: false, img: 'd6'},
        {value: false, isChecked: false, img: 'd1'},
        {value: false, isChecked: false, img: 'd27'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd15'},
        {value: false, isChecked: false, img: 'd5'},
        {value: true, isChecked: false, img: 'c7'},   //
        {value: false, isChecked: false, img: 'd22'},
        {value: false, isChecked: false, img: 'd4'},
        {value: false, isChecked: false, img: 'd8'},
        {value: true, isChecked: false, img: 'c8'},   //
        {value: false, isChecked: false, img: 'd19'},
        {value: false, isChecked: false, img: 'd9'},
        {value: false, isChecked: false, img: 'd17'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd23'},
        {value: true, isChecked: false, img: 'c9'},   //
        {value: true, isChecked: false, img: 'c10'},   //
        {value: false, isChecked: false, img: 'd20'},
        {value: false, isChecked: false, img: 'd21'},
        {value: false, isChecked: false, img: 'd12'},
        {value: false, isChecked: false, img: 'd7'},
        {value: false, isChecked: false, img: 'd10'},
        {value: false, isChecked: false, img: 'd25'},
        {value: false, isChecked: false, img: 'd16'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd14'},
        {value: true, isChecked: false, img: 'c11'},   //
        {value: true, isChecked: false, img: 'c12'},   //
        {value: true, isChecked: false, img: 'c1'},   //
        {value: true, isChecked: false, img: 'c2'},   //
        {value: false, isChecked: false, img: 'd3'},
        {value: true, isChecked: false, img: 'c3'},   //
        {value: false, isChecked: false, img: 'd19'},
        {value: false, isChecked: false, img: 'd24'},
        {value: false, isChecked: false, img: 'd13'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 11,
      positions: [
        {value: true, isChecked: false, img: 'c3'},   //
        {value: false, isChecked: false, img: 'd20'},
        {value: true, isChecked: false, img: 'c4'},   //
        {value: false, isChecked: false, img: 'd7'},
        {value: true, isChecked: false, img: 'c5'},   //
        {value: true, isChecked: false, img: 'c6'},   //
        {value: true, isChecked: false, img: 'c7'},   //
        {value: false, isChecked: false, img: 'd21'},
        {value: false, isChecked: false, img: 'd9'},
        {value: true, isChecked: false, img: 'c8'},   //
        // --------------------------------------
        {value: false, isChecked: false, img: 'd8'},
        {value: false, isChecked: false, img: 'd17'},
        {value: false, isChecked: false, img: 'd1'},
        {value: false, isChecked: false, img: 'd15'},
        {value: false, isChecked: false, img: 'd3'},
        {value: false, isChecked: false, img: 'd2'},
        {value: false, isChecked: false, img: 'd11'},
        {value: false, isChecked: false, img: 'd5'},
        {value: false, isChecked: false, img: 'd4'},
        {value: false, isChecked: false, img: 'd22'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd23'},
        {value: true, isChecked: false, img: 'c9'},   //
        {value: false, isChecked: false, img: 'd16'},
        {value: true, isChecked: false, img: 'c10'},   //
        {value: false, isChecked: false, img: 'd13'},
        {value: false, isChecked: false, img: 'd6'},
        {value: true, isChecked: false, img: 'c11'},   //
        {value: false, isChecked: false, img: 'd12'},
        {value: false, isChecked: false, img: 'd18'},
        {value: true, isChecked: false, img: 'c12'},   //
        // --------------------------------------
        {value: false, isChecked: false, img: 'd19'},
        {value: true, isChecked: false, img: 'c1'},   //
        {value: false, isChecked: false, img: 'd28'},
        {value: false, isChecked: false, img: 'd14'},
        {value: false, isChecked: false, img: 'd27'},
        {value: true, isChecked: false, img: 'c2'},   //
        {value: false, isChecked: false, img: 'd25'},
        {value: false, isChecked: false, img: 'd24'},
        {value: false, isChecked: false, img: 'd26'},
        {value: false, isChecked: false, img: 'd10'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 12,
      positions: [
        {value: true, isChecked: false, img: 'c2'},   //
        {value: false, isChecked: false, img: 'd15'},
        {value: true, isChecked: false, img: 'c3'},   //
        {value: false, isChecked: false, img: 'd17'},
        {value: true, isChecked: false, img: 'c4'},   //
        {value: false, isChecked: false, img: 'd28'},
        {value: false, isChecked: false, img: 'd24'},
        {value: false, isChecked: false, img: 'd3'},
        {value: false, isChecked: false, img: 'd27'},
        {value: false, isChecked: false, img: 'd21'},
        // --------------------------------------
        {value: true, isChecked: false, img: 'c5'},   //
        {value: false, isChecked: false, img: 'd26'},
        {value: false, isChecked: false, img: 'd9'},
        {value: false, isChecked: false, img: 'd19'},
        {value: false, isChecked: false, img: 'd25'},
        {value: false, isChecked: false, img: 'd5'},
        {value: false, isChecked: false, img: 'd13'},
        {value: true, isChecked: false, img: 'c6'},   //
        {value: false, isChecked: false, img: 'd16'},
        {value: false, isChecked: false, img: 'd8'},
        // --------------------------------------
        {value: false, isChecked: false, img: 'd22'},
        {value: false, isChecked: false, img: 'd20'},
        {value: true, isChecked: false, img: 'c7'},   //
        {value: false, isChecked: false, img: 'd2'},
        {value: true, isChecked: false, img: 'c8'},   //
        {value: false, isChecked: false, img: 'd11'},
        {value: false, isChecked: false, img: 'd7'},
        {value: false, isChecked: false, img: 'd23'},
        {value: false, isChecked: false, img: 'd18'},
        {value: true, isChecked: false, img: 'c9'},   //
        // --------------------------------------
        {value: false, isChecked: false, img: 'd4'},
        {value: false, isChecked: false, img: 'd6'},
        {value: true, isChecked: false, img: 'c10'},   //
        {value: false, isChecked: false, img: 'd10'},
        {value: false, isChecked: false, img: 'd1'},
        {value: true, isChecked: false, img: 'c11'},   //
        {value: false, isChecked: false, img: 'd14'},
        {value: true, isChecked: false, img: 'c12'},   //
        {value: false, isChecked: false, img: 'd12'},
        {value: true, isChecked: false, img: 'c1'},   //
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
  ];

  constructor(
    private functionsService: FunctionsService,
    private httpClient: HttpClient
  ) { }

  /**
   * Gets all images from the database
   */
  queryImages(): Observable<any> {
    return this.httpClient.get(this.functionsService.getBackendUrl() + this.path + '/');
  }

  /**
   * Returns a pyramids exercise by it's Id
   */
  searchPositionsById(id: number) {
    return {
      ...this.pyramids.find(pyra => {
        return pyra.id === id;
      })
    };
  }

  /**
   * Get the positions array by it's Id
   */
  getPositionsArray(id: number) {
    return [...this.searchPositionsById(id).positions];
  }

  /**
   * Returns the Pyramids array length
   */
  getPyramidsLength() {
    return this.pyramids.length;
  }

  /**
   * Checks if the value and isChecked match
   * then returns the number of matches
   */
  numberOfCorrectAnswers(actualPyramids: number): {matches: number, errors: number} {
    return this.pyramids[actualPyramids].numberOfMatches();
  }
}
