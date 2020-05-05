import { Injectable } from '@angular/core';
import {IdImage} from '../../classes/Image';

@Injectable({
  providedIn: 'root'
})
export class PyramidsService {
  private images: IdImage[] = [
    {
      id: 'arrow',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/arrow-right.png',
        height: 128,
        width: 128
      }
    },
    /**
     * Correct Images
     */
    {
      id: 'c1',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/c1.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'c2',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/c2.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'c3',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/c3.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'c4',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/c4.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'c5',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/c5.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'c6',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/c6.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'c7',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/c7.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'c8',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/c8.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'c9',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/c9.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'c10',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/c10.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'c11',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/c11.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'c12',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/c12.jpg',
        height: 105,
        width: 105
      }
    },
    /**
     * Incorrect Images
     */
    {
      id: 'd1',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d1.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd2',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d2.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd3',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d3.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd4',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d4.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd5',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d5.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd6',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d6.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd7',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d7.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd8',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d8.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd9',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d9.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd10',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d10.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd11',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d11.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd12',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d12.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd13',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d13.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd14',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d14.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd15',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d15.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd16',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d16.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd17',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d17.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd18',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d18.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd19',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d19.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd20',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d20.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd21',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d21.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd22',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d22.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd23',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d23.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd24',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d24.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd25',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d25.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd26',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d26.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd27',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d27.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd28',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d28.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd29',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d29.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd30',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d30.jpg',
        height: 105,
        width: 105
      }
    },
    {
      id: 'd31',
      img: {
        src: '../../../../assets/exercises/PyramidsExercise/d31.jpg',
        height: 105,
        width: 105
      }
    },
  ];

  constructor() { }

  /**
   * Searches an image by it's Id
   */
  searchImage(id: string) {
    return {
      ...this.images.find(img => {
        return img.id === id;
      })
    };
  }

  /**
   * Returns the image's src/height/width
   */
  getImage(id: string) {
    return {
      src: this.searchImage(id).img.src,
      height: this.searchImage(id).img.height,
      width: this.searchImage(id).img.width
    };
  }
}
