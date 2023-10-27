import { Component } from '@angular/core';
import { BaseCreateComponent } from '../../../shared/base-component';
import { CommunitySuggestionService } from './community-suggestion.service';
import { CommunitySuggestion } from './community-suggestion.model';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-community-suggestion',
  templateUrl: './community-suggestion.component.html',
  styleUrls: ['./community-suggestion.component.scss'],
})
export class CommunitySuggestionComponent extends BaseCreateComponent<CommunitySuggestion> {
  constructor(
    public communitySuggestionService: CommunitySuggestionService,
    public route: ActivatedRoute
  ) {
    super(communitySuggestionService);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      community_member_email: ['', Validators.required],
      company_name: ['', Validators.required],
      company_website: ['', Validators.required],
    });
  }

  override create() {
    this.loading = true;
    this.communitySuggestionService.store(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess(
          'Company suggestion successfully registered'
        );
        this.router.navigate(['thank-you'], { relativeTo: this.route });
        this.initForm();
      },
      error: () => {
        this.loading = false;
        this.helper.notification.alertDanger();
      },
    });
  }
}
