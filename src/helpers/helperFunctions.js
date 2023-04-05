import { GiRollingDices } from 'react-icons/gi';
import { columnsWithPlusIndexes, targetNumbersArray, modifiersNumberArray } from './constants';
import { castersNames, soldiersNames } from './randomNames';

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
			<option key={i}
				value={type}>
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

const saveToLocalStorage = (key, value) => {
	key = key == undefined ? '' : key;
	localStorage.setItem(key, JSON.stringify(value));
};

const getRandomCharacterName = (isCaster) => {
	const namesList = (isCaster) ? castersNames : soldiersNames;
	return namesList[Math.floor(Math.random() * namesList.length + 2)];
}

const createTangetNumberButtons = chosenTN => {
	console.log('create TN', chosenTN);
	return targetNumbersArray.map((number, i) => {
		return (
			<button key={i}
				data-number={number}
				className={number === chosenTN ? 'active' : ''}
			>{number}</button>
		);
	});
}

const createModifierButtons = chosenModifier => {
	console.log('create Modifiers', chosenModifier)
	return modifiersNumberArray.map((number, i) => {
		const active = number === chosenModifier ? 'active' : '';
		const sign = number > 0 ? '+' : '';
		const signClassName = sign ? 'plus' : 'minus';
		return (
			<button key={i}
				data-modifier={number}
				className={`${active} ${signClassName}`}>
					{sign}{number}
			</button>
		);
	})
}

const saveWarbandDataInLocalStorage = (
	{setWizardName, setApprenticeName, setSoldiersList}
) => {
	const lsWizardName = JSON.parse(localStorage.getItem('wizard-name'));
		const lsApprenticeName = JSON.parse(localStorage.getItem('apprentice-name'));
		// const lsCastersStats = localStorage.getItem('casters-list') || [];
		const lsSoldiersList = JSON.parse(localStorage.getItem('soldiers-list'));
		if (lsWizardName) {
			setWizardName(lsWizardName);
		} else {
			const randomName = getRandomCharacterName(true)
			setWizardName(randomName);
			saveToLocalStorage('wizard-name', randomName);
		};
		if (lsApprenticeName) {
			setApprenticeName(lsApprenticeName);
		} else {
			const randomName = getRandomCharacterName(true)
			setApprenticeName(randomName);
			saveToLocalStorage('apprentice-name', randomName);
		};
		// lsCastersStats.length && setCastersStats(lsCastersStats);
		lsSoldiersList?.length && setSoldiersList(lsSoldiersList);
}

export {
	getCasterTypeField,
	getCasterNameField,
	getSchoolField,
	getMagicSchoolSelect,
	getApprenticeStats,
	getSoldiersFullStats,
	createStatLine,
	createSoldierTypeSelect,
	saveToLocalStorage,
	getRandomCharacterName,
	createTangetNumberButtons,
	createModifierButtons,
	saveWarbandDataInLocalStorage,
};
