import React, { useState} from 'react';
import StyledCasterContainer from './CasterContainer.styled';
import { 
  createStatLine, getApprenticeStats, getCasterNameField, getCasterTypeField, getMagicSchoolSelect, getSchoolField 
} from '../../helpers/helperFunctions';

const CasterContainer = (
  { wizardStats, baseStats, magicSchools, casterName, setCasterName, handleCasterNameChange, showTestModal }
) => {
  const isWizard = wizardStats && Object.keys(wizardStats).length > 0;
  const initialCasterStats = isWizard ? wizardStats : getApprenticeStats(baseStats);
  const [casterStats, setCasterStats] = useState(initialCasterStats);
  const statLine = createStatLine(casterStats, showTestModal, casterName);

  const casterType = isWizard ? 'Wizard' : 'Apprentice';
  const schoolField = getSchoolField(isWizard);
  const magicSchoolSelect = getMagicSchoolSelect(magicSchools);

  return (
    <StyledCasterContainer>
      <div className={`character-header ${isWizard ? 'wizard' : 'apprentice'}`}>
        {getCasterTypeField(casterType)}
        {getCasterNameField({casterName, handleCasterNameChange, isWizard, setCasterName})}
        {schoolField}
        {magicSchoolSelect}
      </div>
      <div>
        {statLine}
      </div>
    </StyledCasterContainer>
  )
}

export default CasterContainer