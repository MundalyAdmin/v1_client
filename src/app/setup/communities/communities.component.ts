import { NgxGpAutocompleteDirective } from '@angular-magic/ngx-gp-autocomplete';
import { Component, ViewChild } from '@angular/core';
import { SetupreportService } from '../setupreport.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss']
})
export class CommunitiesComponent {
  formattedaddress = "";

  options = {
    componentRestrictions: {
      country: ["AU"]
    }
  }

  constructor(private service: SetupreportService) {  
    service.locationAddress.subscribe((val) => this.formattedaddress = val);
  }


  public handleAddressChange(address: any) {
    //setting address from API to local variable 
    this.service.locationAddress.next(address.formatted_address)
  }
}
