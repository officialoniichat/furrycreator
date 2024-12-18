import React, { useState, useEffect } from 'react';
import { StepIndicator } from './components/StepIndicator';
import { NavigationButtons } from './components/NavigationButtons';
import { StyleStep } from './components/steps/StyleStep';
import { AnimeEthnicityStep } from './components/steps/anime/AnimeEthnicityStep';
import { RealisticEthnicityStep } from './components/steps/realistic/RealisticEthnicityStep';
import { AnimeAgeStep } from './components/steps/anime/AnimeAgeStep';
import { RealisticAgeStep } from './components/steps/realistic/RealisticAgeStep';
import { AnimeAppearanceStep } from './components/steps/anime/AnimeAppearanceStep';
import { AppearanceStep } from './components/steps/AppearanceStep';
import { AnimeBodyStep } from './components/steps/anime/AnimeBodyStep';
import { BodyStep } from './components/steps/BodyStep';
import { AnimePersonalityStep } from './components/steps/anime/AnimePersonalityStep';
import { AnimeOccupationHobbiesStep } from './components/steps/anime/AnimeOccupationHobbiesStep';
import { AnimeRelationshipStep } from './components/steps/anime/AnimeRelationshipStep';
import { AnimeClothingStep } from './components/steps/anime/AnimeClothingStep';
import { Summary } from './components/Summary/Summary';
import { IncompleteChoicesDisclaimer } from './components/IncompleteChoicesDisclaimer';
import { ComingSoonDisclaimer } from './components/ComingSoonDisclaimer';
import { useIncompleteChoices } from './hooks/useIncompleteChoices';
import { FurryStyleStep } from './components/steps/furry/FurryStyleStep';
import { FurryAgeStep } from './components/steps/furry/FurryAgeStep';
import { FurryAppearanceStep } from './components/steps/furry/FurryAppearanceStep';
import { FurryBodyStep } from './components/steps/furry/FurryBodyStep';
import type { WaifuCharacter } from './types';

const TOTAL_STEPS = 10;

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [character, setCharacter] = useState<Partial<WaifuCharacter>>({
    hobbies: []
  });
  const [showIncompleteDisclaimer, setShowIncompleteDisclaimer] = useState(false);
  const [showComingSoonDisclaimer, setShowComingSoonDisclaimer] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingFromSummary, setEditingFromSummary] = useState(false);
  const { getIncompleteChoices } = useIncompleteChoices(currentStep, character);

  useEffect(() => {
    setShowComingSoonDisclaimer(false);
  }, [currentStep]);

  const isCurrentStepComplete = () => {
    return getIncompleteChoices().length === 0;
  };

  useEffect(() => {
    if (isCurrentStepComplete()) {
      setShowIncompleteDisclaimer(false);
    }
  }, [character]);

  const handleNext = () => {
    if (!isCurrentStepComplete()) {
      setShowIncompleteDisclaimer(true);
      return;
    }

    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0 && !editingFromSummary) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStyleChange = (style: WaifuCharacter['style']) => {
    if (style === 'Realistic') {
      setShowComingSoonDisclaimer(true);
      return;
    }
    setCharacter({ ...character, style });
  };

  const handleEdit = (step: number) => {
    if (isEditMode) {
      setCurrentStep(step);
      setEditingFromSummary(true);
    }
  };

  const handleConfirmChanges = () => {
    setEditingFromSummary(false);
    setIsEditMode(false);
    setCurrentStep(TOTAL_STEPS - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <StyleStep
            value={character.style}
            onChange={handleStyleChange}
          />
        );
      case 1:
        if (character.style === 'Furry') {
          return (
            <FurryStyleStep
              value={character.furryStyle}
              onChange={(furryStyle) => setCharacter({ ...character, furryStyle })}
            />
          );
        }
        return (
          <AnimeEthnicityStep
            value={character.ethnicity}
            onChange={(ethnicity) => setCharacter({ ...character, ethnicity })}
          />
        );
      case 2:
        if (character.style === 'Furry') {
          return (
            <FurryAgeStep
              value={character.furryAge}
              onChange={(furryAge) => setCharacter({ ...character, furryAge })}
            />
          );
        }
        return (
          <AnimeAgeStep
            value={character.age}
            onChange={(age) => setCharacter({ ...character, age })}
          />
        );
      case 3:
        if (character.style === 'Furry') {
          return (
            <FurryAppearanceStep
              eyeColor={character.furryEyeColor}
              skinType={character.furrySkinType}
              furryColor={character.furryColor}
              onChangeEyeColor={(furryEyeColor) => setCharacter({ ...character, furryEyeColor })}
              onChangeSkinType={(furrySkinType) => setCharacter({ ...character, furrySkinType })}
              onChangeFurryColor={(furryColor) => setCharacter({ ...character, furryColor })}
            />
          );
        }
        return (
          <AnimeAppearanceStep
            eyeColor={character.eyeColor}
            hairStyle={character.hairStyle}
            hairColor={character.hairColor}
            onChangeEyeColor={(eyeColor) => setCharacter({ ...character, eyeColor })}
            onChangeHairStyle={(hairStyle) => setCharacter({ ...character, hairStyle })}
            onChangeHairColor={(hairColor) => setCharacter({ ...character, hairColor })}
          />
        );
      case 4:
        if (character.style === 'Furry') {
          return (
            <FurryBodyStep
              bodyType={character.furryBodyType}
              faceType={character.furryFaceType}
              breastSize={character.furryBreastSize}
              buttSize={character.furryButtSize}
              onChangeBodyType={(furryBodyType) => setCharacter({ ...character, furryBodyType })}
              onChangeFaceType={(furryFaceType) => setCharacter({ ...character, furryFaceType })}
              onChangeBreastSize={(furryBreastSize) => setCharacter({ ...character, furryBreastSize })}
              onChangeButtSize={(furryButtSize) => setCharacter({ ...character, furryButtSize })}
            />
          );
        }
        return (
          <AnimeBodyStep
            bodyType={character.bodyType}
            breastSize={character.breastSize}
            buttSize={character.buttSize}
            onChangeBodyType={(bodyType) => setCharacter({ ...character, bodyType })}
            onChangeBreastSize={(breastSize) => setCharacter({ ...character, breastSize })}
            onChangeButtSize={(buttSize) => setCharacter({ ...character, buttSize })}
          />
        );
      case 5:
        return (
          <AnimePersonalityStep
            personality={character.personality}
            voice={character.voice}
            onChangePersonality={(personality) => setCharacter({ ...character, personality })}
            onChangeVoice={(voice) => setCharacter({ ...character, voice })}
          />
        );
      case 6:
        return (
          <AnimeOccupationHobbiesStep
            occupation={character.occupation}
            hobbies={character.hobbies ?? []}
            onChangeOccupation={(occupation) => setCharacter({ ...character, occupation })}
            onChangeHobbies={(hobbies) => setCharacter({ ...character, hobbies })}
          />
        );
      case 7:
        return (
          <AnimeRelationshipStep
            value={character.relationship}
            onChange={(relationship) => setCharacter({ ...character, relationship })}
          />
        );
      case 8:
        return (
          <AnimeClothingStep
            value={character.clothing}
            onChange={(clothing) => setCharacter({ ...character, clothing })}
          />
        );
      case 9:
        return (
          <Summary 
            character={character} 
            onEdit={handleEdit}
            isEditMode={isEditMode}
            onToggleEdit={() => setIsEditMode(!isEditMode)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#4c5eeb] px-4 sm:px-8 pt-16 sm:pt-8 pb-20 sm:pb-8">
      <IncompleteChoicesDisclaimer
        isVisible={showIncompleteDisclaimer}
        onClose={() => setShowIncompleteDisclaimer(false)}
        incompleteFields={getIncompleteChoices()}
      />
      {showComingSoonDisclaimer && (
        <ComingSoonDisclaimer 
          onClose={() => setShowComingSoonDisclaimer(false)} 
        />
      )}
      <div className="max-w-4xl mx-auto">
        <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
        <div className="bg-[#5b6bed] rounded-lg p-4 sm:p-8 border-2 border-[#7b89ef]">
          {renderStep()}
          {currentStep === TOTAL_STEPS - 1 ? (
            !editingFromSummary && !isEditMode && (
              <NavigationButtons
                onPrevious={handlePrevious}
                onNext={handleNext}
                showPrevious={currentStep > 0}
                nextLabel="Bring my AI to life"
              />
            )
          ) : editingFromSummary ? (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleConfirmChanges}
                className="px-6 py-2 rounded-lg bg-[#4c5eeb] text-white hover:bg-[#3b4eda] transition-colors border-2 border-[#7b89ef]"
              >
                Confirm Changes
              </button>
            </div>
          ) : (
            <NavigationButtons
              onPrevious={handlePrevious}
              onNext={handleNext}
              showPrevious={currentStep > 0}
              nextLabel="Next"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;