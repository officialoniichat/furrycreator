import React from 'react';
import { SelectionCard } from '../SelectionCard';
import { Style } from '../../types';
import { styleOptions } from './styleData';

interface StyleStepProps {
  value?: Style;
  onChange: (value: Style) => void;
}

export const StyleStep: React.FC<StyleStepProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center">Choose Style</h2>
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        {/* First row: Anime and Realistic */}
        <div className="grid grid-cols-2 gap-4">
          {styleOptions.slice(0, 2).map(({ type, img }) => (
            <SelectionCard
              key={type}
              label={type}
              imageSrc={img}
              selected={value === type}
              onClick={() => onChange(type)}
              className="aspect-square w-full"
              data-field="style"
            />
          ))}
        </div>
        {/* Second row: Centered Furry */}
        <div className="flex justify-center">
          <div className="w-[calc(50%-0.5rem)]">
            <SelectionCard
              label={styleOptions[2].type}
              imageSrc={styleOptions[2].img}
              selected={value === styleOptions[2].type}
              onClick={() => onChange(styleOptions[2].type)}
              className="aspect-square w-full"
              data-field="style"
            />
          </div>
        </div>
      </div>
    </div>
  );
};