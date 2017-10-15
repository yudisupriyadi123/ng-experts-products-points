export class Expert {
  id            : number;
  name          : string;
  product_count : number;
  bio           : string;
  avatar        : {
    '32x32': string,
    '64x64': string,
    '176x176': string,
  };
  social_media : {
    'twitter_username': string,
    'linkedin_username': string,
    'facebook_url': string, // profile url
  }

  email         : string;
  password      : string;
}

