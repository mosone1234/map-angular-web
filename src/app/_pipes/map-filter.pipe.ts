import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapFilter'
})
export class MapFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
