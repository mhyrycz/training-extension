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



export interface Playlist {
  title: string;
  trainingType: TrainingTypes[];
  pace?: number;
  genre: MusicGenres;
  link: string;
}

export enum MusicGenres {
  DANCE = 'Dance',
  POP = 'Pop',
  ROCK = 'Rock',
  METAL = 'Metal',
  LATINO= 'Latino',
  ELECTRONIC= 'ELECTRONIC'
}

export const musicPlaylists: Playlist[] = [
  {
    title: "Aerobic Extreme Session 2018",
    trainingType: [TrainingTypes.PT, TrainingTypes.BJS],
    pace: 140,
    genre: MusicGenres.DANCE,
    link: "open.spotify.com/album/6wqfqstILMZPeK4VKRPau1"
  },
  {
    title: "Aerobic Cardio Dance 2021",
    trainingType: [TrainingTypes.PT, TrainingTypes.BJS],
    pace: 140,
    genre: MusicGenres.DANCE,
    link: "open.spotify.com/album/4ZWbi0DDI9Q9wYNwN0OqLl"
  },
  {
    title: "Aerobic Latino Hits 2021",
    trainingType: [TrainingTypes.PT, TrainingTypes.BJS],
    pace: 140,
    genre: MusicGenres.LATINO,
    link: "open.spotify.com/album/5bN5Zo9VTDyNJqLTpg4XRx"
  },
  {
    title: "Aerobic Pop Hits 2020",
    trainingType: [TrainingTypes.PT, TrainingTypes.BJS],
    pace: 140,
    genre: MusicGenres.POP,
    link: "open.spotify.com/album/4Ax9tgUiH3jDvYrhrogERt"
  },
  {
    title: "Metal Joggen",
    trainingType: [TrainingTypes.PT, TrainingTypes.BJS],
    pace: 140,
    genre: MusicGenres.METAL,
    link: "open.spotify.com/playlist/4gzH9aF5jbPm2AJlF77a51"
  },
  {
    title: "Born to Run",
    trainingType: [TrainingTypes.PT, TrainingTypes.BJS, TrainingTypes.MS],
    pace: 150,
    genre: MusicGenres.ROCK,
    link: "open.spotify.com/playlist/37i9dQZF1DX0hWmn8d5pRe"
  },
  {
    title: "Hity do Biegania",
    trainingType: [TrainingTypes.PT, TrainingTypes.BJS, TrainingTypes.MS],
    pace: 150,
    genre: MusicGenres.POP,
    link: "open.spotify.com/playlist/37i9dQZF1DXcyfxt5LN8Mv"
  },
  {
    title: "Aerobic Hits Spring 2020",
    trainingType: [TrainingTypes.PT, TrainingTypes.BJS],
    pace: 135,
    genre: MusicGenres.DANCE,
    link: "open.spotify.com/album/56L5K4SxuUNKbQOgtwSUS7"
  },
  {
    title: "Aerobic Hits Session 2018",
    trainingType: [TrainingTypes.PT, TrainingTypes.BJS],
    pace: 135,
    genre: MusicGenres.DANCE,
    link: "open.spotify.com/album/0DNcD12RccPGsj6fqmzcPB"
  },
  {
    title: "Beast Mode Rock",
    trainingType: [TrainingTypes.MG],
    genre: MusicGenres.ROCK,
    link: "open.spotify.com/playlist/37i9dQZF1DWZYWNM3NfvzJ"
  },
  {
    title: "Beast Mode",
    trainingType: [TrainingTypes.MG],
    genre: MusicGenres.ELECTRONIC,
    link: "open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP"
  },
  {
    title: "Brutal Cardio",
    trainingType: [TrainingTypes.MG, TrainingTypes.PT],
    genre: MusicGenres.METAL,
    link: "open.spotify.com/playlist/0o74GEIghSjz5zKEgQE42y"
  },
];