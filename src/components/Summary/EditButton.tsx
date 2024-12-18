import React from 'react';
import { Pencil, X } from 'lucide-react';

interface EditButtonProps {
  isEditing: boolean;
  onToggleEdit: () => void;
}

export const EditButton: React.FC<EditButtonProps> = ({ isEditing, onToggleEdit }) => (
  <button
    onClick={onToggleEdit}
    className={`
      flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium
      ${isEditing 
        ? 'bg-red-500 hover:bg-red-600 text-white' 
        : 'bg-[#4c5eeb] hover:bg-[#3b4eda] text-white border-2 border-[#7b89ef]'
      }
    `}
  >
    {isEditing ? (
      <>
        <X className="w-5 h-5" />
        <span>Cancel Edit</span>
      </>
    ) : (
      <>
        <Pencil className="w-5 h-5" />
        <span>Edit Choices</span>
      </>
    )}
  </button>
);