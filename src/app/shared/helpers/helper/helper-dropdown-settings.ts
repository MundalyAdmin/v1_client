import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperDropdownSettings {
  single = {
    singleSelection: true,
    textField: 'name',

    allowSearchFilter: true,
  };

  singleDisabled = {
    ...this.single,
    disabled: true,
  };

  multi = {
    ...this.single,
    singleSelection: false,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
  };
}
