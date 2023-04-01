import React from 'react';
import StyledSoldiersContainer from './SoldiersContainer.styled';
import { soldierTypesStats, soldierStatNames } from '../../helpers/constants';
import { createSoldierTypeSelect, createStatLine, getSoldiersFullStats } from '../../helpers/helperFunctions';

const SoldiersContainer = ({soldiersList, handleSoldierChange, handleShowModal}) => {
	const soldiersFullStats = getSoldiersFullStats(soldierTypesStats, soldierStatNames);
	const soldates = soldiersList.map((soldier, i) => {
		const soldierType = soldier.type;
		const stats = soldiersFullStats[soldierType].stats;
		const statLine = createStatLine(stats);
		
		return (
			<StyledSoldiersContainer key={i}>
				<div className={`soldier-header ${stats.Type.toLowerCase()}`} data-index={i}>
					<span className='highlighted'>{stats.Type}</span>
					<span>
						<input className='soldier-name js-name-input' value={soldier.name} onChange={handleSoldierChange}/>
					</span>
					<span className='highlighted'>Type</span>
					{createSoldierTypeSelect(soldierTypesStats, handleSoldierChange, soldierType)}
					<span className='soldier-remove' onClick={handleShowModal}>&times;</span>
				</div>
				<div className='soldier-stats'>
					{statLine}
				</div>
			</StyledSoldiersContainer>
		);
	});


  return (
		<>
			{/* <>{soldiers}</> */}
			<>{soldates}</>
		</>
  )
}

export default SoldiersContainer;