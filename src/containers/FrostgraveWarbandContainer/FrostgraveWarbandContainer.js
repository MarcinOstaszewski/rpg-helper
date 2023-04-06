import React, { useEffect, useState } from 'react';
import { wizardStats, magicSchools } from '../../helpers/constants';
import { getRandomCharacterName, getSoldiersCost, saveToLocalStorage, saveWarbandDataInLocalStorage } from '../../helpers/helperFunctions';
import SoldiersContainer from '../../components/SoldiersContainer/SoldiersContainer';
import StyledFrostgraveWarbandContainer from './FrostgraveWarbandContainer.styles';
import CasterContainer from '../../components/CasterConteiner/CasterContainer';
import Modal from '../../components/Modal/Modal';

const FrostgraveWarbandContainer = () => {
	const [wizardName, setWizardName] = useState('');
	const [apprenticeName, setApprenticeName] = useState('');
	const [soldiersList, setSoldiersList] = useState([]);
	// const [castersStats, setCastersStats] = useState([]);
	const [warbandCost, setWarbandCost] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [showRemoveContent, setShowRemoveContent] = useState(false);
	const [showStatTestContent, setShowStatTestContent] = useState(false);
	const [soldierToRemoveData, setSoldierToRemoveData] = useState({});
	const [statToBeTested, setStatsToBeTested] = useState();

	const updateWizardName = wizardName => {
		setWizardName(wizardName);
		saveToLocalStorage('wizard-name', wizardName);
	}
	const updateApprenticeName = apprenticeName => {
		setApprenticeName(apprenticeName);
		saveToLocalStorage('apprentice-name', apprenticeName);
	}
	const handleCasterNameChange = e => {
		const value = e.target.value;
		if (Boolean(e.target.dataset.isWizard)) {
			updateWizardName(value)
		} else {
			updateApprenticeName(value);
		};
	}
	const updateSoldiersList = (newSoldiersList) => {
		setSoldiersList(newSoldiersList);
		saveToLocalStorage('soldiers-list', newSoldiersList);
		setWarbandCost(getSoldiersCost(newSoldiersList));
	}
	const handleSoldierChange = e => {
		const target = e.target;
		const isNameChanged = target.classList.contains('js-name-input');
		const index = target.parentElement.parentElement.dataset.index;
		const newSoldiersList = [...soldiersList];
		if (isNameChanged) {
			newSoldiersList[index].name = target.value;
		} else {
			newSoldiersList[index].type = target.value;
		}
		updateSoldiersList(newSoldiersList);
	}
	const addSoldier = () => {
		const newSoldiersList = [...soldiersList];
		newSoldiersList.push({name: getRandomCharacterName(false), type: 'Thug'});
		updateSoldiersList(newSoldiersList);
	}
	const handleModalRemove = e => {
		const index =  e.target.parentElement.dataset.index;
		const newSoldiersList = [...soldiersList];
		newSoldiersList.splice(index, 1);
		updateSoldiersList(newSoldiersList);
		setShowModal(false);
		setShowRemoveContent(false);
	}
	const handleModalCancel = () => {
		setShowModal(false);
		setShowRemoveContent(false);
		setShowStatTestContent(false);
	}
	const handleShowRemoveModal = e => {
		const index =  e.target.parentElement.dataset.index;
		const soldierName = soldiersList[index].name;
		setSoldierToRemoveData({index: index, name: soldierName});
		setShowRemoveContent(true)
		setShowModal(true);
	}
	const showTestModal = e => {
		const index = parseInt(e.currentTarget.dataset.index);
		if (index === 5) {
			console.log('TODO health modification!');
		};
		if (index > 4) return;
		const {stat, value, name} = e.currentTarget.dataset;
		setStatsToBeTested({stat, value, name});
		setShowStatTestContent(true);
		setShowModal(true);
	}

	useEffect(() => {
		saveWarbandDataInLocalStorage({
			setWizardName, setApprenticeName, setSoldiersList, setWarbandCost
		});
	},[]);

  return (
    <StyledFrostgraveWarbandContainer>
			<div className='top-container'>
				<h1>Frostgrave Warband Sheet</h1>
				<div className='buttons-container'>
					<button onClick={addSoldier}>Add Soldier</button>
				</div>
				<div className='warband-cost'>
					<span className='font-bold'>Warband cost: </span><span>{warbandCost} gc</span>
				</div>
			</div>

			<CasterContainer
				wizardStats={wizardStats}
				magicSchools={magicSchools}
				casterName={wizardName}
				setCasterName={updateWizardName}
				handleCasterNameChange={handleCasterNameChange}
				showTestModal={showTestModal}/>
			<CasterContainer
				baseStats={wizardStats}
				casterName={apprenticeName}
				setCasterName={updateApprenticeName}
				handleCasterNameChange={handleCasterNameChange}
				showTestModal={showTestModal}/>

			<SoldiersContainer
				soldiersList={soldiersList}
				handleSoldierChange={handleSoldierChange}
				handleShowRemoveModal={handleShowRemoveModal}
				showTestModal={showTestModal}/>
			
			{showModal && <Modal 
				handleRemove={handleModalRemove} 
				handleCancel={handleModalCancel}
				showRemoveContent={showRemoveContent}
				showStatTestContent={showStatTestContent}
				soldierData={soldierToRemoveData}
				statToBeTested={statToBeTested}
			/>}

    </StyledFrostgraveWarbandContainer>
  )
}

export default FrostgraveWarbandContainer