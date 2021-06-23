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
  variant: string;
  type: TrainingTypes;
  series: {
    [SeriesTypes.WARM_UP]: string
    [SeriesTypes.MAIN]: string[]
    [SeriesTypes.STRETCHING]: string
  }
}

export const trainings: Training[] = [
  {
    type: TrainingTypes.MG,
    variant: '1',
    series: {
      [SeriesTypes.WARM_UP]: '5:32',
      [SeriesTypes.MAIN]: ['9:54','14:08','7:21'],
      [SeriesTypes.STRETCHING]: '8:13',
    }
  },
  {
    variant: '2',
    type: TrainingTypes.MG,
    series: {
      [SeriesTypes.WARM_UP]: '5:32',
      [SeriesTypes.MAIN]: ['11:14','14:01'],
      [SeriesTypes.STRETCHING]: '8:13',
    }
  },
  {
    variant: '3',
    type: TrainingTypes.MG,
    series: {
      [SeriesTypes.WARM_UP]: '5:32',
      [SeriesTypes.MAIN]: ['15:03','13:55'],
      [SeriesTypes.STRETCHING]: '8:13',
    }
  },
  {
    variant: '1',
    type: TrainingTypes.BJS,
    series: {
      [SeriesTypes.WARM_UP]: '5:14',
      [SeriesTypes.MAIN]: ['9:59','9:28','10:03'],
      [SeriesTypes.STRETCHING]: '4:16',
    }
  },
  {
    variant: '2',
    type: TrainingTypes.BJS,
    series: {
      [SeriesTypes.WARM_UP]: '5:34',
      [SeriesTypes.MAIN]: ['16:41','9:28','16:27'],
      [SeriesTypes.STRETCHING]: '4:16',
    }
  },
  {
    variant: '3',
    type: TrainingTypes.BJS,
    series: {
      [SeriesTypes.WARM_UP]: '5:34',
      [SeriesTypes.MAIN]: ['16:41','10:03','16:25'],
      [SeriesTypes.STRETCHING]: '4:16',
    }
  },
  {
    variant: '1',
    type: TrainingTypes.MS,
    series: {
      [SeriesTypes.WARM_UP]: '6:52',
      [SeriesTypes.MAIN]: ['10:14','11:45','17:21'],
      [SeriesTypes.STRETCHING]: '6:19',
    }
  },
  {
    variant: '1',
    type: TrainingTypes.PT,
    series: {
      [SeriesTypes.WARM_UP]: '6:52',
      [SeriesTypes.MAIN]: ['10:03','10:13','10:06'],
      [SeriesTypes.STRETCHING]: '6:19',
    }
  },
  {
    variant: '2',
    type: TrainingTypes.PT,
    series: {
      [SeriesTypes.WARM_UP]: '6:52',
      [SeriesTypes.MAIN]: ['12:35','12:59','12:44'],
      [SeriesTypes.STRETCHING]: '6:19',
    }
  },
];