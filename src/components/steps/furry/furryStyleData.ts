import { FurryStyle } from '../../../types/furry';

interface FurryStyleOption {
  type: FurryStyle;
  img: string;
}

export const furryStyleOptions: FurryStyleOption[] = [
  {
    type: 'Kemonomimi',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/855bf741-c52e-445d-a638-9b8ca7a25500/mobile'
  },
  {
    type: 'Kemono',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/0f6a4a34-8f29-4489-e02f-76000974b700/mobile'
  },
  {
    type: 'Reptilian',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/64bfa3bb-5a8a-4749-bb11-c6fe72dc3c00/mobile'
  },
  {
    type: 'Half Avian',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/9efcdd27-0147-486a-d84c-16474ea74600/mobile'
  },
  {
    type: 'Full Avian',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/cfa9fdc8-ec33-45e2-b7b9-5d6f92b24000/mobile'
  }
];