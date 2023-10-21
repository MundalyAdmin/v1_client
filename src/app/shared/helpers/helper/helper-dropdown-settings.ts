import { Injectable } from '@angular/core';
import { IDropdownSettings } from './../../../../../node_modules/ng-multiselect-dropdown/multiselect.model.d';

@Injectable({
  providedIn: 'root',
})
export class HelperDropdownSettings {
  single: IDropdownSettings = {
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
