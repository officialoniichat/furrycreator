import { FurrySkinType } from '../../../types/furry';

interface FurrySkinTypeOption {
  type: FurrySkinType;
  img: string;
}

export const furrySkinTypeOptions: FurrySkinTypeOption[] = [
  {
    type: 'Scales',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/5f0f566b-d3c5-49f0-95fa-ba2b3a807400/mobile'
  },
  {
    type: 'Fur',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/9dfbfc8f-ddf7-41cb-bb80-d4c13871dc00/mobile'
  },
  {
    type: 'Feathers',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/66435c71-5bfe-47df-0d13-179bf1bf0900/mobile'
  }
];

export const furryColorOptions = [
  { type: 'Blonde', backgroundColor: '#D4B483' },
  { type: 'Brunette', backgroundColor: '#8B4513' },
  { type: 'Black', backgroundColor: '#000000' },
  { type: 'Red', backgroundColor: '#CD5C5C' },
  { type: 'Pink', backgroundColor: '#FF69B4' },
  { type: 'White', backgroundColor: '#FFFFFF', textColor: '#000000' },
  { type: 'Blue', backgroundColor: '#4682B4' },
  { type: 'Green', backgroundColor: '#3CB371' },
  { type: 'Purple', backgroundColor: '#9370DB' },
  { type: 'Multicolor', backgroundColor: 'transparent', gradient: true }
];

export const furryEyeColorOptions = [
  { type: 'Yellow', backgroundColor: '#FFD700' },
  { type: 'Blue', backgroundColor: '#4169E1' },
  { type: 'Red', backgroundColor: '#DC143C' },
  { type: 'Brown', backgroundColor: '#8B4513' },
  { type: 'Green', backgroundColor: '#228B22' }
];