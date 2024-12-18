import { Dispatch, SetStateAction } from 'react';
import { Style, WaifuCharacter } from '../types';

export const useCharacterFlow = (
  setShowComingSoonDisclaimer: Dispatch<SetStateAction<boolean>>
) => {
  const handleStyleChange = (
    style: Style,
    setCurrentStep: Dispatch<SetStateAction<number>>,
    setCharacter: Dispatch<SetStateAction<Partial<WaifuCharacter>>>,
    character: Partial<WaifuCharacter>
  ) => {
    if (style === 'Realistic') {
      setShowComingSoonDisclaimer(true);
      return;
    }
    
    // Remove automatic step change for Furry
    setCharacter({ ...character, style });
  };

  return {
    handleStyleChange
  };
};