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

interface User {
   general: General;
   job: Job;
   contact: Contact;
   address: Address;
}

export class User implements User {
	general: General;
	job: Job;
	contact: Contact;
	address: Address;
};