import { Expert } from '../expert/shared/expert.model';
import { ExpertDetail } from '../expert/shared/expert-detail.model';

export const EXPERTS: Expert[] = [
    {
      id: 11,
      name: 'Yudi Supriyadi',
      product_count: 5,

      avatar: {
        '32x32': 'assets/images/profile_32x32.jpeg',
        '64x64': 'assets/images/profile_64x64.jpeg',
        '176x176': 'assets/images/profile_176x176.jpeg'
      },
    },
    {
      id: 12,
      name: 'Irfan Maulana',
      product_count: 8,

      avatar: {
        '32x32': 'assets/images/profile_32x32.jpeg',
        '64x64': 'assets/images/profile_64x64.jpeg',
        '176x176': 'assets/images/profile_176x176.jpeg'
      },
    },
    {
      id: 13,
      name: 'Gatot Kaca',
      product_count: 100,

      avatar: {
        '32x32': 'assets/images/profile_32x32.jpeg',
        '64x64': 'assets/images/profile_64x64.jpeg',
        '176x176': 'assets/images/profile_176x176.jpeg'
      },
    },
];

export const EXPERT: ExpertDetail = {
  id: 11,
  name: 'Yudi Supriyadi',
  product_count: 5,
  avatar: {
    '32x32': 'assets/images/profile_32x32.jpeg',
    '64x64': 'assets/images/profile_64x64.jpeg',
    '176x176': 'assets/images/profile_176x176.jpeg'
  },

  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do' + 
  'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' +
  'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex' +
  'ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate' +
  'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat' +
  'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id' +
  'est laborum.<br><br>' + 
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium' +
  'doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore' +
  'veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim' +
  'ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia' +
  'consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque' +
  'porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,' +
  'adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore' +
  'et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis' +
  'nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid',

  social_media : {
    'twitter_username': 'yudi099',
    'linkedin_username': 'yudi099',
    'facebook_url': 'yudi.supriyadi123',
  }
}

