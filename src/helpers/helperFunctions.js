import { columnsWithPlusIndexes } from './constants';
import { soldiersNames } from './randomNames';

const getCasterTypeField = casterType => <span className='main highlighted'>{casterType}</span>;

const getCasterNameField = (casterName, handleCasterNameChange, isWizard) => {
	return (
		<span>
			<input 
				onChange={handleCasterNameChange} 
				value={casterName} 
				data-is-wizard={isWizard}
				placeholder='Choose a name...'
			/>
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
		<select name='magic-schools'>
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

const statTest = e => {
	if (e.currentTarget.dataset.index > 5) return;
	console.log(e.currentTarget.dataset);
}

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

const createStatLine = (stats) => {
  return <div className='stats-line'>
		{Object.keys(stats).map((key, i) => {
			if (i > 7) return;
			
			const value = stats[key];
			return (
				<span key={i}
					className='stats-field'
					onClick={statTest}
					data-value={value}
					data-stat={key}
					data-index={i}
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
	localStorage.setItem(key, JSON.stringify(value));
};

const getRandomSoldierName = () => {
	return [Math.floor(Math.random() * soldiersNames.length + 2)];
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
	getRandomSoldierName
};
