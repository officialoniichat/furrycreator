export type FurryStyle = 'Kemonomimi' | 'Kemono' | 'Reptilian' | 'Half Avian' | 'Full Avian';
export type FurryAge = 'Teen(18+)' | 'Middle Aged(60+)' | 'Old(100+)' | 'Ultra(1000+)';
export type FurryEyeColor = 'Yellow' | 'Blue' | 'Red' | 'Brown' | 'Green';
export type FurrySkinType = 'Scales' | 'Fur' | 'Feathers';
export type FurryColor = 'Blonde' | 'Brunette' | 'Black' | 'Red' | 'Pink' | 'White' | 'Blue' | 'Green' | 'Purple' | 'Multicolor';
export type FurryBodyType = 'Curvy' | 'Petite' | 'Voluptuous' | 'Athletic';
export type FurryFaceType = 'Full Human Face' | 'Half Furry Face' | 'Full Furry Face';
export type FurryBreastSize = 'Small' | 'Medium' | 'Large' | 'Huge';
export type FurryButtSize = 'Small' | 'Medium' | 'Large' | 'Huge';

export interface FurryCharacter {
  furryStyle: FurryStyle;
  furryAge: FurryAge;
  furryEyeColor: FurryEyeColor;
  furrySkinType: FurrySkinType;
  furryColor: FurryColor;
  furryBodyType: FurryBodyType;
  furryFaceType: FurryFaceType;
  furryBreastSize: FurryBreastSize;
  furryButtSize: FurryButtSize;
}