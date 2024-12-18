import React from 'react';

interface SelectionCardProps {
  selected?: boolean;
  onClick: () => void;
  label: string;
  imageSrc?: string;
  className?: string;
}

export const SelectionCard: React.FC<SelectionCardProps> = ({
  selected,
  onClick,
  label,
  imageSrc,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-lg overflow-hidden transition-all border-2 
        ${selected 
          ? 'border-[#ff6b6b] ring-2 ring-[#ff6b6b]/50 scale-105 shadow-lg' 
          : 'border-[#6b7bee] hover:border-[#7b89ef]'
        } ${className}`}
    >
      {imageSrc && (
        <div className="w-full h-full">
          <img 
            src={imageSrc} 
            alt={label} 
            className="w-full h-full object-cover"
            style={{ aspectRatio: '1/1' }}
          />
        </div>
      )}
      <div className={`absolute bottom-0 left-0 right-0 py-0.5 px-1 text-center text-white text-xs
        ${imageSrc ? 'bg-[#4c5eeb]/80 backdrop-blur-sm' : 'bg-[#6b7bee]'}`}>
        {label}
      </div>
    </button>
  );
};