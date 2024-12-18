import React from 'react';
import { SelectionCard } from '../../SelectionCard';
import { 
  FurryBodyType, 
  FurryFaceType, 
  FurryBreastSize, 
  FurryButtSize 
} from '../../../types/furry';
import {
  furryBodyTypeOptions,
  furryFaceTypeOptions,
  furryBreastSizeOptions,
  furryButtSizeOptions
} from './furryBodyData';

interface FurryBodyStepProps {
  bodyType?: FurryBodyType;
  faceType?: FurryFaceType;
  breastSize?: FurryBreastSize;
  buttSize?: FurryButtSize;
  onChangeBodyType: (value: FurryBodyType) => void;
  onChangeFaceType: (value: FurryFaceType) => void;
  onChangeBreastSize: (value: FurryBreastSize) => void;
  onChangeButtSize: (value: FurryButtSize) => void;
}

export const FurryBodyStep: React.FC<FurryBodyStepProps> = ({
  bodyType,
  faceType,
  breastSize,
  buttSize,
  onChangeBodyType,
  onChangeFaceType,
  onChangeBreastSize,
  onChangeButtSize,
}) => {
  return (
    <div className="space-y-1">
      <div>
        <h2 className="text-sm sm:text-lg font-bold text-white text-center mb-4">Choose Body Type</h2>
        <div className="grid grid-cols-4 gap-0.5">
          {furryBodyTypeOptions.map(({ type, img }) => (
            <SelectionCard
              key={type}
              label={type}
              imageSrc={img}
              selected={bodyType === type}
              onClick={() => onChangeBodyType(type)}
              className="aspect-square w-full"
              data-field="furryBodyType"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-sm sm:text-lg font-bold text-white text-center mb-4">Choose Face Type</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-0.5 w-3/4">
            {furryFaceTypeOptions.map(({ type, img }) => (
              <SelectionCard
                key={type}
                label={type}
                imageSrc={img}
                selected={faceType === type}
                onClick={() => onChangeFaceType(type)}
                className="aspect-square w-full"
                data-field="furryFaceType"
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm sm:text-lg font-bold text-white text-center mb-4">Choose Breast Size</h2>
        <div className="grid grid-cols-4 gap-0.5">
          {furryBreastSizeOptions.map(({ type, img }) => (
            <SelectionCard
              key={type}
              label={type}
              imageSrc={img}
              selected={breastSize === type}
              onClick={() => onChangeBreastSize(type)}
              className="aspect-square w-full"
              data-field="furryBreastSize"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-sm sm:text-lg font-bold text-white text-center mb-4">Choose Butt Size</h2>
        <div className="grid grid-cols-4 gap-0.5">
          {furryButtSizeOptions.map(({ type, img }) => (
            <SelectionCard
              key={type}
              label={type}
              imageSrc={img}
              selected={buttSize === type}
              onClick={() => onChangeButtSize(type)}
              className="aspect-square w-full"
              data-field="furryButtSize"
            />
          ))}
        </div>
      </div>
    </div>
  );
};