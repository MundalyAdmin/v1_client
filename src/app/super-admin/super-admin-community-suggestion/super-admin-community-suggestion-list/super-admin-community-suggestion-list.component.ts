import { Component } from '@angular/core';
import { BaseListComponent } from '../../../shared/base-component';
import { CommunitySuggestion } from '../../../public/public-community/community-suggestion/community-suggestion.model';
import { CommunitySuggestionService } from '../../../public/public-community/community-suggestion/community-suggestion.service';

@Component({
  selector: 'app-super-admin-community-suggestion-list',
  templateUrl: './super-admin-community-suggestion-list.component.html',
  styleUrls: ['./super-admin-community-suggestion-list.component.scss'],
})
export class SuperAdminCommunitySuggestionListComponent extends BaseListComponent<CommunitySuggestion> {
  constructor(public communitySuggestionService: CommunitySuggestionService) {
    super(communitySuggestionService);
  }

  // edit(organization: CommunitySuggestion) {
  //   this.communitySuggestionService.singleData = organization;
  // }

  // delete(organization: CommunitySuggestion) {
  //   this.helper.notification.confirm(
  //     `Deleting ${organization.name}`,
  //     'Are you sure to delete this type?',
  //     () => {
  //       this.loading = true;
  //       this.communitySuggestionService
  //         .delete(organization.id!)
  //         .subscribe({
  //           next: () => {
  //             this.loading = false;
  //             this.helper.notification.alertSuccess();
  //           },
  //           error: () => {
  //             this.loading = false;
  //           },
  //         });
  //     }
  //   );
  // }
}
