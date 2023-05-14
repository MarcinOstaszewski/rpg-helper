import React from 'react';
import StyledSoldiersContainer from './SoldiersContainer.styled';
import { BsPersonXFill } from 'react-icons/bs';
import { statNames } from '../../helpers/constants';
import { createSoldierTypeSelect, createStatLine, getSoldiersFullStats } from '../../helpers/helperFunctions';

const SoldiersContainer = ({
	soldiersList, handleSoldierChange, handleShowRemoveModal, showTestModal, handleHealthChange
}) => {
	const soldiersFullStats = getSoldiersFullStats(statNames);
	const soldiersMarkup = soldiersList.map((soldier, index) => {
		const { name, currentHealth, type } = soldier;
		const characterData = {
			name, 
			currentHealth, 
			type,
			stats: soldiersFullStats[type].stats
		}
		const stats = soldiersFullStats[type].stats;
		const statLine = createStatLine({
			type: 'Soldier',
			characterData,
			showTestModal,
			handleSoldierChange,
			index
		});
		
		return (
			<StyledSoldiersContainer key={index} data-index={index}>
				<div className={`soldier-header ${stats.Type.toLowerCase()}`} data-index={index}>
					<span className='highlighted'>{stats.Type}</span>
					<span>
						<input data-property={name}
							className='soldier-name js-name-input' 
							value={name}
							onChange={handleSoldierChange}/>
					</span>
					{createSoldierTypeSelect({handleSoldierChange, type, index})}
					<span className='soldier-remove' 
						onClick={handleShowRemoveModal}
						index={index}>
						<BsPersonXFill />
					</span>
				</div>
				<div className='soldier-stats'>
					{statLine}
				</div>
			</StyledSoldiersContainer>
		);
	});

  return <>{soldiersMarkup}</>
}

export default SoldiersContainer;