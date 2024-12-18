import React from 'react';
import { SelectionCard } from '../../SelectionCard';
import { ColorButton } from '../../ColorButton';
import { FurryEyeColor, FurrySkinType, FurryColor } from '../../../types/furry';
import { 
  furrySkinTypeOptions, 
  furryColorOptions,
  furryEyeColorOptions 
} from './furryAppearanceData';

interface FurryAppearanceStepProps {
  eyeColor?: FurryEyeColor;
  skinType?: FurrySkinType;
  furryColor?: FurryColor;
  onChangeEyeColor: (value: FurryEyeColor) => void;
  onChangeSkinType: (value: FurrySkinType) => void;
  onChangeFurryColor: (value: FurryColor) => void;
}

export const FurryAppearanceStep: React.FC<FurryAppearanceStepProps> = ({
  eyeColor,
  skinType,
  furryColor,
  onChangeEyeColor,
  onChangeSkinType,
  onChangeFurryColor,
}) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-4">Choose Eye Color</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4">
          {furryEyeColorOptions.map(({ type, backgroundColor }) => (
            <ColorButton
              key={type}
              color={type}
              label={type}
              selected={eyeColor === type}
              onClick={() => onChangeEyeColor(type as FurryEyeColor)}
              backgroundColor={backgroundColor}
              data-field="furryEyeColor"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-4">
          Choose Skin/Fur Type
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {furrySkinTypeOptions.map(({ type, img }) => (
            <SelectionCard
              key={type}
              label={type}
              imageSrc={img}
              selected={skinType === type}
              onClick={() => onChangeSkinType(type)}
              className="aspect-square max-w-[300px] mx-auto w-full"
              data-field="furrySkinType"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-4">
          Choose Color
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4">
          {furryColorOptions.map(({ type, backgroundColor, textColor, gradient }) => (
            <ColorButton
              key={type}
              color={type}
              label={type}
              selected={furryColor === type}
              onClick={() => onChangeFurryColor(type as FurryColor)}
              backgroundColor={backgroundColor}
              textColor={textColor}
              gradient={gradient}
              data-field="furryColor"
            />
          ))}
        </div>
      </div>
    </div>
  );
};