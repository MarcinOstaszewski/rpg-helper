import React, { useState} from 'react';
import StyledCasterContainer from './CasterContainer.styled';
import { wizardStats, magicSchools } from '../../helpers/constants';

const CasterContainer = ({wizard, apprentice}) => {
  // TODO: Add saving all team members' values in LocalStorage;
  // TODO: Add checking if there are team values in LocalStorage;
  const [casterStats, setCasterStats] = useState(wizardStats);

  const handleTestStatClick = e => {
    console.log(e)
  }
  
  const columnsWithPlus = [1, 2, 4];
  const shouldAddPlus = i => columnsWithPlus.includes(i);
  const statNames = Object.keys(casterStats).map((name, i) => <span key={`names${i}`}>{name}</span>);
  const statValues = Object.values(casterStats).map((value, i) => {
    return <span key={`values${i}`}>
      {shouldAddPlus(i) ? '+' : ''}{value}</span>
    });
  const magicSchoolsOptions = magicSchools
    .map((school, i) => <option value={school} key={i}>{school}</option>)
  const schoolField = wizard ? 
    <span className='type highlighted'>School</span> 
    : <span></span>;
  const schoolInput = wizard ? (
    <span>
      <select name="magic-schools">
        {magicSchoolsOptions}
      </select>
    </span>) 
    : '';
  const casterType = wizard ? 'Wizard' : 'Apprentice';

  return (
    <StyledCasterContainer>
      <div className={`character-header
        ${wizard ? ' wizard' : ''}
        ${apprentice ? ' apprentice' : ''}`}
      >
        <span className='main highlighted'>{casterType}</span>
        <span>
          <input defaultValue="Name" />
        </span>
        {schoolField}
        {schoolInput}
      </div>
      <div>
        <div className='character-stats-names'>
          {statNames}
        </div>
        <div className='character-stats-values'>
          {statValues}
        </div>
      </div>
    </StyledCasterContainer>
  )
}

export default CasterContainer