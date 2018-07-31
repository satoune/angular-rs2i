import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value.substr(0, 1));
    return value.charAt(0).toUpperCase() +  value.substring(1);
  }

}
