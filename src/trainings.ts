export enum TrainingTypes {
  PT = "PT",
  BJS = "BJS",
  MG = "MG"
}

interface Training {
  name: string;
  type: TrainingTypes;
  warmUp: string;
  series: string[];
  stretching: string;
}

export const trainings: Training[] = [
  {
    name: "PT 1",
    type: TrainingTypes.PT,
    warmUp: '1:00', 
    series: ['1:00','1:00','1:00'], 
    stretching: '1:00'
  },
  {
    name: "PT 2",
    type: TrainingTypes.PT,
    warmUp: '1:00', 
    series: ['1:00','1:00','1:00'], 
    stretching: '1:00'
  },
  {
    name: "BJS 1",
    type: TrainingTypes.BJS,
    warmUp: '1:00', 
    series: ['1:00','1:00','1:00'], 
    stretching: '1:00'
  }
];