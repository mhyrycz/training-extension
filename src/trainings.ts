export enum TrainingTypes {
  PT = 'Pożeracz tłuszczu',
  BJS = 'Brzuch jak skała',
  MG = 'Mocna góra',
  MS = 'Modelowanie sylwetki'
}

export enum SeriesTypes {
  WARM_UP = 'Rozgrzewka',
  MAIN = 'Główny',
  STRETCHING = 'Rozciąganie'
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
    name: 'MG 2',
    type: TrainingTypes.MG,
    series: {
      [SeriesTypes.WARM_UP]: '5:32',
      [SeriesTypes.MAIN]: ['11:14','14:01'],
      [SeriesTypes.STRETCHING]: '8:13',
    }
  },
  {
    name: 'MG 3',
    type: TrainingTypes.MG,
    series: {
      [SeriesTypes.WARM_UP]: '5:32',
      [SeriesTypes.MAIN]: ['15:03','13:55'],
      [SeriesTypes.STRETCHING]: '8:13',
    }
  },
  {
    name: 'BJS 1',
    type: TrainingTypes.BJS,
    series: {
      [SeriesTypes.WARM_UP]: '5:14',
      [SeriesTypes.MAIN]: ['9:59','9:28','10:03'],
      [SeriesTypes.STRETCHING]: '4:16',
    }
  },
  {
    name: 'BJS 2',
    type: TrainingTypes.BJS,
    series: {
      [SeriesTypes.WARM_UP]: '5:34',
      [SeriesTypes.MAIN]: ['16:41','9:28','16:27'],
      [SeriesTypes.STRETCHING]: '4:16',
    }
  },
  {
    name: 'BJS 3',
    type: TrainingTypes.BJS,
    series: {
      [SeriesTypes.WARM_UP]: '5:34',
      [SeriesTypes.MAIN]: ['16:41','10:03','16:25'],
      [SeriesTypes.STRETCHING]: '4:16',
    }
  },
  {
    name: 'Tabata 1',
    type: TrainingTypes.MS,
    series: {
      [SeriesTypes.WARM_UP]: '6:52',
      [SeriesTypes.MAIN]: ['10:14','11:45','17:21'],
      [SeriesTypes.STRETCHING]: '6:19',
    }
  },
];