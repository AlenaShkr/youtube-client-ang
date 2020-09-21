import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'borderDownColourDependOnPublishDate'
})
export class BorderDownColourDependOnPublishDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
