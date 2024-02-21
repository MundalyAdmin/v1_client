import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { Organization } from '../organization/organization.model';

@Injectable({
  providedIn: 'root',
})
export class ResearchPartnerService extends BaseService<Organization> {
  constructor() {
    super('research-partners');

    this.data = [
      // Data Haven
      {
        id: 1,
        name: 'Data Haven',
        about:
          'DataHaven conducted the DataHaven Community Wellbeing Survey (DCWS), a statistical household survey to gather information on wellbeing and quality of life in Connecticut’s diverse neighborhoods. The DCWS is a nationally-recognized program that provides critical, highly-reliable local information not available from any other public data source. ',
        logo: 'https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/347816197_256280933570748_6467440995231643975_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFpAp6a6IY3PlJ-SrlveSfRLbhwXp-kuA0tuHBen6S4DXNWxQaRlgp9URgM7Yf1lDMxo-m31dpifPytmn4aKVc2&_nc_ohc=SdUkT1vkfoAAX_d6I4V&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&oh=00_AfAzJJ2wyMF32Eh_Fk7xM7rSOMwwtJ7Jv_HFjFznshSJJg&oe=65CA8C9E',

        website: 'https://ctdatahaven.org/',
        email: 'contact@ctdatahaven.org/',
        sector_organization_id: 1,
        type_organization_id: 10,
        country: 'United States',
        city: 'Connecticut',
        creator_id: 2,
        profile_status_organization_id: 2,
      },
      // Community Research Consulting
      {
        id: 2,
        name: 'Community Research Consulting',
        about:
          'CRC correlated data across all research eforts and facilitated multiple meetings with community partners and stakeholders. Applying insights from these sessions, CRC developed the CHNA report and led strategic planning in creation of the Community Health Improvement Plan (CHIP).  ',
        logo: 'https://img1.wsimg.com/isteam/ip/f2fb6e4d-d665-4042-9e12-bb67372a3386/Build%20Community%20logo.png/:/rs=w:221,h:75,cg:true,m/cr=w:221,h:75/qt=q:100/ll',

        website: 'https://buildcommunity.com/',
        email: 'contact@buildcommunity.com/',
        sector_organization_id: 1,
        type_organization_id: 10,
        country: 'United States',
        city: 'Connecticut',
        creator_id: 2,
        profile_status_organization_id: 2,
      },
      // Community Wisdom/NRC Health
      {
        id: 3,
        name: 'Community Wisdom/NRC Health',
        about:
          'Community Wisdom/NRC Health conducted community conversations through a series of interviews and surveys of 142 diverse community residents during March and April 2022 to collect feedback on community health priorities.',
        logo: 'https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/301005199_405890078318254_5887025363070210917_n.png?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHZiEOrMIc6Y4KradCA0egOJ-EFbQbFsdwn4QVtBsWx3Pmzd5x8CJxlywpmTzzFa66dhkq6KR6HnbJstme8--hk&_nc_ohc=2Fm_X6hWHuQAX9kTDSd&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&oh=00_AfDfB9X0Mh5m96YdjB-Ze75XPJDl8Njxu4Wl4CXEKqQbjw&oe=65C9056E',

        website: 'https://nrchealth.com/',
        email: 'contact@nrchealth.com/',
        sector_organization_id: 1,
        type_organization_id: 10,
        country: 'United States',
        city: 'Connecticut',
        creator_id: 2,
        profile_status_organization_id: 2,
      },
    ];
  }
}
