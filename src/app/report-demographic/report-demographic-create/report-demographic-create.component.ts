import { Component } from '@angular/core';
import { BaseCreateComponent } from '../../shared/base-component';
import { ReportDemographic } from '../../cart/report-demographic/report-demographic.model';
import { CartService } from '../../cart/cart.service';
import { CartItem } from '../../cart/cart.model';

type Option = { label: string; value: string };

@Component({
  selector: 'app-report-demographic-create',
  templateUrl: './report-demographic-create.component.html',
  styleUrls: ['./report-demographic-create.component.scss'],
})
export class ReportDemographicCreateComponent extends BaseCreateComponent<ReportDemographic> {
  cartItem: CartItem | undefined;
  selectedOptions: { [key: string]: string[] } = {
    ageRange: [],
    relationshipStatus: [],
    ethnicity: [],
    sex: [],
  };

  options: { [key: string]: Option[] } = {
    ageRange: [
      { label: '18-24', value: '18-24' },
      { label: '25-34', value: '25-34' },
      { label: '35-44', value: '35-44' },
      { label: '45-54', value: '45-54' },
      { label: '55-64', value: '55-64' },
      { label: '65+', value: '65-1000' },
    ],
    relationshipStatus: [
      { label: 'Single', value: 'Single' },
      { label: 'Married', value: 'Married' },
      { label: 'Divorced', value: 'Divorced' },
    ],
    ethnicity: [
      { label: 'Caucasian', value: 'Caucasian' },
      { label: 'Black', value: 'Black' },
      { label: 'Hispanic', value: 'Hispanic' },
      { label: 'Arab', value: 'Arab' },
      { label: 'Asian', value: 'Asian' },
      { label: 'Multiracial', value: 'Multiracial' },
      { label: 'Other', value: 'Other' },
    ],
    sex: [
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' },
      { label: 'Other', value: 'Other' },
    ],
  };

  isSelected(value: string, type: string) {
    let selected = false;

    switch (type) {
      case 'ageRange':
        if (
          this.selectedOptions['ageRange'].length ===
          this.options['ageRange'].length
        ) {
          return false;
        }

        return this.selectedOptions['ageRange']
          .map((value) => value)
          .includes(value);
        break;
      case 'relationshipStatus':
        selected = this.selectedOptions['relationshipStatus']
          .map((value) => value)
          .includes(value);
        break;
      case 'ethnicity':
        selected = this.selectedOptions['ethnicity']
          .map((value) => value)
          .includes(value);
        break;
      case 'sex':
        selected = this.selectedOptions['sex']
          .map((value) => value)
          .includes(value);
        break;
      default:
        selected = false;
        break;
    }

    return selected;
  }

  constructor(public cartService: CartService) {
    super();
  }

  /**
   * Handles the change event for the specified type of options
   * @param event - The event object
   * @param type - The type of options (e.g., ageRange, relationshipStatus, ethnicity, sex)
   */
  onChange(event: any, type: string) {
    // Get the value from the event target
    const value = event?.target.value;

    // If the value is empty, return early
    if (!value) return;

    // Update the selected options based on the value
    if (value == -1) {
      this.selectedOptions[type] = [];
    } else {
      if (this.selectedOptions[type].includes(value)) {
        this.selectedOptions[type] = this.selectedOptions[type].filter(
          (item: any) => item !== value
        );
      } else {
        this.selectedOptions[type].push(value);
        // Reset selectedOptions if all age range options are selected
        if (this.selectedOptions[type].length === this.options[type].length) {
          this.selectedOptions[type] = [];
        }
      }
    }
  }

  initForm() {
    this.form = this.fb.group({
      ageRange: [null],
      relationshipStatus: [null],
      ethnicity: [null],
      sex: [null],
    });
  }

  ngOnInit() {
    this.subscriptions['cartItem'] = this.cartService.singleData$.subscribe(
      (cartItem) => {
        if (cartItem) {
          this.cartItem = cartItem;

          // Set the selected options based on the cart item
          this.selectedOptions['ageRange'] =
            cartItem.demographic?.age_range || [];

          this.selectedOptions['relationshipStatus'] =
            cartItem.demographic?.relationship_status || [];

          this.selectedOptions['sex'] = cartItem.demographic?.sex || [];

          this.selectedOptions['ethnicity'] =
            cartItem.demographic?.ethnicity || [];
        }
      }
    );
  }

  submit() {
    // Create the demographic object
    const demographic = {
      age_range:
        this.selectedOptions['ageRange'].length === 0
          ? null
          : this.selectedOptions['ageRange'],
      relationship_status:
        this.selectedOptions['relationshipStatus'].length === 0
          ? null
          : this.selectedOptions['relationshipStatus'],
      ethnicity:
        this.selectedOptions['ethnicity'].length === 0
          ? null
          : this.selectedOptions['ethnicity'],
      sex:
        this.selectedOptions['sex'].length === 0
          ? null
          : this.selectedOptions['sex'],
    } as ReportDemographic;

    // Update the current selected cartItem
    this.cartService.updateDemographic(
      this.cartService.singleData!,
      this.helper.object.removeBlankValues(demographic)
    );

    // Close the modal
    this.created.emit();
  }
}
