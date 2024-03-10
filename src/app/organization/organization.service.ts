import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { Organization } from './organization.model';
import { debounceTime, map, tap, of, Observable } from 'rxjs';
import { ApiResponse } from '../shared/models/ApiResponse';
import { OrganizationSearchData } from '../public/public-community/organization/organization-search-data.model';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService extends BaseService<Organization> {
  constructor() {
    super('organizations');
  }

  getBySectorOrganization(sectorOrganizationId: number) {
    return this.factory
      .get(`${this.endPoint}/sector-organizations/${sectorOrganizationId}`)
      .pipe(
        tap((response: ApiResponse<Organization>) => {
          this.data = response.data as Organization[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map((response: ApiResponse<Organization>) => response.data)
      );
  }

  getSimilar(organizationId: number) {
    return this.factory.get(`${this.endPoint}/random/${organizationId}`).pipe(
      tap((response: ApiResponse<Organization>) => {
        this.data = response.data as Organization[];
      }),
      map(
        (response: ApiResponse<Organization>) => response.data as Organization[]
      )
    );
  }

  search(searchData: OrganizationSearchData) {
    return this.factory
      .get(`${this.endPoint}/search`, { params: searchData })
      .pipe(
        tap((response: ApiResponse<Organization>) => {
          this.data = response.data as Organization[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map((response: ApiResponse<Organization>) => response.data)
      );
  }

  searchNames(keyword: string) {
    return this.factory
      .get(`${this.endPoint}/search/names/${keyword}`)
      .pipe(
        map(
          (response: ApiResponse<{ name: string; logo: string }>) =>
            response.data as { name: string; logo: string }[]
        )
      );
  }

  getIdByWebsiteUrl(websiteUrl: string) {
    return this.factory
      .get(`${this.endPoint}/website`, { params: { websiteUrl } })
      .pipe(
        map(
          (response: ApiResponse<Partial<Organization>>) =>
            response.data as Partial<Organization>
        )
      );
  }

  getTopRated() {
    return this.factory
      .get(`${this.endPoint}/top-rated`)

      .pipe(
        tap((response: ApiResponse<Organization>) => {
          this.data = response.data as Organization[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map((response: ApiResponse<Organization>) => response.data)
      );
  }

  getPortfolio() {
    return this.factory
      .get(`${this.endPoint}/portfolio`)

      .pipe(
        tap((response: ApiResponse<Organization>) => {
          this.data = response.data as Organization[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map((response: ApiResponse<Organization>) => response.data)
      );
  }

  getImpactPartners(organizationId: number): Observable<Organization[]> {
    return of([
      {
        id: 1,

        name: 'Cocoa360',
        about:
          'Cocoa360 has pioneered the farm-for-impact model, leveraging farm revenues to improve community health and education.',
        website: 'https://cocoa360.org/',
        email: 'contact@cocoa360.org',
        type_organization_id: 2,
        sector_organization_id: 1,
        country: 'Ghana',
        city: 'Tarkwa',
        creator_id: 2,
        profile_status_organization_id: 2,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/v1701819047/default-organization/oxyoqno7h8dsudupxwbo.webp',

        profile_status_organization: {
          id: 2,
          name: 'Claimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 1,

          name: 'Agriculture',
          icon: 'mdi mdi-tractor-variant',
          about: 'Agriculture',
        },
        tag_organizations: [
          {
            id: 6,

            name: 'Health Equity',
          },
          {
            id: 21,

            name: 'Community',
          },
          {
            id: 27,

            name: 'Impact Funder',
          },
        ],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/oxyoqno7h8dsudupxwbo',
      },
      {
        id: 2,

        name: 'Aterian plc',
        about:
          'Aterian plc is listed on the London Stock Exchange (LSE:ATN) and is a critical and strategic metal focused exploration and development company. Our target metals are strategically essential to the economy, and any disrupted supply may have a significant impact on the production of critical and/or strategic end products.',
        website: 'https://aterianplc.com/',
        email: 'contact@aterianplc.com',
        type_organization_id: 2,
        sector_organization_id: 3,
        country: 'United Kingdom',
        city: 'London',
        creator_id: 1,
        profile_status_organization_id: 2,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/v1701819047/default-organization/iqcdwtiam51oxxknfxu4.png',

        profile_status_organization: {
          id: 2,

          name: 'Claimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 3,
          name: 'Mining',
          icon: 'mdi mdi-pickaxe',
          about: 'Mining',
        },
        tag_organizations: [
          {
            id: 22,

            name: 'Youth',
          },
          {
            id: 25,

            name: 'Initiative',
          },
          {
            id: 26,

            name: 'Career',
          },
        ],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/iqcdwtiam51oxxknfxu4',
      },
      {
        id: 3,

        name: 'Getmedford',
        about:
          'GetMedford is enhancing Nigeria Healthcare system through high quality and affordable medication. Our vision is to revolutionize the Pharmaceutical supply chain in Africa by giving care givers access to quality and affordable medication.',
        website: 'https://getmedford.com/',
        email: 'contact@getmedford.com',
        type_organization_id: 2,
        sector_organization_id: 4,
        country: 'Nigeria',
        city: 'Abuja',
        creator_id: 1,
        profile_status_organization_id: 2,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/get-medford_pqkshg_c_pad_ar_1_1_jeztmf',

        profile_status_organization: {
          id: 2,

          name: 'Claimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 4,

          name: 'Pharmaceutical',
          icon: 'mdi mdi-pill',
          about: 'Pharmaceutical',
        },
        tag_organizations: [
          {
            id: 4,

            name: 'Healthcare Access',
          },
          {
            id: 21,

            name: 'Community',
          },
          {
            id: 22,

            name: 'Youth',
          },
        ],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/get-medford_pqkshg_c_pad_ar_1_1_jeztmf',
      },
      {
        id: 4,

        name: 'Dr DoGood',
        about:
          'Drdogood is a health-tech dedicated to reshaping the dynamics of primary healthcare access and delivery. Through our comprehensive web and mobile-based application, we offer a platform that simplifies interactions between patients and healthcare providers.',
        website: 'https://www.drdogood.health/',
        email: 'contact@drdogood.health',
        type_organization_id: 2,
        sector_organization_id: 11,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 2,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/dogoood_uv6f60',

        profile_status_organization: {
          id: 2,

          name: 'Claimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 11,

          name: 'Health',
          icon: 'mdi mdi-bottle-tonic-plus-outline',
          about: 'Health',
        },
        tag_organizations: [
          {
            id: 17,

            name: 'Education',
          },
          {
            id: 21,

            name: 'Community',
          },
          {
            id: 23,

            name: 'Health',
          },
        ],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/dogoood_uv6f60%20',
      },
      {
        id: 5,

        name: 'DoktorConnect',
        about:
          'Doktorconnect is a digital health platform that provides access to personalized medical care using a comprehensive wellness-based approach and genetic analysis for chronic disease prevention and management. We benchmark your genomics against your wellness result, to design an evidence-based lifestyle management plan for you. ',
        website: 'https://doktorconnect.com/ng/index.html',
        email: 'contact@doktorconnect.com ',
        type_organization_id: 2,
        sector_organization_id: 11,
        country: 'Nigeria',
        city: 'Lagos',
        creator_id: 1,
        profile_status_organization_id: 2,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/oepf6e7jtuof9kdyj2tr',

        profile_status_organization: {
          id: 2,

          name: 'Claimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 11,

          name: 'Health',
          icon: 'mdi mdi-bottle-tonic-plus-outline',
          about: 'Health',
        },
        tag_organizations: [
          {
            id: 4,

            name: 'Healthcare Access',
          },
          {
            id: 6,

            name: 'Health Equity',
          },
          {
            id: 14,

            name: 'Health Education',
          },
        ],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/oepf6e7jtuof9kdyj2tr',
      },
      {
        id: 6,

        name: 'Snark Health Limited',
        about:
          'We are creating a new way to help patients pay for health care, without the need for health insurance. We do this through our alternative payment model using at-risk contracting, liquidity pools, de-identified “data as a common resource” and our novel health savings vehicle. Patients pay a sliding scale down to $0 to see a doctor.',
        website: 'https://snarkhealth.com/',
        email: 'contact@snarkhealth.com',
        type_organization_id: 2,
        sector_organization_id: 11,
        country: 'Nairobi',
        city: 'Kenya',
        creator_id: 1,
        profile_status_organization_id: 2,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/snarkhealth_wfhihv',

        profile_status_organization: {
          id: 2,

          name: 'Claimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 11,

          name: 'Health',
          icon: 'mdi mdi-bottle-tonic-plus-outline',
          about: 'Health',
        },
        tag_organizations: [
          {
            id: 4,

            name: 'Healthcare Access',
          },
          {
            id: 6,

            name: 'Health Equity',
          },
          {
            id: 21,

            name: 'Community',
          },
        ],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/snarkhealth_wfhihv',
      },
      {
        id: 7,

        name: 'Chestify AI',
        about:
          'At Chestify AI, our mission is to aggressively tackle the socio-economic and health distress created by the inadequate radiology infrastructure and presence of fewer radiologists in Africa and the Caribbean with a clinician-led artificial intelligence platform providing comprehensive tele-medicine solutions for medical imaging.',
        website: 'https://chestifyai.com/',
        email: 'contact@chestifyai.com',
        type_organization_id: 2,
        sector_organization_id: 11,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 2,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/chestify-ai_e5qij8_c_pad_ar_1_1_vfudyt',

        profile_status_organization: {
          id: 2,

          name: 'Claimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 11,

          name: 'Health',
          icon: 'mdi mdi-bottle-tonic-plus-outline',
          about: 'Health',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/chestify-ai_e5qij8_c_pad_ar_1_1_vfudyt',
      },
      {
        id: 8,

        name: 'The Bank Hospital',
        about:
          'The Bank Hospital is a multi-disciplinary private healthcare facility focusing on the best possible clinical outcomes for our patients and their families.\nWith modern up to date facilities and state of the art equipment, The Bank Hospital offers a broad spectrum of expert medical care and services to meet the needs of the communities we serve, in Accra, Ghana and across our borders',
        website: 'https://thebankhospital.com/',
        email: 'contact@thebankhospital.com',
        type_organization_id: 2,
        sector_organization_id: 11,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 1,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/the-bank-hospital_ihpin0_tjvew0',

        profile_status_organization: {
          id: 1,

          name: 'Unclaimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 11,

          name: 'Health',
          icon: 'mdi mdi-bottle-tonic-plus-outline',
          about: 'Health',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/the-bank-hospital_ihpin0_tjvew0',
      },
      {
        id: 9,

        name: 'University of Ghana Medical Centre',
        about:
          'The University of Ghana Medical Centre LTD (UGMC) is an ultra-modern medical centre offering world-class quaternary level Health services, Training and Research in Ghana, West Africa and beyond. It is magnificently nestled on the southernmost tip of the University of Ghana, the Country’s premier university located in Legon, Accra and about ten minutes away from the Kotoka International Airport.',
        website: 'https://ugmedicalcentre.org/',
        email: 'contact@ugmedicalcentre.org',
        type_organization_id: 2,
        sector_organization_id: 1,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 1,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/ugmclogo_vzd6oc_junzn2',

        profile_status_organization: {
          id: 1,

          name: 'Unclaimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 1,

          name: 'Agriculture',
          icon: 'mdi mdi-tractor-variant',
          about: 'Agriculture',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/ugmclogo_vzd6oc_junzn2',
      },
      {
        id: 10,

        name: 'FOCOS Orthopedic Hospital',
        about:
          'FOCOS mission is to provide comprehensive, affordable orthopaedic care to those who would not otherwise have access to such treatment.  Specifically, we strive to improve accessibility to top-notch surgical and non-surgical care for patients who suffer from debilitating musculoskeletal conditions, such as complex spine deformities and pediatric orthopedic problems, in underserved areas.',
        website: 'https://focoshospital.org/home/',
        email: 'contact@focoshospital.org',
        type_organization_id: 2,
        sector_organization_id: 11,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 1,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/focos-logo_ebtwzi',

        profile_status_organization: {
          id: 1,

          name: 'Unclaimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 11,

          name: 'Health',
          icon: 'mdi mdi-bottle-tonic-plus-outline',
          about: 'Health',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/focos-logo_ebtwzi',
      },
      {
        id: 11,

        name: 'Pro-Vita Specialist Hospital',
        about:
          'Pro-Vital Specialist Hospital is a specialized medical facility that provides up to date medical services by experienced personnel. We combine compassion and expertise with advanced infertility and reproductive treatment options, including IVF, Obstetrics, Gynaecology, Egg & Sperm Donation and General cases. The result is personalized approach to a medical care that centers on the client/patient.',
        website: 'https://provitaspecialisthospital.co/',
        email: 'contact@provitaspecialisthospital.co',
        type_organization_id: 2,
        sector_organization_id: 11,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 1,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/provita-logo_mdsz2a_wyfpt5',

        profile_status_organization: {
          id: 1,

          name: 'Unclaimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 11,

          name: 'Health',
          icon: 'mdi mdi-bottle-tonic-plus-outline',
          about: 'Health',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/provita-logo_mdsz2a_wyfpt5',
      },
      {
        id: 12,

        name: 'St. John’s Hospital & Fertility Centre',
        about:
          "St John's Hospital & Fertility Centre is situated at Tantra Hills Roundabout near the Goil Service Station. The main goal of the hospital is to ease the stress people leaving around go through in terms of accessing health services and also to provide quality and affordable healthcare services to surrounding communities..",
        website: 'https://st-johns-hospital-gh.business.site/',
        email: 'contact@st-johns-hospital-gh.business.site',
        type_organization_id: 2,
        sector_organization_id: 11,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 1,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/st-john-logo_n182vy_rsjb4n',

        profile_status_organization: {
          id: 1,

          name: 'Unclaimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 11,

          name: 'Health',
          icon: 'mdi mdi-bottle-tonic-plus-outline',
          about: 'Health',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/st-john-logo_n182vy_rsjb4n',
      },
      {
        id: 13,

        name: 'Tobinco Pharmaceuticals',
        about:
          'Tobinco Pharmaceuticals Limited (TPL) is currently the leading pharmaceutical marketing and distribution company in Ghana and has backwardly integrated by producing other products locally to tap into the sub regional market.',
        website: 'https://tobincopharma.com/',
        email: 'contact@tobincopharma.com',
        type_organization_id: 2,
        sector_organization_id: 4,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 1,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/tobinco-logo_wwneoc_pzusdl',

        profile_status_organization: {
          id: 1,

          name: 'Unclaimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 4,

          name: 'Pharmaceutical',
          icon: 'mdi mdi-pill',
          about: 'Pharmaceutical',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/tobinco-logo_wwneoc_pzusdl',
      },
      {
        id: 14,

        name: 'mPharma',
        about:
          " mPharma's mission is to increase patient access to high quality medications. Through our drug benefits service, we offer a number of solutions to health insurance companies and pharmaceutical companies to make it easier for patients to afford their medications.",
        website: 'https://mpharma.com/',
        email: 'contact@mpharma.com',
        type_organization_id: 2,
        sector_organization_id: 4,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 1,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/mpharma-logo_y0hrol_t2t5m8',

        profile_status_organization: {
          id: 1,

          name: 'Unclaimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 4,

          name: 'Pharmaceutical',
          icon: 'mdi mdi-pill',
          about: 'Pharmaceutical',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/mpharma-logo_y0hrol_t2t5m8',
      },
      {
        id: 15,

        name: 'St. John of God Hospital',
        about:
          'The St. John of God Hospital, Amrahia was established in August 2011 by the Hospitaller Brothers of St. John of God in collaboration with the Catholic Bishop of Accra after the elders of the Amrahia had made an appeal on the need for a Clinic / Hospital for the community.',
        website: 'http://sjoghamrahia.com/',
        email: 'contact@sjoghamrahia.com',
        type_organization_id: 2,
        sector_organization_id: 11,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 1,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/saint-john-of-god-logo_ozi4ac_rrufiy',

        profile_status_organization: {
          id: 1,

          name: 'Unclaimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 11,

          name: 'Health',
          icon: 'mdi mdi-bottle-tonic-plus-outline',
          about: 'Health',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/saint-john-of-god-logo_ozi4ac_rrufiy',
      },
      {
        id: 16,

        name: 'Origin Chemist',
        about:
          'An award winning pharmaceutical company in Ghana ensuring that Good Health is made accessible and affordable for all.\nIn 2021, we achieved accreditation from the Pharmacy Council of Ghana for our Origin College. This College is dedicated to nurturing compassionate health professionals, specifically Medicine Counter Assistants, who genuinely care about others. Through our comprehensive training programs, we inspire empathy towards patients and strive to create healthier communities.',
        website: 'https://originghana.com/',
        email: 'contact@originghana.com',
        type_organization_id: 2,
        sector_organization_id: 4,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 1,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/origin-chemist-logo_morru4_d3qjzq',

        profile_status_organization: {
          id: 1,

          name: 'Unclaimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 4,

          name: 'Pharmaceutical',
          icon: 'mdi mdi-pill',
          about: 'Pharmaceutical',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/origin-chemist-logo_morru4_d3qjzq',
      },

      {
        id: 18,

        name: 'International Development Enterprises (IDE)-Ghana',
        about:
          'In 2010, iDE began working in Ghana to enable farmers’ access to improved irrigation techniques that allow for farming in the dry season, leading to increased incomes and food security. Today, iDE is also increasing access to sanitation and handwashing.',
        website: 'https://www.ideglobal.org/country/ghana',
        email: 'contact@ideglobal.org',
        type_organization_id: 2,
        sector_organization_id: 1,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 1,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/ide-logo_kvoath_br0ees',

        profile_status_organization: {
          id: 1,

          name: 'Unclaimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 1,

          name: 'Agriculture',
          icon: 'mdi mdi-tractor-variant',
          about: 'Agriculture',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/ide-logo_kvoath_br0ees',
      },
      {
        id: 19,

        name: 'Constromart Africa',
        about:
          'Constromart is a multidisciplinary Engineering, Advisory and Project Management Consulting firm serving Clients in Africa. We provide exceptional services by supporting key government projects in Africa. We have the reputation to be the first Africa-based Consulting firm to be involved in the implementation of an Output Performance-based Road Contract (OPRC) in Ghana since 2020.',
        website: 'https://constromartafrica.com/',
        email: 'contact@constromartafrica.com',
        type_organization_id: 2,
        sector_organization_id: 5,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 1,
        logo: 'f4785242ecc4bf68acc6eef1405c7c2c',

        profile_status_organization: {
          id: 1,

          name: 'Unclaimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 5,

          name: 'Consulting',
          icon: 'mdi mdi-account-tie',
          about: 'Consulting',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/constromart-logo_bnpbpr_sazpcg',
      },
      {
        id: 20,

        name: 'Kasapreko',
        about:
          'Leading manufacturer of alcoholic and non-alcoholic beverages in Ghana.The Chartered Institute of Marketing, Ghana (CIMG)\n Kasapreko is a manufacturer of alcoholic and non-alcoholic beverages in Ghana. Kasapreko combines the best from our Ghanaian heritage with herbal science and state-of-the-art manufacturing technology strives to deliver products that offer a multiplicity of benefits to the end consumer.',
        website: 'https://kasapreko.com/home',
        email: 'contact@kasapreko.com',
        type_organization_id: 2,
        sector_organization_id: 6,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 1,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/kasapreko-logo_x2oeqc_ggplwx',

        profile_status_organization: {
          id: 1,

          name: 'Unclaimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 6,

          name: 'Food and beverages',
          icon: 'mdi mdi-food-outline',
          about: 'Food and beverages',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/kasapreko-logo_x2oeqc_ggplwx',
      },
      {
        id: 21,

        name: 'm-kopa',
        about:
          ' Founded in 2011, M-KOPA is a fintech platform that provides digital financial services to underbanked consumers by leveraging data to combine digital micropayments with the Internet of Things [IoT] technology',
        website: 'https://www.m-kopa.com/',
        email: 'contact@-kopa.com',
        type_organization_id: 2,
        sector_organization_id: 7,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 1,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/m-kopa-logo_iiwafd_m3r8je',

        profile_status_organization: {
          id: 1,

          name: 'Unclaimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 7,

          name: 'Finance',
          icon: 'mdi mdi-cash-multiple',
          about: 'Finance',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/m-kopa-logo_iiwafd_m3r8je',
      },
      {
        id: 22,

        name: 'Petra Holdings ',
        about:
          'Petra offers top-notch fund administration services, financial advisory services, corporate trustee services and other workplace benefits-related services to individuals and institutions, to empower them to make the best choices to achieve their desired financial future.',
        website: 'https://petraonline.com/',
        email: 'contact@petraonline.com',
        type_organization_id: 2,
        sector_organization_id: 5,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 1,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/petra-online-logo_wly7mh_f7cbam',

        profile_status_organization: {
          id: 1,

          name: 'Unclaimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 5,

          name: 'Consulting',
          icon: 'mdi mdi-account-tie',
          about: 'Consulting',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/petra-online-logo_wly7mh_f7cbam',
      },
      {
        id: 23,

        name: 'Caveman Watches',
        about:
          'Caveman is a Ghanaian, New York Times endorsed watch company based in Accra, Adringanor plot 81. Caveman is committed to designing, hand assembling and delivering not only quality but to deliver consistently. ',
        website: 'https://www.cavemanwatches.com/',
        email: 'contact@cavemanwatches.com',
        type_organization_id: 2,
        sector_organization_id: 8,
        country: 'Ghana',
        city: 'Accra',
        creator_id: 1,
        profile_status_organization_id: 1,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/caveman-logo_bgk4iu_xbfmg1',

        profile_status_organization: {
          id: 1,

          name: 'Unclaimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 8,

          name: 'Fashion and Luxury',
          icon: 'mdi mdi-cards-diamond',
          about: 'Fashion and Luxury',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/caveman-logo_bgk4iu_xbfmg1',
      },
      {
        id: 24,

        name: 'Yale New Haven',
        about:
          'Yale new Haven are a nonprofit health system that includes five acute-care hospitals, a medical foundation, several multispecialty centers and dozens of outpatient locations and ambulatory sites stretching from Westchester County, New York, to Westerly, Rhode Island.',
        website: 'https://www.ynhhs.org/',
        email: 'contact@ynhhs.org',
        type_organization_id: 2,
        sector_organization_id: 11,
        country: 'United States',
        city: 'New Haven',
        creator_id: 2,
        profile_status_organization_id: 2,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/yale-new-haven_iut3dr',

        profile_status_organization: {
          id: 2,

          name: 'Claimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 11,

          name: 'Health',
          icon: 'mdi mdi-bottle-tonic-plus-outline',
          about: 'Health',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/yale-new-haven_iut3dr',
      },
      {
        id: 25,

        name: 'New Haven Promise',
        about:
          'New Haven Promise partners with students, families,  colleges, community-based organizations, and businesses to strengthen academic skills and career preparedness.',
        website: 'https://www.announcement.newhavenpromise.org/',
        email: 'contact@newhavenpromise.org',
        type_organization_id: 1,
        sector_organization_id: 10,
        country: 'United States',
        city: 'New Haven',
        creator_id: 2,
        profile_status_organization_id: 2,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/new-haven-promise-logo_fznlpr',

        profile_status_organization: {
          id: 2,

          name: 'Claimed',
        },
        type_organization: {
          id: 1,

          name: 'Impact Funder - Granter',
        },
        sector_organization: {
          id: 10,

          name: 'Non-profit',
          icon: 'mdi mdi-hand-heart-outline',
          about: 'Non-profit',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/new-haven-promise-logo_fznlpr',
      },
      {
        id: 26,

        name: 'Center for Children’s Advocacy',
        about:
          "CAANH's mission is to offer pathways to prosperity to those in poverty in the Greater New Haven area. Community Action changes people's lives, embodies the spirit of hope, improves communities, and makes America a better place to live. We care about the entire community, and we are dedicated to helping people help themselves and each other.",
        website: 'https://cca-ct.org/',
        email: 'contact@cca-ct.org',
        type_organization_id: 2,
        sector_organization_id: 9,
        country: 'United States',
        city: 'New Haven',
        creator_id: 2,
        profile_status_organization_id: 2,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/gdaeexjssnitt607nr6d',

        profile_status_organization: {
          id: 2,

          name: 'Claimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 9,

          name: 'Laws and regulations',
          icon: 'mdi mdi-gavel',
          about: 'Laws and regulations',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/gdaeexjssnitt607nr6d',
      },
      {
        id: 27,

        name: 'East Haven Adult Learning Center',
        about:
          'The East Haven Adult Learning Center is dedicated to offering lifetime educational opportunities to all. We are committed to preparing lifelong learners and problem solving individuals in an atmosphere of mutual respect; offering a program that increases skills, knowledge, and self-esteem ',
        website: 'https://easthaven.coursestorm.com/',
        email: 'contact@easthaven.coursestorm.com',
        type_organization_id: 2,
        sector_organization_id: 2,
        country: 'United States',
        city: 'New Haven',
        creator_id: 1,
        profile_status_organization_id: 2,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/n0jsjex5idl5qyfjednd',

        profile_status_organization: {
          id: 2,

          name: 'Claimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 2,

          name: 'Education',
          icon: 'mdi mdi-school',
          about: 'Education',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/n0jsjex5idl5qyfjednd',
      },
      {
        id: 28,

        name: 'East Shore District Health Department',
        about:
          'ESDHD provides essential public health services such as Building Approvals, Septic System Permits, and Food Service Permits to a population of over 70,000 residents. We are committed to improving the health and well being of our residents through public health programs that promote wellness, prevent and control disease, and provide education about healthy lifestyles.',
        website: 'https://esdhd.org/',
        email: 'contact@esdhd.org',
        type_organization_id: 2,
        sector_organization_id: 11,
        country: 'United States',
        city: 'New Haven',
        creator_id: 1,
        profile_status_organization_id: 2,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/icf7kce6vvrc5ekntxfg',

        profile_status_organization: {
          id: 2,

          name: 'Claimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 11,

          name: 'Health',
          icon: 'mdi mdi-bottle-tonic-plus-outline',
          about: 'Health',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/icf7kce6vvrc5ekntxfg',
      },
      {
        id: 29,

        name: 'Fair Haven Community Health Care',
        about:
          'Our mission is to improve the health and social well-being of the communities we serve through equitable, high quality, patient-centered care that is culturally responsive. We believe that everyone should have access to high-quality medical and dental care, regardless of ability to pay.',
        website: 'https://fhchc.org/',
        email: 'contact@fhchc.org',
        type_organization_id: 2,
        sector_organization_id: 11,
        country: 'United States',
        city: 'New Haven',
        creator_id: 1,
        profile_status_organization_id: 2,
        logo: 'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/v1/default-organization/lc4gdnolrdbsvue4e2pg',

        profile_status_organization: {
          id: 2,

          name: 'Claimed',
        },
        type_organization: {
          id: 2,

          name: 'Impact Implementer - Facilitator',
        },
        sector_organization: {
          id: 11,

          name: 'Health',
          icon: 'mdi mdi-bottle-tonic-plus-outline',
          about: 'Health',
        },
        tag_organizations: [],
        logo_thumb:
          'http://res.cloudinary.com/mundaly/image/upload/c_fill,h_200,w_200/v1/default-organization/lc4gdnolrdbsvue4e2pg',
      },
    ]);
  }
}
