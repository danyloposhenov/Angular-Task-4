import { Pipe, PipeTransform } from '@angular/core';
import { IList } from './child.component';
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arrList: IList[], sort: string): IList[] {
    if(!arrList) return [];
    if(!sort) return arrList;

    if(sort === 'firstName') {
      return arrList.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0))
    } else if (sort === 'firstNameReverse') {
      return arrList.sort((a, b) => (a.firstName < b.firstName) ?  1 : ((a.firstName > b.firstName) ? -1 : 0))
    }

    if(sort === 'lastName') {
      return arrList.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((a.lastName < b.lastName) ? -1 : 0))
    } else if (sort === 'lastNameReverse') {
      return arrList.sort((a, b) => (a.lastName < b.lastName) ?  1 : ((a.lastName > b.lastName) ? -1 : 0))
    }

    if(sort === 'number') {
      return arrList.sort((a, b) => (a.number > b.number) ? 1 : ((a.number < b.number) ? -1 : 0))
    } else if (sort === 'numberReverse') {
      return arrList.sort((a, b) => (a.number < b.number) ?  1 : ((a.number > b.number) ? -1 : 0))
    }

    return arrList
  }
}
