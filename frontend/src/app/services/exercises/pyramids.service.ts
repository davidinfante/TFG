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
  /*private images: IdImage[] = [
    {
      "id": "arrow",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/arrow-right.png",
        "height": 128,
        "width": 128
      }
    },
    /**
     * Correct Images
     */
    /*{
      "id": "c1",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/c1.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "c2",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/c2.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "c3",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/c3.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "c4",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/c4.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "c5",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/c5.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "c6",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/c6.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "c7",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/c7.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "c8",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/c8.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "c9",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/c9.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "c10",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/c10.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "c11",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/c11.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "c12",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/c12.jpg",
        "height": 105,
        "width": 105
      }
    },
    /**
     * Incorrect Images
     */
    /*{
      "id": "d1",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d1.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d2",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d2.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d3",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d3.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d4",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d4.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d5",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d5.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d6",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d6.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d7",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d7.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d8",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d8.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d9",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d9.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d10",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d10.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d11",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d11.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d12",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d12.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d13",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d13.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d14",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d14.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d15",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d15.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d16",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d16.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d17",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d17.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d18",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d18.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d19",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d19.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d20",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d20.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d21",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d21.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d22",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d22.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d23",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d23.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d24",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d24.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d25",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d25.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d26",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d26.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d27",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d27.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d28",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d28.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d29",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d29.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d30",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d30.jpg",
        "height": 105,
        "width": 105
      }
    },
    {
      "id": "d31",
      "img": {
        "src": "../../../../assets/exercises/PyramidsExercise/d31.jpg",
        "height": 105,
        "width": 105
      }
    },
  ];*/
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
   * Searches an image by it's Id
   */
  /*searchImage(id: string) {
    return {
      ...this.images.find(img => {
        return img.id === id;
      })
    };
  }*/

  /**
   * Returns the image's src/height/width
   */
  /*getImage(id: string) {
    return {
      src: this.searchImage(id).img.src,
      height: this.searchImage(id).img.height,
      width: this.searchImage(id).img.width
    };
  }*/

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
