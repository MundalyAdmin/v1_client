import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ModalInterface } from 'flowbite';
import { AuthService } from '../auth/auth.service';
import { BaseComponent } from '../shared/base-component';
import { ImpactInitiative } from './initiatives.model';
import { InitiativesService } from './initiatives.service';

@Component({
  selector: 'app-initiatives',
  templateUrl: './initiatives.component.html',
  styleUrls: ['./initiatives.component.scss'],
})
export class InitiativesComponent
  extends BaseComponent<ImpactInitiative>
  implements OnInit
{
  showCreateInitiativeModal = false;
  isDrawerOpen = false;
  constructor(
    private impactInitiativeService: InitiativesService,

    public authService: AuthService
  ) {
    super();
  }
  ngOnInit(): void {
    this.authService.organization$.subscribe((organization) => {
      if (organization) this.getByOrganizationId(organization.id!);
    });

    this.subscriptions['initiatives'] =
      this.impactInitiativeService.data$.subscribe((data) => {
        this.initiatives = data;
      });

    this.subscriptions['drawer'] =
      this.impactInitiativeService.rightDrawerParams$.subscribe((params) => {
        this.isDrawerOpen = params.state === 'show';
      });
  }

  getByOrganizationId(organizationId: number) {
    this.loading = true;
    this.impactInitiativeService.getByOrganizationId(organizationId).subscribe({
      next: (impactInitiatives) => {
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  initiatives: ImpactInitiative[] = [];

  modal?: ModalInterface;

  ngOnChanges(changes: SimpleChanges) {
    console.log('simple changes', changes);
  }

  showModal() {
    this.showCreateInitiativeModal = true;
  }

  override closeModal() {
    this.modal?.hide();
    document.querySelector('body > div[modal-backdrop]')?.remove();
  }

  createGoal(impactInitiative: ImpactInitiative) {
    this.impactInitiativeService.singleData = impactInitiative;
    this.impactInitiativeService.openDrawer(
      'create-impact-initiative-goal',
      'Create Goal'
    );
  }
}
