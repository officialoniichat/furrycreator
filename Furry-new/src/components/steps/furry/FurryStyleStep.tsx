import React from 'react';
import { SelectionCard } from '../../SelectionCard';
import { FurryStyle } from '../../../types/furry';
import { furryStyleOptions } from './furryStyleData';

interface FurryStyleStepProps {
  value?: FurryStyle;
  onChange: (value: FurryStyle) => void;
}

export const FurryStyleStep: React.FC<FurryStyleStepProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center">Choose Furry Style</h2>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {furryStyleOptions.map(({ type, img }) => (
          <SelectionCard
            key={type}
            label={type}
            imageSrc={img}
            selected={value === type}
            onClick={() => onChange(type)}
            className="aspect-square max-w-[300px] mx-auto w-full"
            data-field="furryStyle"
          />
        ))}
      </div>
    </div>
  );
};