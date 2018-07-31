import { State } from '../shared/enums/state.enum';
import { Item } from '../shared/interfaces/item';

export const COLLECTION: Item [] = [

    {
      id: 'test1',
      name : 'userTest',
      reference: '12541',
      delivryDate: '2018-07-28T22:00:00.000Z',
      state: State.ALIVRER
    }
    ,
    {
      id: 'test2',
      name : 'userTestFeminin',
      reference: '12542',
      delivryDate: '2018-07-29T22:00:00.000Z',
      state: State.ENCOURS
    }
    ,
    {
      id: 'test3',
      name : 'userTest2Masculin',
      reference: '12542',
      delivryDate: '2018-07-29T22:00:00.000Z',
      state: State.LIVREE
    },
    {
      id: 'test4',
      name : 'userTest2Feminin',
      reference: '12543',
      delivryDate: '2018-07-30T22:00:00.000Z',
      state: State.LIVREE
    }
];
