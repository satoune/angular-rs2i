import { State } from '../enums/state.enum';

export interface Item {

  id: String;
  name: String;
  reference: String;
  delivryDate: string;
  state: State;
}
