import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any[], searchText: string): any {
    if (!users || !searchText) {
      return users;
    }
    return users.filter(user =>
      user.login.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
