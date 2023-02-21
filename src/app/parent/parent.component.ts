import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  public text!: string;
  public isOpenModal = false;
  public firstName!: string;
  public lastName!: string;
  public number!: string;
  public addProfile!: Array<any>;
  public index!: number;

  addPhone(): void {
    this.firstName = '';
    this.lastName = '';
    this.number = '';
    this.isOpenModal = true;
    console.log(this.index);
  }

  closeModal(): void {
    this.isOpenModal = false;
  }

  save(): void {
    this.addProfile = [{
      firstName: this.firstName,
      lastName: this.lastName,
      number: this.number
    }]
    if(this.index >= 0) {
      this.addProfile = [
        {
          firstName: this.firstName,
          lastName: this.lastName,
          number: this.number
        },
        {
          index: this.index
        }
      ]
    }
    console.log(this.addProfile);

    this.index = -1;
    this.isOpenModal = false;
    this.firstName = '';
    this.lastName = '';
    this.number = '';
  }

  setMessage(message: any){
    this.isOpenModal = message[1].modal;
    this.index = message[1].index;
    console.log(this.index);
    this.firstName = message[0].firstName;
    this.lastName = message[0].lastName;
    this.number = message[0].number;
    console.log(message);
  }
}

