export class Expert {
  id            : number;
  name          : string;
  product_count : number;
  avatar        : {
    '32x32': string,
    '64x64': string,
    '176x176': string,
  };

  email         : string;
  password      : string;
}

