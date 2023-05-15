import React from 'react';
import StyledSoldiersContainer from './SoldiersContainer.styled';
import { BsPersonXFill } from 'react-icons/bs';
import { statNames } from '../../helpers/constants';
import { createSoldierTypeSelect, createStatLine, getSoldiersFullStats } from '../../helpers/helperFunctions';

const SoldiersContainer = ({
	soldiersList, handleSoldierChange, handleShowRemoveModal, showTestModal
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
			<StyledSoldiersContainer 
				key={index} data-index={index}>
				<div className={`soldier-header ${stats.Type.toLowerCase()}`}>
					<span className='highlighted'>{stats.Type}</span>
					<span className='padding-0'>
						<input data-property="name"
							className='soldier-name'
							value={name}
							data-index={index}
							onChange={handleSoldierChange}/>
					</span>
					{createSoldierTypeSelect({handleSoldierChange, type, index})}
					<span className='soldier-remove padding-0'>
						<a onClick={handleShowRemoveModal}
							data-index={index}
							data-name={soldiersList[index].name}
						>
							<BsPersonXFill />
						</a>
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