import { Component, Input } from '@angular/core';
// import { ImpactInitiativeGoalData } from '../../initiatives.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss'],
})
export class AddDataComponent {
  @Input() intiativeName!: string;
  @Input() intiativeGoalName!: string;
  @Input() intiativeGoalMetric!: string;
  @Input() addInitiativeGoalData!: (data: any) => void;
  @Input() cancelAddData!: () => void;

  constructor(private formBuilder: FormBuilder) {}

  addInitiativeGoalDataForm = this.formBuilder.group({
    data_date: new Date(),
    data_value: 0,
    data_desc: '',
  });

  submitData() {
    this.addInitiativeGoalData({
      description: this.addInitiativeGoalDataForm.value.data_desc!,
      data: this.addInitiativeGoalDataForm.value.data_value!,
      date: this.addInitiativeGoalDataForm.value.data_date!,
    });
  }
}
