export enum TrainingTypes {
  PT = 'PT',
  BJS = 'BJS',
  MG = 'MG'
}

export enum SeriesTypes {
  WARM_UP = 'Warm Up',
  MAIN = 'Main',
  STRETCHING = 'Stretching'
}

interface Training {
  name: string;
  type: TrainingTypes;
  series: {
    [SeriesTypes.WARM_UP]: string
    [SeriesTypes.MAIN]: string[]
    [SeriesTypes.STRETCHING]: string
  }
}

export const trainings: Training[] = [
  {
    name: 'MG 1',
    type: TrainingTypes.MG,
    series: {
      [SeriesTypes.WARM_UP]: '5:32',
      [SeriesTypes.MAIN]: ['9:54','14:08','7:21'],
      [SeriesTypes.STRETCHING]: '8:13',
    }
  },
  {
    name: 'PT 2',
    type: TrainingTypes.PT,
    series: {
      [SeriesTypes.WARM_UP]: '7:21',
      [SeriesTypes.MAIN]: ['7:21','7:21','7:21'],
      [SeriesTypes.STRETCHING]: '7:21',
    }
  },
  {
    name: 'BJS 1',
    type: TrainingTypes.BJS,
    series: {
      [SeriesTypes.WARM_UP]: '7:21',
      [SeriesTypes.MAIN]: ['7:21','7:21','7:21'],
      [SeriesTypes.STRETCHING]: '7:21',
    }
  },
];