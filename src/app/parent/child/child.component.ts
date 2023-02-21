import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() field!: string;
  @Input() modal!: boolean;
  @Output() message: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  set save(name: any) {
    if(name) {
      console.log(name);
      if(name.length > 1) {
        this.list[name[1].index] = name[0];
      } else {
        this.list.push(name[0]);
      }
    }
  }
  get save(): any {
    return this.list
  }

  public type!: string;

  public fNameUp = false;
  public fNameDown= false;
  public lNameUp = false;
  public lNameDown= false;
  public numberUp = false;
  public numberDown= false;

  public list: IList[] = [
    {
      firstName: 'Dima',
      lastName: 'Novik',
      number: '0951421222'
    },
    {
      firstName: 'Anton',
      lastName: 'Babich',
      number: '0959130301'
    },
    {
      firstName: 'Andrey',
      lastName: 'Zarec',
      number: '0959130222'
    },
    {
      firstName: 'Ghanna',
      lastName: 'Zira',
      number: '0951123414'
    },
    {
      firstName: 'Ruslan',
      lastName: 'Kale',
      number: '0956532141'
    },
    {
      firstName: 'Marina',
      lastName: 'Ganza',
      number: '0932125332'
    }
  ];

  edit(index: number): void {
    this.modal = true;
    let data = [
      {
      firstName: this.list[index].firstName,
      lastName: this.list[index].lastName,
      number: this.list[index].number
      },
      {
        modal: this.modal,
        index: index
      }
    ]
    this.message.emit(data);
  }

  delete(index: number): void {
    this.list.splice(index, 1);
  }

  sortFirstName(type: string) {
    this.lNameUp = false;
    this.lNameDown = false;
    this.numberDown = false;
    this.numberUp = false;
    if (this.type === 'firstName') {
      this.fNameDown = false;
      this.fNameUp = true;
      this.type = 'firstNameReverse';
      return;
    }
    this.fNameUp = false;
    this.fNameDown = true;
    this.type = type;
    return
  }
  sortLastName(type: string) {
    this.fNameUp = false;
    this.fNameDown = false;
    this.numberDown = false;
    this.numberUp = false;
    if (this.type === 'lastName') {
      this.lNameDown = false;
      this.lNameUp = true;
      this.type = 'lastNameReverse';
      return
    }
    this.lNameDown = true;
    this.lNameUp = false;
    this.type = type;
    return
  }
  sortNumber(type: string) {
    this.fNameUp = false;
    this.fNameDown = false;
    this.lNameUp = false;
    this.lNameDown = false;
    if (this.type === 'number') {
      this.numberDown = false;
      this.numberUp = true;
      this.type = 'numberReverse';
      return;
    }
    this.numberDown = true;
    this.numberUp = false;
    this.type = type;
    return
  }
}

export interface IList {
  firstName: string,
  lastName: string,
  number: string
}
