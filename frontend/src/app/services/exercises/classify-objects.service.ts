import { Injectable } from '@angular/core';
import {IdImage} from '../../classes/image';
import {CheckboxArray} from '../../classes/checkboxArray';
import {FunctionsService} from '../functions.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassifyObjectsService {
  private path = '/api/classifyObjects';
  private series: CheckboxArray[] = [
    /**
     * Exercise Series
     */
    {
      id: 0,
      positions: [
        {value: false, isChecked: false, img: 'co4'},
        {value: true, isChecked: false, img: 'he1'},  //
        {value: true, isChecked: false, img: 'cu1'},  //
        {value: false, isChecked: false, img: 'co5'},
        {value: true, isChecked: false, img: 'co1'},  //
        {value: true, isChecked: false, img: 'he2'},  //
        // ----------------------------------------
        {value: false, isChecked: false, img: 'co6'},
        {value: true, isChecked: false, img: 'cu2'},  //
        {value: true, isChecked: false, img: 'co2'},  //
        {value: true, isChecked: false, img: 'co3'},  //
        {value: false, isChecked: false, img: 'co7'},
        {value: false, isChecked: false, img: 'co8'},
        // ----------------------------------------
        {value: true, isChecked: false, img: 'he3'},  //
        {value: false, isChecked: false, img: 'co9'},
        {value: false, isChecked: false, img: 'co10'},
        {value: false, isChecked: false, img: 'co11'},
        {value: true, isChecked: false, img: 'cu3'},  //
        {value: false, isChecked: false, img: 'co12'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 1,
      positions: [
        {value: false, isChecked: false, img: 'co5'},
        {value: true, isChecked: false, img: 'he1'},  //
        {value: false, isChecked: false, img: 'co6'},
        {value: true, isChecked: false, img: 'co1'},  //
        {value: false, isChecked: false, img: 'co7'},
        {value: true, isChecked: false, img: 'co2'},  //
        {value: false, isChecked: false, img: 'co8'},
        {value: true, isChecked: false, img: 'cu1'},  //
        // ----------------------------------------
        {value: true, isChecked: false, img: 'co3'},  //
        {value: false, isChecked: false, img: 'co9'},
        {value: true, isChecked: false, img: 'co4'},  //
        {value: true, isChecked: false, img: 'he2'},  //
        {value: false, isChecked: false, img: 'co10'},
        {value: false, isChecked: false, img: 'co11'},
        {value: false, isChecked: false, img: 'co12'},
        {value: true, isChecked: false, img: 'cu2'},  //
        // ----------------------------------------
        {value: true, isChecked: false, img: 'he3'},  //
        {value: true, isChecked: false, img: 'cu3'},  //
        {value: true, isChecked: false, img: 'he4'},  //
        {value: true, isChecked: false, img: 'cu4'},  //
        {value: false, isChecked: false, img: 'co13'},
        {value: false, isChecked: false, img: 'co14'},
        {value: false, isChecked: false, img: 'co15'},
        {value: false, isChecked: false, img: 'co16'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 2,
      positions: [
        {value: true, isChecked: false, img: 'co1'},  //
        {value: false, isChecked: false, img: 'cu5'},
        {value: true, isChecked: false, img: 'co2'},  //
        {value: false, isChecked: false, img: 'co5'},
        {value: true, isChecked: false, img: 'cu1'},  //
        {value: true, isChecked: false, img: 'cu2'},  //
        {value: false, isChecked: false, img: 'co6'},
        {value: false, isChecked: false, img: 'co7'},
        // ----------------------------------------
        {value: true, isChecked: false, img: 'cu3'},  //
        {value: true, isChecked: false, img: 'cu4'},  //
        {value: true, isChecked: false, img: 'tr1'},  //
        {value: false, isChecked: false, img: 'co8'},
        {value: false, isChecked: false, img: 'cu6'},
        {value: true, isChecked: false, img: 'co3'},  //
        {value: true, isChecked: false, img: 'he1'},  //
        {value: false, isChecked: false, img: 'co9'},
        // ----------------------------------------
        {value: false, isChecked: false, img: 'co10'},
        {value: false, isChecked: false, img: 'cu7'},
        {value: true, isChecked: false, img: 'he2'},  //
        {value: true, isChecked: false, img: 'tr2'},  //
        {value: true, isChecked: false, img: 'he3'},  //
        {value: true, isChecked: false, img: 'he4'},  //
        {value: true, isChecked: false, img: 'co4'},  //
        {value: false, isChecked: false, img: 'co11'},
        // ----------------------------------------
        {value: false, isChecked: false, img: 'co12'},
        {value: true, isChecked: false, img: 'tr3'},  //
        {value: false, isChecked: false, img: 'co13'},
        {value: true, isChecked: false, img: 'tr4'},  //
        {value: false, isChecked: false, img: 'cu8'},
        {value: false, isChecked: false, img: 'co14'},
        {value: false, isChecked: false, img: 'co15'},
        {value: false, isChecked: false, img: 'cu9'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 3,
      positions: [
        {value: false, isChecked: false, img: 'co6'},
        {value: true, isChecked: false, img: 'co1'},  //
        {value: false, isChecked: false, img: 'cu6'},
        {value: true, isChecked: false, img: 'tr1'},  //
        {value: true, isChecked: false, img: 'co2'},  //
        {value: false, isChecked: false, img: 'he6'},
        {value: false, isChecked: false, img: 'co7'},
        {value: false, isChecked: false, img: 'he7'},
        {value: true, isChecked: false, img: 'he1'},  //
        {value: false, isChecked: false, img: 'cu7'},
        // ----------------------------------------
        {value: true, isChecked: false, img: 'co3'},  //
        {value: true, isChecked: false, img: 'co4'},  //
        {value: true, isChecked: false, img: 'cu1'},  //
        {value: true, isChecked: false, img: 'cu2'},  //
        {value: false, isChecked: false, img: 'co8'},
        {value: true, isChecked: false, img: 'tr2'},  //
        {value: true, isChecked: false, img: 'tr3'},  //
        {value: false, isChecked: false, img: 'he8'},
        {value: true, isChecked: false, img: 'co5'},  //
        {value: false, isChecked: false, img: 'cu8'},
        // ----------------------------------------
        {value: false, isChecked: false, img: 'he9'},
        {value: true, isChecked: false, img: 'he2'},  //
        {value: true, isChecked: false, img: 'he3'},  //
        {value: true, isChecked: false, img: 'tr4'},  //
        {value: true, isChecked: false, img: 'cu3'},  //
        {value: false, isChecked: false, img: 'he10'},
        {value: false, isChecked: false, img: 'co9'},
        {value: false, isChecked: false, img: 'he11'},
        {value: true, isChecked: false, img: 'cu4'},  //
        {value: false, isChecked: false, img: 'cu9'},
        // ----------------------------------------
        {value: false, isChecked: false, img: 'co10'},
        {value: false, isChecked: false, img: 'he12'},
        {value: true, isChecked: false, img: 'cu5'},  //
        {value: true, isChecked: false, img: 'he4'},  //
        {value: true, isChecked: false, img: 'tr5'},  //
        {value: false, isChecked: false, img: 'he13'},
        {value: false, isChecked: false, img: 'cu10'},
        {value: true, isChecked: false, img: 'he5'},  //
        {value: false, isChecked: false, img: 'cu11'},
        {value: false, isChecked: false, img: 'co11'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 4,
      positions: [
        {value: true, isChecked: false, img: 'co1'},  //
        {value: true, isChecked: false, img: 'he1'},  //
        {value: false, isChecked: false, img: 'cu7'},
        {value: true, isChecked: false, img: 'cu1'},  //
        {value: true, isChecked: false, img: 'de1'},  //
        {value: false, isChecked: false, img: 'he7'},
        {value: false, isChecked: false, img: 'co7'},
        {value: false, isChecked: false, img: 'tr7'},
        {value: false, isChecked: false, img: 'he8'},
        {value: false, isChecked: false, img: 'co8'},
        {value: false, isChecked: false, img: 'cu8'},
        {value: false, isChecked: false, img: 'co9'},
        // ----------------------------------------
        {value: true, isChecked: false, img: 'co2'},  //
        {value: true, isChecked: false, img: 'co3'},  //
        {value: true, isChecked: false, img: 'de2'},  //
        {value: true, isChecked: false, img: 'he2'},  //
        {value: false, isChecked: false, img: 'he9'},
        {value: false, isChecked: false, img: 'tr8'},
        {value: false, isChecked: false, img: 'co10'},
        {value: true, isChecked: false, img: 'tr1'},  //
        {value: false, isChecked: false, img: 'cu9'},
        {value: true, isChecked: false, img: 'cu2'},  //
        {value: false, isChecked: false, img: 'tr9'},
        {value: true, isChecked: false, img: 'tr2'},  //
        // ----------------------------------------
        {value: true, isChecked: false, img: 'he3'},  //
        {value: true, isChecked: false, img: 'tr3'},  //
        {value: false, isChecked: false, img: 'co11'},
        {value: false, isChecked: false, img: 'tr10'},
        {value: true, isChecked: false, img: 'cu3'},  //
        {value: false, isChecked: false, img: 'cu10'},
        {value: true, isChecked: false, img: 'tr4'},  //
        {value: true, isChecked: false, img: 'cu4'},  //
        {value: true, isChecked: false, img: 'co4'},  //
        {value: true, isChecked: false, img: 'tr5'},  //
        {value: false, isChecked: false, img: 'he10'},
        {value: false, isChecked: false, img: 'co12'},
        // ----------------------------------------
        {value: true, isChecked: false, img: 'co5'},  //
        {value: true, isChecked: false, img: 'co6'},  //
        {value: true, isChecked: false, img: 'de3'},  //
        {value: true, isChecked: false, img: 'de4'},  //
        {value: true, isChecked: false, img: 'cu5'},  //
        {value: false, isChecked: false, img: 'co13'},
        {value: false, isChecked: false, img: 'cu11'},
        {value: false, isChecked: false, img: 'he11'},
        {value: true, isChecked: false, img: 'de5'},  //
        {value: false, isChecked: false, img: 'tr11'},
        {value: true, isChecked: false, img: 'tr6'},  //
        {value: true, isChecked: false, img: 'he4'},  //
        // ----------------------------------------
        {value: false, isChecked: false, img: 'cu12'},
        {value: true, isChecked: false, img: 'he5'},  //
        {value: false, isChecked: false, img: 'tr12'},
        {value: false, isChecked: false, img: 'he12'},
        {value: true, isChecked: false, img: 'cu6'},  //
        {value: true, isChecked: false, img: 'he6'},  //
        {value: false, isChecked: false, img: 'he14'},
        {value: false, isChecked: false, img: 'co14'},
        {value: false, isChecked: false, img: 'co16'},
        {value: false, isChecked: false, img: 'he13'},
        {value: true, isChecked: false, img: 'de6'},  //
        {value: false, isChecked: false, img: 'co15'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 5,
      positions: [
        {value: true, isChecked: false, img: 'he1'},  //
        {value: false, isChecked: false, img: 'cu7'},
        {value: true, isChecked: false, img: 'cu1'},  //
        {value: false, isChecked: false, img: 'he7'},
        {value: false, isChecked: false, img: 'co7'},
        {value: true, isChecked: false, img: 'co1'},  //
        {value: false, isChecked: false, img: 'tr7'},
        {value: false, isChecked: false, img: 'he8'},
        {value: true, isChecked: false, img: 'de1'},  //
        {value: false, isChecked: false, img: 'co8'},
        {value: false, isChecked: false, img: 'cu8'},
        {value: false, isChecked: false, img: 'co9'},
        // ----------------------------------------
        {value: true, isChecked: false, img: 'tr1'},  //
        {value: true, isChecked: false, img: 'co2'},  //
        {value: true, isChecked: false, img: 'co3'},  //
        {value: true, isChecked: false, img: 'de2'},  //
        {value: true, isChecked: false, img: 'he2'},  //
        {value: false, isChecked: false, img: 'he9'},
        {value: false, isChecked: false, img: 'tr8'},
        {value: false, isChecked: false, img: 'co10'},
        {value: false, isChecked: false, img: 'cu9'},
        {value: true, isChecked: false, img: 'cu2'},  //
        {value: false, isChecked: false, img: 'tr9'},
        {value: true, isChecked: false, img: 'tr2'},  //
        // ----------------------------------------
        {value: true, isChecked: false, img: 'he3'},  //
        {value: true, isChecked: false, img: 'tr3'},  //
        {value: false, isChecked: false, img: 'co11'},
        {value: false, isChecked: false, img: 'tr10'},
        {value: true, isChecked: false, img: 'cu3'},  //
        {value: true, isChecked: false, img: 'cu4'},  //
        {value: false, isChecked: false, img: 'cu10'},
        {value: true, isChecked: false, img: 'tr4'},  //
        {value: false, isChecked: false, img: 'co12'},
        {value: true, isChecked: false, img: 'co4'},  //
        {value: true, isChecked: false, img: 'tr5'},  //
        {value: false, isChecked: false, img: 'he10'},
        // ----------------------------------------
        {value: false, isChecked: false, img: 'co13'},
        {value: true, isChecked: false, img: 'co5'},  //
        {value: true, isChecked: false, img: 'de3'},  //
        {value: false, isChecked: false, img: 'he11'},
        {value: true, isChecked: false, img: 'de4'},  //
        {value: true, isChecked: false, img: 'co6'},  //
        {value: true, isChecked: false, img: 'cu5'},  //
        {value: false, isChecked: false, img: 'cu11'},
        {value: true, isChecked: false, img: 'de5'},  //
        {value: true, isChecked: false, img: 'tr6'},  //
        {value: false, isChecked: false, img: 'tr11'},
        {value: true, isChecked: false, img: 'he4'},  //
        // ----------------------------------------
        {value: false, isChecked: false, img: 'cu12'},
        {value: false, isChecked: false, img: 'tr12'},
        {value: false, isChecked: false, img: 'he12'},
        {value: true, isChecked: false, img: 'cu6'},  //
        {value: true, isChecked: false, img: 'he5'},  //
        {value: false, isChecked: false, img: 'he14'},
        {value: false, isChecked: false, img: 'co14'},
        {value: true, isChecked: false, img: 'de6'},  //
        {value: false, isChecked: false, img: 'co16'},
        {value: false, isChecked: false, img: 'he13'},
        {value: true, isChecked: false, img: 'he6'},  //
        {value: false, isChecked: false, img: 'co15'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 6,
      positions: [
        {value: false, isChecked: false, img: 'he7'},
        {value: false, isChecked: false, img: 'cu7'},
        {value: true, isChecked: false, img: 'cu1'},  //
        {value: false, isChecked: false, img: 'co7'},
        {value: false, isChecked: false, img: 'tr7'},
        {value: true, isChecked: false, img: 'de1'},  //
        {value: false, isChecked: false, img: 'he8'},
        {value: true, isChecked: false, img: 'he1'},  //
        {value: false, isChecked: false, img: 'co8'},
        {value: false, isChecked: false, img: 'cu8'},
        {value: false, isChecked: false, img: 'co9'},
        {value: true, isChecked: false, img: 'co1'},  //
        // ----------------------------------------
        {value: true, isChecked: false, img: 'co2'},  //
        {value: true, isChecked: false, img: 'co3'},  //
        {value: false, isChecked: false, img: 'tr8'},
        {value: true, isChecked: false, img: 'de2'},  //
        {value: false, isChecked: false, img: 'he9'},
        {value: false, isChecked: false, img: 'co10'},
        {value: true, isChecked: false, img: 'he2'},  //
        {value: true, isChecked: false, img: 'tr1'},  //
        {value: false, isChecked: false, img: 'cu9'},
        {value: true, isChecked: false, img: 'tr2'},  //
        {value: true, isChecked: false, img: 'cu2'},  //
        {value: false, isChecked: false, img: 'tr9'},
        // ----------------------------------------
        {value: true, isChecked: false, img: 'cu3'},  //
        {value: true, isChecked: false, img: 'he3'},  //
        {value: true, isChecked: false, img: 'tr3'},  //
        {value: false, isChecked: false, img: 'co11'},
        {value: false, isChecked: false, img: 'tr10'},
        {value: true, isChecked: false, img: 'co4'},  //
        {value: false, isChecked: false, img: 'cu10'},
        {value: true, isChecked: false, img: 'tr4'},  //
        {value: true, isChecked: false, img: 'tr5'},  //
        {value: false, isChecked: false, img: 'he10'},
        {value: true, isChecked: false, img: 'cu4'},  //
        {value: false, isChecked: false, img: 'co12'},
        // ----------------------------------------
        {value: true, isChecked: false, img: 'de3'},  //
        {value: true, isChecked: false, img: 'co5'},  //
        {value: false, isChecked: false, img: 'co13'},
        {value: true, isChecked: false, img: 'co6'},  //
        {value: false, isChecked: false, img: 'cu11'},
        {value: true, isChecked: false, img: 'de4'},  //
        {value: false, isChecked: false, img: 'he11'},
        {value: true, isChecked: false, img: 'cu5'},  //
        {value: true, isChecked: false, img: 'de5'},  //
        {value: false, isChecked: false, img: 'tr11'},
        {value: true, isChecked: false, img: 'tr6'},  //
        {value: true, isChecked: false, img: 'he4'},  //
        // ----------------------------------------
        {value: false, isChecked: false, img: 'cu12'},
        {value: true, isChecked: false, img: 'he5'},  //
        {value: false, isChecked: false, img: 'tr12'},
        {value: true, isChecked: false, img: 'cu6'},  //
        {value: false, isChecked: false, img: 'he12'},
        {value: true, isChecked: false, img: 'he6'},  //
        {value: false, isChecked: false, img: 'he14'},
        {value: false, isChecked: false, img: 'co14'},
        {value: true, isChecked: false, img: 'de6'},  //
        {value: false, isChecked: false, img: 'co16'},
        {value: false, isChecked: false, img: 'he13'},
        {value: false, isChecked: false, img: 'co15'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      id: 7,
      positions: [
        {value: false, isChecked: false, img: 'cu7'},
        {value: true, isChecked: false, img: 'co1'},  //
        {value: false, isChecked: false, img: 'he7'},
        {value: false, isChecked: false, img: 'co7'},
        {value: true, isChecked: false, img: 'he1'},  //
        {value: false, isChecked: false, img: 'tr7'},
        {value: false, isChecked: false, img: 'he8'},
        {value: true, isChecked: false, img: 'cu1'},  //
        {value: false, isChecked: false, img: 'co8'},
        {value: false, isChecked: false, img: 'cu8'},
        {value: true, isChecked: false, img: 'de1'},  //
        {value: false, isChecked: false, img: 'co9'},
        // ----------------------------------------
        {value: true, isChecked: false, img: 'co2'},  //
        {value: true, isChecked: false, img: 'co3'},  //
        {value: false, isChecked: false, img: 'he9'},
        {value: false, isChecked: false, img: 'tr8'},
        {value: true, isChecked: false, img: 'de2'},  //
        {value: true, isChecked: false, img: 'he2'},  //
        {value: false, isChecked: false, img: 'co10'},
        {value: false, isChecked: false, img: 'cu9'},
        {value: true, isChecked: false, img: 'tr1'},  //
        {value: false, isChecked: false, img: 'tr9'},
        {value: true, isChecked: false, img: 'cu2'},  //
        {value: true, isChecked: false, img: 'tr2'},  //
        // ----------------------------------------
        {value: true, isChecked: false, img: 'he3'},  //
        {value: true, isChecked: false, img: 'tr3'},  //
        {value: false, isChecked: false, img: 'co11'},
        {value: false, isChecked: false, img: 'tr10'},
        {value: true, isChecked: false, img: 'tr4'},  //
        {value: true, isChecked: false, img: 'cu3'},  //
        {value: false, isChecked: false, img: 'cu10'},
        {value: true, isChecked: false, img: 'cu4'},  //
        {value: false, isChecked: false, img: 'he10'},
        {value: false, isChecked: false, img: 'co12'},
        {value: true, isChecked: false, img: 'co4'},  //
        {value: true, isChecked: false, img: 'tr5'},  //
        // ----------------------------------------
        {value: true, isChecked: false, img: 'co5'},  //
        {value: true, isChecked: false, img: 'co6'},  //
        {value: false, isChecked: false, img: 'co13'},
        {value: true, isChecked: false, img: 'de3'},  //
        {value: true, isChecked: false, img: 'de4'},  //
        {value: true, isChecked: false, img: 'cu5'},  //
        {value: false, isChecked: false, img: 'cu11'},
        {value: true, isChecked: false, img: 'tr6'},  //
        {value: true, isChecked: false, img: 'he4'},  //
        {value: false, isChecked: false, img: 'he11'},
        {value: true, isChecked: false, img: 'de5'},  //
        {value: false, isChecked: false, img: 'tr11'},
        // ----------------------------------------
        {value: false, isChecked: false, img: 'cu12'},
        {value: false, isChecked: false, img: 'tr12'},
        {value: true, isChecked: false, img: 'cu6'},  //
        {value: false, isChecked: false, img: 'he12'},
        {value: true, isChecked: false, img: 'he5'},  //
        {value: true, isChecked: false, img: 'he6'},  //
        {value: false, isChecked: false, img: 'he14'},
        {value: false, isChecked: false, img: 'co16'},
        {value: false, isChecked: false, img: 'co14'},
        {value: false, isChecked: false, img: 'he13'},
        {value: false, isChecked: false, img: 'co15'},
        {value: true, isChecked: false, img: 'de6'},  //
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
  ];
  /**
   * Exercise Demo
   */
  private demo: CheckboxArray[] = [
    {
      /**
       * Items
       */
      id: 0,
      positions: [
        {value: false, isChecked: false, img: 'in3'},
        {value: false, isChecked: false, img: 'tr3'},
        {value: false, isChecked: false, img: 'mu4'},
        {value: false, isChecked: false, img: 'tr4'},
        {value: false, isChecked: false, img: 'cu2'},
        {value: false, isChecked: false, img: 'mu1'},
        {value: false, isChecked: false, img: 'cu3'},
        {value: false, isChecked: false, img: 'cu4'},
        {value: false, isChecked: false, img: 'in1'},
        {value: false, isChecked: false, img: 'in4'},
        {value: false, isChecked: false, img: 'tr1'},
        {value: false, isChecked: false, img: 'cu1'},
        {value: false, isChecked: false, img: 'tr2'},
        {value: false, isChecked: false, img: 'mu3'},
        {value: false, isChecked: false, img: 'in2'},
        {value: false, isChecked: false, img: 'mu2'},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      /**
       * Transport - Transporte
       */
      id: 1,
      positions: [
        {value: false, isChecked: false, img: null},
        {value: false, isChecked: false, img: null},
        {value: false, isChecked: false, img: null},
        {value: false, isChecked: false, img: null},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      /**
       * Body - Cuerpo
       */
      id: 2,
      positions: [
        {value: false, isChecked: false, img: null},
        {value: false, isChecked: false, img: null},
        {value: false, isChecked: false, img: null},
        {value: false, isChecked: false, img: null},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      /**
       * Instruments - Instrumentos
       */
      id: 3,
      positions: [
        {value: false, isChecked: false, img: null},
        {value: false, isChecked: false, img: null},
        {value: false, isChecked: false, img: null},
        {value: false, isChecked: false, img: null},
      ],
      allValueAndIsCheckedMatch: CheckboxArray.prototype.allValueAndIsCheckedMatch,
      resetIsChecked: CheckboxArray.prototype.resetIsChecked,
      numberOfMatches: CheckboxArray.prototype.numberOfMatches
    },
    {
      /**
       * Furniture - Muebles
       */
      id: 4,
      positions: [
        {value: false, isChecked: false, img: null},
        {value: false, isChecked: false, img: null},
        {value: false, isChecked: false, img: null},
        {value: false, isChecked: false, img: null},
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
   * Returns a positions exercise by it's Id
   */
  searchPositionsById(id: number) {
    return {
      ...this.series.find(ser => {
        return ser.id === id;
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
   * Returns the Series array length
   */
  getSeriesLength() {
    return this.series.length;
  }

  /**
   * Checks if the value and isChecked match
   * then returns the number of matches
   */
  numberOfCorrectAnswers(actualSeries: number): {matches: number, errors: number} {
    return this.series[actualSeries].numberOfMatches();
  }

  /**
   * Counts the number of correct options
   * in a series
   */
  numberOfCorrectOptions(actualSeries: number): number {
    let counter = 0;

    for (const pos of this.series[actualSeries].positions) {
      if (pos.value) {
        ++counter;
      }
    }

    return counter;
  }

  /**
   * DEMO
   */

  /**
   * Returns a positions exercise by it's Id
   */
  demoSearchPositionsById(id: number) {
    return {
      ...this.demo.find(ser => {
        return ser.id === id;
      })
    };
  }

  /**
   * Get the positions array by it's Id
   */
  demoGetPositionsArray(id: number) {
    return [...this.demoSearchPositionsById(id).positions];
  }

  /**
   * Checks if the demo answer is correct
   */
  demoCheckAnswer(): boolean {
    for (let i = 0; i < this.demo.length; i++) {
      for (const pos of this.demo[i].positions) {
        switch (i) {
          case 1:
            if (pos.img !== 'tr1' && pos.img !== 'tr2' && pos.img !== 'tr3' && pos.img !== 'tr4') {
              return false;
            }
            break;
          case 2:
            if (pos.img !== 'cu1' && pos.img !== 'cu2' && pos.img !== 'cu3' && pos.img !== 'cu4') {
              return false;
            }
            break;
          case 3:
            if (pos.img !== 'in1' && pos.img !== 'in2' && pos.img !== 'in3' && pos.img !== 'in4') {
              return false;
            }
            break;
          case 4:
            if (pos.img !== 'mu1' && pos.img !== 'mu2' && pos.img !== 'mu3' && pos.img !== 'mu4') {
              return false;
            }
            break;
        }
      }
    }
    return true;
  }

  /**
   * Changes the position of an item by
   * removing it from one of the demo series
   * and adds it to other demo series
   */
  demoChangeItem() {
    // Checks if both imgs are selected
    let selected1, selected2 = false;
    // Selected imgs index in its own positions array
    let indexImgSelected1, indexImgSelected2 = null;
    // Iterator
    let indexPosition = 0;
    // Demo Series Id of the selected imgs
    let demoId1, demoId2 = null;
    // Checkbox Items
    let imgSelected1, imgSelected2 = null;

    // Search for the first two checked
    // checkboxes to obtain it's values
    for (const de of this.demo) {
      indexPosition = 0;
      for (const pos of de.positions) {
        if (pos.isChecked) {
          if (!selected1) {
            selected1 = true;
            indexImgSelected1 = indexPosition;
            demoId1 = de.id;
            imgSelected1 = pos;
          } else if (!selected2) {
            selected2 = true;
            indexImgSelected2 = indexPosition;
            demoId2 = de.id;
            imgSelected2 = pos;
          }
        }
        ++indexPosition;
      }
    }

    // Only swap if two checkboxes are checked
    if (selected1 && selected2) {
      // Only swap if they are from different sections
      if (demoId1 !== demoId2) {
        // Remove values
        this.demo[demoId1].positions.splice(indexImgSelected1, 1);
        this.demo[demoId2].positions.splice(indexImgSelected2, 1);
        // Add values
        this.demo[demoId1].positions.push(imgSelected2);
        this.demo[demoId2].positions.push(imgSelected1);
      }
      // Resets checked checkboxes
      for (const de of this.demo) {
        de.resetIsChecked();
      }
    }
  }
}
