import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent implements OnInit {

  selectOptions = [
    { label: 'Value 1', value: 'val1'},
    { label: 'Value 2', value: 'val2'},
    { label: 'Value 3', value: 'val3'}
  ];

  model: any = { section1: {}, section2: {} };

  constructor() { }

  ngOnInit() {
  }

  _onSave(model: any) {
  }

}
