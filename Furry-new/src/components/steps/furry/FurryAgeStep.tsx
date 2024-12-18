import React from 'react';
import { SelectionCard } from '../../SelectionCard';
import { FurryAge } from '../../../types/furry';
import { furryAgeOptions } from './furryAgeData';

interface FurryAgeStepProps {
  value?: FurryAge;
  onChange: (value: FurryAge) => void;
}

export const FurryAgeStep: React.FC<FurryAgeStepProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center">Choose Age</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {furryAgeOptions.map(({ type, img }) => (
          <SelectionCard
            key={type}
            label={type}
            imageSrc={img}
            selected={value === type}
            onClick={() => onChange(type)}
            className="aspect-square max-w-[300px] mx-auto w-full"
            data-field="furryAge"
          />
        ))}
      </div>
    </div>
  );
};