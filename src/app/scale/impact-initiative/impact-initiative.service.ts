import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { ImpactInitiative } from './impact-initiative.model';
import { Params } from '@angular/router';
import { map, of, tap } from 'rxjs';
import { ApiResponse } from '../../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class ImpactInitiativeService extends BaseService<ImpactInitiative> {
  constructor() {
    super('impact-initiative');
  }

  getByOrganizationId(organizationId: number, params?: Params) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organizationId}`, { params })
      .pipe(
        tap((response: ApiResponse<ImpactInitiative>) => {
          this.data = response.data as ImpactInitiative[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map(
          (response: ApiResponse<ImpactInitiative>) =>
            response.data as ImpactInitiative[]
        )
      );
  }

  getByOrganization(organizationId: number) {
    const organizations = [
      {
        id: 1,

        name: 'Establishing a healthcare center in Tarkwa Breman to serve 200 community members',
        location: 'Tarkwa Breman, Ghana',
        progress: 3,
        impact_strength: 3,
        organization_id: 1,
      },
      {
        id: 6,

        name: 'Educating 300 local farmers on sustainable practices',
        location: 'Tarawa Breman, Ghana',
        progress: 4,
        impact_strength: 5,
        organization_id: 1,
      },
      {
        id: 11,

        name: 'Initiating IT skill development for 200 young girls',
        location: 'Tarawa Breman, Ghana',
        progress: 5,
        impact_strength: 4,
        organization_id: 1,
      },
      {
        id: 2,

        name: 'Supporting 5 local education initiatives and scholarship programs',
        location: 'Kigali, Rwanda',
        progress: 3,
        impact_strength: 3,
        organization_id: 2,
      },
      {
        id: 7,

        name: 'Implementing sustainable mining practices to minimize environmental impact.',
        location: 'Zgounder, Morocco',
        progress: 5,
        impact_strength: 3,
        organization_id: 2,
      },
      {
        id: 12,

        name: 'Engaging in 5 community-driven development projects focusing on healthcare and infrastructure.',
        location: 'Zgounder, Morocco',
        progress: 5,
        impact_strength: 3,
        organization_id: 2,
      },
      {
        id: 3,

        name: 'Facilitating financial literacy programs in 10 universities',
        location: 'Nairobi, Kenya',
        progress: 5,
        impact_strength: 5,
        organization_id: 3,
      },
      {
        id: 4,

        name: 'Offering 1000 free transactions to SMEs',
        location: 'Mombasa, Kenya',
        progress: 5,
        impact_strength: 3,
        organization_id: 3,
      },
      {
        id: 5,

        name: 'Supporting 5 educational initiatives to enhance digital literacy in remote areas.',
        location: 'Mombasa, Kenya',
        progress: 4,
        impact_strength: 5,
        organization_id: 3,
      },
    ];

    return of([
      ...organizations.filter(
        (initiatives) => initiatives.organization_id == organizationId
      ),
    ]);
  }
}
