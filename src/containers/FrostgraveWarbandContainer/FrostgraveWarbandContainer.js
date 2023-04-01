import React from 'react';
import StyledFrostgraveWarbandContainer from './FrostgraveWarbandContainer.styles';
import CasterContainer from '../../components/CasterConteiner/CasterContainer';
import { wizardStats, apprenticeStats } from '../../helpers/constants';

const FrostgraveWarbandContainer = () => {

  return (
    <StyledFrostgraveWarbandContainer>
        <div className='top-container'>
            <h1>Frostgrave - Wizard & Warband Sheet</h1>
            <div className='buttons-container'>
                <button>Add Soldier</button>
            </div>
            <div className='warband-cost'>
                <span className='font-bold'>Warband Cost: </span><span>[[total cost]] gc</span>
            </div>
        </div>

        <CasterContainer wizard={wizardStats}/>
        <CasterContainer apprentice={apprenticeStats}/>

    </StyledFrostgraveWarbandContainer>
  )
}

export default FrostgraveWarbandContainer