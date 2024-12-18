import { WaifuCharacter } from '../types';

export const useIncompleteChoices = (currentStep: number, character: Partial<WaifuCharacter>) => {
  const getIncompleteChoices = () => {
    switch (currentStep) {
      case 0:
        return !character.style ? ['style'] : [];
      case 1:
        if (character.style === 'Furry') {
          return !character.furryStyle ? ['furryStyle'] : [];
        }
        return !character.ethnicity ? ['ethnicity'] : [];
      case 2:
        if (character.style === 'Furry') {
          return !character.furryAge ? ['furryAge'] : [];
        }
        return !character.age ? ['age'] : [];
      case 3:
        if (character.style === 'Furry') {
          return [
            !character.furryEyeColor && 'furryEyeColor',
            !character.furrySkinType && 'furrySkinType',
            !character.furryColor && 'furryColor',
          ].filter(Boolean) as string[];
        }
        return [
          !character.eyeColor && 'eyeColor',
          !character.hairStyle && 'hairStyle',
          !character.hairColor && 'hairColor',
        ].filter(Boolean) as string[];
      case 4:
        if (character.style === 'Furry') {
          return [
            !character.furryBodyType && 'furryBodyType',
            !character.furryFaceType && 'furryFaceType',
            !character.furryBreastSize && 'furryBreastSize',
            !character.furryButtSize && 'furryButtSize',
          ].filter(Boolean) as string[];
        }
        return [
          !character.bodyType && 'bodyType',
          !character.breastSize && 'breastSize',
          !character.buttSize && 'buttSize',
        ].filter(Boolean) as string[];
      case 5:
        return [
          !character.personality && 'personality',
          !character.voice && 'voice',
        ].filter(Boolean) as string[];
      case 6:
        return [
          !character.occupation && 'occupation',
          (!character.hobbies?.length && 'hobbies'),
        ].filter(Boolean) as string[];
      case 7:
        return !character.relationship ? ['relationship'] : [];
      case 8:
        return !character.clothing ? ['clothing'] : [];
      default:
        return [];
    }
  };

  return { getIncompleteChoices };
};