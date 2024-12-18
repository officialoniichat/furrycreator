import { FurryAge } from '../../../types/furry';

interface FurryAgeOption {
  type: FurryAge;
  img: string;
}

export const furryAgeOptions: FurryAgeOption[] = [
  {
    type: 'Teen(18+)',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/878644ae-b935-4e43-45bf-cd1c99ed8400/mobile'
  },
  {
    type: 'Middle Aged(60+)',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/af708caf-f491-4d8d-70c9-20895c4ba800/mobile'
  },
  {
    type: 'Old(100+)',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/aeb28684-a21d-4de3-e351-113f90e0d600/mobile'
  },
  {
    type: 'Ultra(1000+)',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/9e07ad60-ff61-4bda-3e13-aa3cfeb6ff00/mobile'
  }
];