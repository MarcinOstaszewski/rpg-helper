import { GiRollingDices } from 'react-icons/gi';
import { columnsWithPlusIndexes, targetNumbersArray, modifiersNumberArray, soldierTypesStats, 
	opponentFightArray, opponentArmourArray, weaponDamageModifierArray, wizardStats, casterTypes, 
	magicSchools, propertyNames, localStorageKeys
} from './constants';
import { castersNames, soldiersNames } from './randomNames';

const isString = variable => {
	return typeof variable === 'string' || variable instanceof String;
}
const getRandomFromRange = (value, offset) => {
	return Math.floor(Math.random() * value) + offset;
}

const getCasterTypeField = casterType => <span className='main highlighted'>{casterType}</span>;

const getCasterNameField = ({casterType, castersData, updateCastersData}) => {
	if (!Object.keys(castersData).length) return;
	const {name} = castersData[casterType];
	return (
		<span className='name-input-container'>
			<input className='name-input'
				onChange={updateCastersData}
				value={name}
				data-type={casterType}
				data-property={propertyNames.NAME}
			/>
			<button
				className='random-change-name'
				onClick={updateCastersData}
				value={getRandomCharacterName(true)}
				data-type={casterType}
				data-property={propertyNames.NAME}
			>
				<GiRollingDices />
			</button>
		</span>
	)
}

const getApprenticeStats = wizardStats => {
	const stats = wizardStats ? {
		Move: wizardStats.Move,
		Fight: wizardStats.Fight - 2,
		Shoot: wizardStats.Shoot,
		Armour: wizardStats.Armour,
		Will: wizardStats.Will - 2,
		Health: wizardStats.Health - 2,
	} : {};
	const currentHealth = wizardStats ? wizardStats.Health - 2 : 0;
	return {stats, currentHealth};
};

const conditionallyAddSign = (i, value) => {
	const sign = value >= 0 ? '+' : '';
	return columnsWithPlusIndexes.includes(i) ? sign : ''
};

const getSoldiersFullStats = statNames => {
	const soldiersFullStats = {};
	Object.keys(soldierTypesStats).forEach(type => {
		const statValues = soldierTypesStats[type];
		const stats = {};
		statValues.forEach((stat,i) => {
			stats[statNames[i]] = stat;
		});
		soldiersFullStats[type] = {
			stats
		}
	});
	return soldiersFullStats;	
};

const createHealthChangeSelect = ({maxHealth, currentHealth, updateCastersData, type, handleSoldierChange, index}) => {
	const healthOptions = [];
	const onChangeFunction = type === 'Soldier' ? handleSoldierChange : updateCastersData;
	for (let i = maxHealth; i > 0; i--) {
		healthOptions.push(
			<option value={i} key={i}>{i}</option>
		)
	}
	return <select 
		className='health-select'
		onChange={onChangeFunction}
		value={currentHealth}
		data-type={type}
		data-index={index}
		data-property={propertyNames.CURRENT_HEALTH}
	>
		{healthOptions}
	</select>;
}

const createStatLine = ({characterData, showTestModal, type, updateCastersData, handleSoldierChange, index}) => {
	const { name, currentHealth, stats } = characterData;
	return <div className='stats-line'>
		{Object.keys(stats).map((key, i) => {
			if (i > 7) return; // TODO: create editable Level and Experience fields */
			const value = stats[key];
			let statField;
			if (i === 5) {
				const maxHealth = stats.Health;
				statField = <span className='health-field'>
					<div>{value}</div>
					<div className='divider'>/</div>
					{createHealthChangeSelect({maxHealth, currentHealth, updateCastersData, type, handleSoldierChange, index})}
				</span>
			} else {
				statField = <span>{conditionallyAddSign(i, value)}{value}</span>
			}
			return (
				<span key={i}
					className='stats-field'
					onClick={showTestModal}
					data-value={value}
					data-stat={key}
					data-index={i}
					data-name={name}
				>
					<span>{key}</span>
					{statField}
				</span>
			);
		})}
	</div>;
};

const createSoldierTypeSelect = ({handleSoldierChange, type, index}) => {
	const options = Object.keys(soldierTypesStats)
		.map((type, i) => (
			<option key={i} value={type}>
				{type}
			</option>
		))
	return <>
		<span className='padding-0'>
			<select 
				className='soldier-type-select'
				data-property={propertyNames.TYPE}
				data-index={index}
				onChange={handleSoldierChange}
				value={type}>
				{options}
			</select>
		</span>
	</>
}

const getSoldiersCost = soldiersList => {
	return soldiersList.reduce((curr, prev) => {
		return curr + soldierTypesStats[prev.type][6];
	}, 0);
}

const saveToLocalStorage = (key, value) => {
	key = key == undefined ? '' : key;
	localStorage.setItem(key, JSON.stringify(value));
};

const getRandomCharacterName = isCaster => {
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
	});
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

const createOpponentArmourButtons = ({opponentArmour, handleSetOpponentArmour}) => {
	return opponentArmourArray.map((number,i) => {
		const numberDisplay = number > 15 ? `[${number}]` : number;
		return (
			<button key={i}
				data-opponent-armour={number}
				onClick={handleSetOpponentArmour}
				className={opponentArmour === number ? 'active' : ''}
			>
				{numberDisplay}
			</button>
		)
	});
}

const createWeaponDamageModifierButtons = ({weaponDamageModifier, handleSetWeaponDamageModifier}) => {
	return weaponDamageModifierArray.map((modifier,i) => {
		const sign = modifier > 0 ? '+' : '';
		const signClassName = sign ? 'plus' : 'minus';
		return (
			<button key={i}
				data-weapon-damage-modifier={modifier}
				onClick={handleSetWeaponDamageModifier}
				className={`${signClassName} 
				 ${parseInt(weaponDamageModifier) === parseInt(modifier) ? 'active' : ''}`}
			>
				{sign}{modifier}
			</button>
		)
	})
}

const saveWarbandDataInLocalStorage = ({ setSoldiersList, setWarbandCost, setCastersData }) => {
	const lsCastersData = JSON.parse(localStorage.getItem(localStorageKeys.CASTERS_DATA));
	const lsSoldiersList = JSON.parse(localStorage.getItem(localStorageKeys.SOLDIERS_DATA));
	if (lsCastersData) {
		setCastersData(lsCastersData);
	} else {
		const baseStats = {...wizardStats};
		const { stats, currentHealth } = getApprenticeStats(baseStats);
		const tmpCastersData = {
			Wizard: {
				name: getRandomCharacterName(true),
				stats: baseStats,
				currentHealth: baseStats.Health,
				wizardsSchool: magicSchools[getRandomFromRange(10, 0)],
				spellList: {}
			},
			Apprentice : {
				name: getRandomCharacterName(true),
				stats,
				currentHealth
			}
		};
		saveToLocalStorage(localStorageKeys.CASTERS_DATA, tmpCastersData);
		setCastersData(tmpCastersData);
	}
	
	if (lsSoldiersList?.length) {
		setSoldiersList(lsSoldiersList);
		setWarbandCost(getSoldiersCost(lsSoldiersList));
	}
}

const updateAllTestVariables = ({
	e, yourModifier, setYourModifier, yourTN, setYourTN, setYourDiceResult, setWasTestSuccessful,
	opponentModifier, setOpponentModifier, opponentStat, setOpponentStat, setOpponentDiceResult
}) => {
	const yourNewTN = parseInt(e.target.dataset.targetNumber || 0);
	const yourNewModifier = parseInt(e.target.dataset.modifier || 0);
	const opponentNewStat = parseInt(e.target.dataset.opponentFight || 0);
	const opponentNewModifier = parseInt(e.target.dataset.opponentModifier || 0);
	setWasTestSuccessful(undefined);
	setYourDiceResult(undefined);
	setOpponentDiceResult(undefined);
	if (yourNewModifier) {
		if (yourNewModifier === yourModifier) {
			setYourModifier(0);
			return;
		};
		setYourModifier(yourNewModifier)
	};
	if (yourNewTN) {
		if (yourNewTN === yourTN) {
			setYourTN(0);
			return;
		};
		setYourTN(yourNewTN);
		setOpponentStat(undefined);
	};
	if (opponentNewModifier) {
		if (opponentNewModifier === opponentModifier) {
			setOpponentModifier(0);
			return;
		};
		setOpponentModifier(opponentNewModifier)
	};
	if (opponentNewStat) {
		if (opponentNewStat === opponentStat) {
			setOpponentStat(undefined);
			return;
		}
		setYourTN(0);
		setOpponentStat(opponentNewStat);
	};
}

export {
	isString,
	getRandomFromRange,
	getCasterTypeField,
	getCasterNameField,
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
	createOpponentArmourButtons,
	createWeaponDamageModifierButtons,
	updateAllTestVariables,
};
