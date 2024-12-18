import React from 'react';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  showPrevious?: boolean;
  nextLabel?: string;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  showPrevious = true,
  nextLabel = 'Next',
}) => {
  return (
    <div className="flex justify-between mt-8 gap-4">
      {showPrevious ? (
        <button
          onClick={onPrevious}
          className="w-full px-6 py-2 rounded-lg border-2 border-[#7b89ef] text-white hover:bg-[#6b7bee] transition-colors"
        >
          ← Previous
        </button>
      ) : <div />}
      <button
        onClick={onNext}
        className="w-full px-6 py-2 rounded-lg bg-[#4c5eeb] text-white hover:bg-[#3b4eda] transition-colors border-2 border-[#7b89ef]"
      >
        {nextLabel} →
      </button>
    </div>
  );
};