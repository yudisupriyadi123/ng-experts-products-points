import { Expert } from './expert.model';

export class ExpertDetail extends Expert {
  bio          : string;
  social_media : {
    'twitter_username': string,
    'linkedin_username': string,
    'facebook_url': string, // profile url
  }
}

