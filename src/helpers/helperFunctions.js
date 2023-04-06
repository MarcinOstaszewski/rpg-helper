import { GiRollingDices } from 'react-icons/gi';
import { columnsWithPlusIndexes, targetNumbersArray, modifiersNumberArray, soldierTypesStats, opponentFightArray } from './constants';
import { castersNames, soldiersNames } from './randomNames';

const getRandomFromRange = (value, offset) => {
	return Math.floor(Math.random() * value) + offset;
}

const getCasterTypeField = casterType => <span className='main highlighted'>{casterType}</span>;

const getCasterNameField = ({casterName, handleCasterNameChange, isWizard, setCasterName}) => {
	return (
		<span className='name-input-container'>
			<input className='name-input'
				onChange={handleCasterNameChange} 
				value={casterName} 
				data-is-wizard={isWizard}
				placeholder='Choose a name...'
			/>
			<button 
				className='random-change-name' 
				onClick={() => setCasterName(getRandomCharacterName(true))}
			>
				<GiRollingDices />
			</button>
		</span>
)}

const getSchoolField = isWizard => {
	return isWizard ? <span className='type highlighted'>School</span> : '';
}

const getMagicSchoolSelect = magicSchools => {
	if (!magicSchools) {
		return '';
	}
	return <span>
		<select name='magic-schools' className='magic-school-select'>
			{magicSchools.map((school, i) => <option value={school} key={i}>{school}</option>)}
		</select>
	</span>
};

const getApprenticeStats = (wizardStats) => ({
  Move: wizardStats.Move,
  Fight: wizardStats.Fight - 2,
  Shoot: wizardStats.Shoot,
  Armour: wizardStats.Armour,
  Will: wizardStats.Will - 2,
  Health: wizardStats.Health - 2,
});

const conditionallyAddSign = (i, value) => {
	const sign = value >= 0 ? '+' : '';
	return columnsWithPlusIndexes.includes(i) ? sign : ''
};

const getSoldiersFullStats = (soldierTypesStats, soldierStatNames) => {
	const soldiersFullStats = {};
	Object.keys(soldierTypesStats).forEach(type => {
		const statValues = soldierTypesStats[type];
		const stats = {};
		statValues.forEach((stat,i) => {
			stats[soldierStatNames[i]] = stat;
		});
		soldiersFullStats[type] = {
			stats
		}
	});
	return soldiersFullStats;	
};

const createStatLine = (stats, showTestModal, characterName) => {
  return <div className='stats-line'>
		{Object.keys(stats).map((key, i) => {
			if (i > 7) return;
			
			const value = stats[key];
			return (
				<span key={i}
					className='stats-field'
					onClick={showTestModal}
					data-value={value}
					data-stat={key}
					data-index={i}
					data-name={characterName}
				>
					<span>{key}</span>
					<span>
						{conditionallyAddSign(i, value)}
						{value}
					</span>
				</span>
			);
		})}
	</div>;
};

const createSoldierTypeSelect = (soldierTypesStats, handleSoldierChange, soldierType) => {
	const options = Object.keys(soldierTypesStats)
		.map((type, i) => (
			<option key={i} value={type}>
					{type}
			</option>
		))
	return <>
		<span>
			<select 
				className='soldier-type' 
				onChange={handleSoldierChange}
				value={soldierType}>
				{options}
			</select>
		</span>
	</>
}

const getSoldiersCost = (soldiersList) => {
	return soldiersList.reduce((curr, prev) => {
		return curr + soldierTypesStats[prev.type][6];
	}, 0);
}

const saveToLocalStorage = (key, value) => {
	key = key == undefined ? '' : key;
	localStorage.setItem(key, JSON.stringify(value));
};

const getRandomCharacterName = (isCaster) => {
	const namesList = (isCaster) ? castersNames : soldiersNames;
	return namesList[Math.floor(Math.random() * namesList.length + 2)];
}

const createTangetNumberButtons = chosenTN => {
	return targetNumbersArray.map((number, i) => {
		return (
			<button key={i}
				data-target-number={number}
				className={number === chosenTN ? 'active' : ''}
			>{number}</button>
		);
	});
}

const createOpponentFightButtons = opponentFight => {
	return opponentFightArray.map((number,i) => {
		return (
			<button key={i}
				data-opponent-fight={number}
				className={number === opponentFight ? 'active' : ''}
			>{number}</button>
		)
	})
}

const createModifierButtons = (chosenModifier, isOpponent) => {
	return modifiersNumberArray.map((modifier, i) => {
		const active = modifier === chosenModifier ? 'active' : '';
		const sign = modifier > 0 ? '+' : '';
		const signClassName = sign ? 'plus' : 'minus';
		return (
			<button key={i}
				data-modifier={isOpponent ? '' : modifier}
				data-opponent-modifier={isOpponent ? modifier : ''}
				className={`${active} ${signClassName}`}>
					{sign}{modifier}
			</button>
		);
	})
}

const saveWarbandDataInLocalStorage = (
	{setWizardName, setApprenticeName, setSoldiersList, setWarbandCost}
) => {
	const lsWizardName = JSON.parse(localStorage.getItem('wizard-name'));
	const lsApprenticeName = JSON.parse(localStorage.getItem('apprentice-name'));
	// const lsCastersStats = localStorage.getItem('casters-list') || [];
	const lsSoldiersList = JSON.parse(localStorage.getItem('soldiers-list'));
	if (lsWizardName) {
		setWizardName(lsWizardName);
	} else {
		const randomName = getRandomCharacterName(true);
		setWizardName(randomName);
		saveToLocalStorage('wizard-name', randomName);
	};
	if (lsApprenticeName) {
		setApprenticeName(lsApprenticeName);
	} else {
		const randomName = getRandomCharacterName(true);
		setApprenticeName(randomName);
		saveToLocalStorage('apprentice-name', randomName);
	};
	// lsCastersStats.length && setCastersStats(lsCastersStats);
	lsSoldiersList?.length && setSoldiersList(lsSoldiersList);
	setWarbandCost(getSoldiersCost(lsSoldiersList));
}

export {
	getRandomFromRange,
	getCasterTypeField,
	getCasterNameField,
	getSchoolField,
	getMagicSchoolSelect,
	getApprenticeStats,
	getSoldiersFullStats,
	createStatLine,
	createSoldierTypeSelect,
	getSoldiersCost,
	saveToLocalStorage,
	getRandomCharacterName,
	createOpponentFightButtons,
	createTangetNumberButtons,
	createModifierButtons,
	saveWarbandDataInLocalStorage,
};
