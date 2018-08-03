import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../enums/state.enum';

@Pipe({
  name: 'filterByState'
})
export class FilterByStatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args);
    if (args) {
      console.log('pipe');
      console.log(value);
      return value ? value.filter(v => v.state === State.LIVREE) : [];
    }
    /*if (args === 'noLivr') {
      return value ? value.filter(v => v.state !== State.LIVREE) : [];
    }*/
    return value;
  }

}
