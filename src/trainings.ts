export enum TrainingTypes {
  PT = "PT",
  BJS = "BJS",
  MG = "MG"
}

interface Training {
  name: string;
  type: TrainingTypes;
  warmUp: string;
  mainSeries: string[];
  stretching: string;
}

export const trainings: Training[] = [
  {
    name: "PT 1",
    type: TrainingTypes.PT,
    warmUp: '7:21', 
    mainSeries: ['7:21','7:21','7:21'], 
    stretching: '7:21'
  },
  {
    name: "PT 2",
    type: TrainingTypes.PT,
    warmUp: '7:21', 
    mainSeries: ['7:21','7:21','7:21'], 
    stretching: '7:21'
  },
  {
    name: "BJS 1",
    type: TrainingTypes.BJS,
    warmUp: '7:21', 
    mainSeries: ['7:21','7:21','7:21'], 
    stretching: '7:21'
  }
];