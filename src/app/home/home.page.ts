import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myVariable: string = 'The donuts are with you!';

  updateMyValue() {
    this.myVariable = 'Now there are a dozen fritters!';
  }

}
