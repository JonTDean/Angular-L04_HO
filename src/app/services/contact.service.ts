import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contact: Contact[] = [
    {
      firstName: 'Alfred',
      lastName: 'Planter',
      phoneNumber: '234-345-4567',
      email: 'alfredtheplanter@gmail.com',
    },
    {
      firstName: 'Brandon',
      lastName: 'Beck',
      phoneNumber: '293-482-2342',
      email: 'brandon.beck@yahoo.com',
    },
    {
      firstName: 'Daisy',
      lastName: 'Harvey',
      phoneNumber: '839-283-4583',
      email: 'daisyharvey22@gmail.com',
    },
    {
      firstName: 'Patrick',
      lastName: 'Wilson',
      phoneNumber: '283-472-3891',
      email: 'patrickwilson19@yahoo.com',
    },
    {
      firstName: 'Noj',
      lastName: 'Nead',
      phoneNumber: '123-444-5566',
      email: 'NojNead@Gmail.com',
    },
    {
      firstName: 'Boggo',
      lastName: 'Beams',
      phoneNumber: '123-412-1244',
      email: 'BB@Gmail.com',
    },
    {
      firstName: 'Lux',
      lastName: 'Ouier',
      phoneNumber: '231-231-1234',
      email: 'LuxOuier@Gmail.com',
    },
  ];
  constructor() {}
}
