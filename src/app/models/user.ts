interface General {
   firstName: string;
   lastName: string;
   avatar: string;
}

interface Job {
  company: string;
  title: string;
}

interface Contact {
  email: string;
  phone: string;
}

interface Address {
  street: string;
  city: string;
  zipCode: string;
  country: string;
}

export interface User {
  general: General;
  job: Job;
  contact: Contact;
  address: Address;
}

import { USERS } from '../user-mock';

export function generateMockUser(): User {
  return USERS[0];
}

export function generateMockUsers(): User[] {
  return USERS;
}
