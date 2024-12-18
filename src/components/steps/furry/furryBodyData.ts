import { 
  FurryBodyType, 
  FurryFaceType, 
  FurryBreastSize, 
  FurryButtSize 
} from '../../../types/furry';

interface ImageOption<T> {
  type: T;
  img: string;
}

export const furryBodyTypeOptions: ImageOption<FurryBodyType>[] = [
  {
    type: 'Curvy',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/25973897-bd56-4b67-d46c-e92a99f6c100/mobile'
  },
  {
    type: 'Petite',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/546c0e5c-9f4d-429c-c7e9-7558b0e0b200/mobile'
  },
  {
    type: 'Voluptuous',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/ff2576a9-7157-462a-56ec-7ad9c397b100/mobile'
  },
  {
    type: 'Athletic',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/e537c2a8-c5ab-46be-9701-0d2a41fb3700/mobile'
  }
];

export const furryFaceTypeOptions: ImageOption<FurryFaceType>[] = [
  {
    type: 'Full Human Face',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/b6e19698-ae9e-4528-3561-e10f37ba5000/mobile'
  },
  {
    type: 'Half Furry Face',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/ffe367b3-e8bd-4182-2f92-02fdf4bd9500/mobile'
  },
  {
    type: 'Full Furry Face',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/a64f10bf-f34b-464c-4dbf-a8573eeeb600/mobile'
  }
];

export const furryBreastSizeOptions: ImageOption<FurryBreastSize>[] = [
  {
    type: 'Small',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/1427854a-be21-472d-44e7-3ecdcc166b00/mobile'
  },
  {
    type: 'Medium',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/3de4494d-c35c-45a5-557e-8b4ec105f200/mobile'
  },
  {
    type: 'Large',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/c5381a07-9d08-4602-7fde-af89cb8fd200/mobile'
  },
  {
    type: 'Huge',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/44a3395c-05c6-45be-7174-9ef1f94f1800/mobile'
  }
];

export const furryButtSizeOptions: ImageOption<FurryButtSize>[] = [
  {
    type: 'Small',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/81a84a89-624d-4a54-13c6-fe801f96d100/mobile'
  },
  {
    type: 'Medium',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/33f20db2-dc86-4a73-f214-558c9edec800/mobile'
  },
  {
    type: 'Large',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/6fd31e14-db4b-429f-937f-42d13d545400/mobile'
  },
  {
    type: 'Huge',
    img: 'https://imagedelivery.net/80ncJPif6mMa3mEeTHej8g/a5c2f49a-1679-40a7-f700-78e5d9aca600/mobile'
  }
];