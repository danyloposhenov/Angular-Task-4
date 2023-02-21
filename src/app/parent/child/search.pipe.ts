import { Pipe, PipeTransform } from '@angular/core';
import { IList } from './child.component';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lists: IList[], field: string): IList[] {
    if (!lists) return [];
    if (!field) return lists;
    return lists.filter(list => list.firstName.toLowerCase().includes(field.toLowerCase())
      || list.lastName.toLowerCase().includes(field.toLowerCase())
      || list.number.toLowerCase().includes(field.toLowerCase()));
  }
}

