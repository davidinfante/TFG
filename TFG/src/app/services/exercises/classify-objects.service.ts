import { Injectable } from '@angular/core';
import {IdImage} from '../../classes/image';
import {CheckboxArray} from '../../classes/checkboxArray';

@Injectable({
  providedIn: 'root'
})
export class ClassifyObjectsService {
  private images: IdImage[] = [
    /**
     * Food - Comida (co)
     */
    {
      id: 'co1',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/2316.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co2',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/2446.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co3',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/2494.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co4',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/2594.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co5',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/2838.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co6',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/2839.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co7',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/2865.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co8',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/6244.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co9',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/6646.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co10',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/6911.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co11',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/6918.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co12',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/6976.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co13',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/7000.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co14',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/7001.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co15',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/7130.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co16',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/7130.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co17',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/8600.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'co18',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/comida/tomatefrito.png',
        height: 80,
        width: 80
      }
    },
    /**
     * Body - Cuerpo (cu)
     */
    {
      id: 'cu1',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/cuerpo/2663.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'cu2',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/cuerpo/2669.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'cu3',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/cuerpo/2841.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'cu4',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/cuerpo/2851.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'cu5',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/cuerpo/2871.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'cu6',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/cuerpo/2887.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'cu7',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/cuerpo/2928.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'cu8',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/cuerpo/3298.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'cu9',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/cuerpo/6573.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'cu10',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/cuerpo/8666.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'cu11',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/cuerpo/12218.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'cu12',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/cuerpo/cuello.png',
        height: 80,
        width: 80
      }
    },
    /**
     * Sports - Deportes (de)
     */
    {
      id: 'de1',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/deportes/2889.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'de2',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/deportes/3090.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'de3',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/deportes/3097.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'de4',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/deportes/3199.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'de5',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/deportes/3260.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'de6',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/deportes/5398.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'de7',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/deportes/5917.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'de8',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/deportes/6513.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'de9',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/deportes/8544.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'de10',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/deportes/8591.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'de11',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/deportes/9189.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'de12',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/deportes/9190.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'de13',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/deportes/9699.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'de14',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/deportes/10159.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'de15',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/deportes/10167.png',
        height: 80,
        width: 80
      }
    },
    /**
     * Fruits - Fruta (fr)
     */
    {
      id: 'fr1',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/2329.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'fr2',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/2400.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'fr3',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/2462.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'fr4',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/2468.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'fr5',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/2483.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'fr6',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/2525.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'fr7',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/2561.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'fr8',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/2955.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'fr9',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/2983.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'fr10',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/3022.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'fr11',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/13644.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'fr12',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/13645.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'fr13',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/ciruela.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'fr14',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/mandarina.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'fr15',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/platano.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'fr16',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/fruta/uvas.png',
        height: 80,
        width: 80
      }
    },
    /**
     * Tools - Herramientas (he)
     */
    {
      id: 'he1',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/herramientas/2706.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'he2',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/herramientas/2736.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'he3',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/herramientas/2788.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'he4',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/herramientas/2809.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'he5',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/herramientas/2837.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'he6',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/herramientas/2922.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'he7',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/herramientas/2937.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'he8',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/herramientas/2938.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'he9',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/herramientas/3392.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'he10',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/herramientas/5499.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'he11',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/herramientas/5586.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'he12',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/herramientas/alicates.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'he13',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/herramientas/brocha.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'he14',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/herramientas/clavo.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'he15',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/herramientas/sierra.png',
        height: 80,
        width: 80
      }
    },
    /**
     * Instruments - Instrumentos (in)
     */
    {
      id: 'in1',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/2318.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in2',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/2396.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in3',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/2417.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in4',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/2495.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in5',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/2521.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in6',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/2559.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in7',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/2578.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in8',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/2604.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in9',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/2607.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in10',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/2615.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in11',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/5909.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in12',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/5974.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in13',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/6234.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in14',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/6235.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in15',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/6249.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in16',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/8315.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in17',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/8340.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in18',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/8341.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in19',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/8493.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in20',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/8599.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in21',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/11121.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in22',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/12088.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in23',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/12119.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in24',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/12150.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'in25',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/instrumentos/17332.png',
        height: 80,
        width: 80
      }
    },
    /**
     * Furniture - Muebles (mu)
     */
    {
      id: 'mu1',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/muebles/2258.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'mu2',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/muebles/2304.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'mu3',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/muebles/2360.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'mu4',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/muebles/2570.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'mu5',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/muebles/2571.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'mu6',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/muebles/2917.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'mu7',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/muebles/4937.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'mu8',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/muebles/4960.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'mu9',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/muebles/11376.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'mu10',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/muebles/escritorio.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'mu11',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/muebles/lampara.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'mu12',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/muebles/pupitre.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'mu13',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/muebles/silla.png',
        height: 80,
        width: 80
      }
    },
    /**
     * Profession - Profesiones (pr)
     */
    {
      id: 'pr1',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/2457.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr2',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/2467.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr3',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/2636.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr4',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/2642.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr5',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/2733.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr6',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/2740.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr7',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/2921.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr8',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/2969.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr9',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/3008.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr10',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/3321.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr11',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/3358.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr12',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/5603.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr13',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/8631.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr14',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/9196.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr15',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/11165.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr16',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/11265.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr17',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/11341.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'pr18',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/profesiones/11342.png',
        height: 80,
        width: 80
      }
    },
    /**
     * Clothes - Ropa (ro)
     */
    {
      id: 'ro1',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/ropa/2308.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'ro2',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/ropa/2309.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'ro3',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/ropa/2310.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'ro4',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/ropa/2391.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'ro5',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/ropa/2565.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'ro6',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/ropa/2613.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'ro7',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/ropa/2622.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'ro8',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/ropa/2775.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'ro9',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/ropa/3296.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'ro10',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/ropa/4872.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'ro11',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/ropa/7123.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'ro12',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/ropa/8353.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'ro13',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/ropa/11402.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'ro14',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/ropa/12176.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'ro15',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/ropa/16585.png',
        height: 80,
        width: 80
      }
    },
    /**
     * Transport - Transporte (tr)
     */
    {
      id: 'tr1',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/transporte/2263.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'tr2',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/transporte/2264.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'tr3',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/transporte/2273.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'tr4',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/transporte/2277.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'tr5',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/transporte/2339.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'tr6',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/transporte/2407.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'tr7',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/transporte/2506.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'tr8',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/transporte/2508.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'tr9',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/transporte/monopatin.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'tr10',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/transporte/parapente.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'tr11',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/transporte/taxi.png',
        height: 80,
        width: 80
      }
    },
    {
      id: 'tr12',
      img: {
        src: '../../../../assets/exercises/ClassifyObjectsExercise/transporte/tren.png',
        height: 80,
        width: 80
      }
    },
  ];
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
