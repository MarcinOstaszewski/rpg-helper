import React from 'react';
import StyledCasterContainer from './CasterContainer.styled';
import { GiBookmarklet } from 'react-icons/gi';
import { 
  createStatLine, getCasterNameField, getCasterTypeField 
} from '../../helpers/helperFunctions';
import { casterTypes } from '../../helpers/constants';

const CasterContainer = (
  { isWizard, castersData, updateCastersData, showTestModal, handleSpellbookClicked
  }
) => {
  const casterType = isWizard ? casterTypes.WIZ : casterTypes.APP;
  if (castersData[casterType] === undefined) return;
  const casterData = castersData[casterType];
  const { wizardsSchool } = casterData;
  const statLine = createStatLine({
    type: casterType,
    characterData: casterData,
    updateCastersData,
    showTestModal
  });

  return (
    <StyledCasterContainer>
      <div className={`character-header ${casterType.toLowerCase()}`}>
        {getCasterTypeField(casterType)}
        {getCasterNameField({casterType, castersData, updateCastersData})}
        <span className='magic-school-field'>{wizardsSchool}</span>
        {isWizard ? <span className='spell-book' onClick={handleSpellbookClicked}>
          <GiBookmarklet /></span> : ''}
      </div>
      <div>
        {statLine}
      </div>
    </StyledCasterContainer>
  )
}

export default CasterContainer