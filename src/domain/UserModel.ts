export interface UserModel {
  id: number;
  first_name: string;
  last_name: string;
  location: string;
  imgUrl: string;
  userName: string;
  email: {
    name: string;
    verified: boolean;
  };
  phone: {
    number: string;
    verified: boolean;
  };
  sex: 'male' | 'female';
  birthday: string;
  lang: 'en' | 'de';
  country: string;
  city: string;
  address1: string;
  address2?: string;
  zipcode: number;
  website?: string;
  socials?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}
