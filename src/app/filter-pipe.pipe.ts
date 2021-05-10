import { Pipe, PipeTransform } from '@angular/core';
import { LocationObj } from './Location';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipePipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.location.indexOf(filter) !== -1);
  }

}
