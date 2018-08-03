import { State } from '../enums/state.enum';

export interface Item {

  id: string;
  name: String;
  reference: String;
  delivryDate: string;
  state: State;
}
