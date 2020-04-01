import {DurationKind} from '../enum/duration-kind.enum';

/**
 * Information that every exercise referenced in a session must have
 */
export class ExerciseAttributes {
  id: string;
  type: number;
  duration: number;
  maxTime: number;
  dependsOn: number;
  repetitions: number;
  durationKind: DurationKind;
}
