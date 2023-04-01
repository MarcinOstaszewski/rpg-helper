import React, { useEffect, useState } from 'react';
import { wizardStats, magicSchools } from '../../helpers/constants';
import { getRandomSoldierName, saveToLocalStorage } from '../../helpers/helperFunctions';
import SoldiersContainer from '../../components/SoldiersContainer/SoldiersContainer';
import StyledFrostgraveWarbandContainer from './FrostgraveWarbandContainer.styles';
import CasterContainer from '../../components/CasterConteiner/CasterContainer';
import Modal from '../../components/Modal/Modal';

const FrostgraveWarbandContainer = () => {
	const [wizardName, setWizardName] = useState('');
	const [apprenticeName, setApprenticeName] = useState('');
	const [soldiersList, setSoldiersList] = useState([]);
	// const [castersList, setCastersList] = useState([]);
	const [warbandCost, setWarbandCost] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [soldierToRemoveData, setSoldierToRemoveData] = useState({});

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
		newSoldiersList.push({name: getRandomSoldierName, type: 'Thug'});
		updateSoldiersList(newSoldiersList);
	}
	const handleModalRemove = e => {
		const index =  e.target.parentElement.dataset.index;
		console.log(index);
		const newSoldiersList = [...soldiersList];
		newSoldiersList.splice(index, 1);
		updateSoldiersList(newSoldiersList);
		setShowModal(false);
	}
	const handleModalCancel = e => {
		console.log(e.target);
		setShowModal(false);
	}
	const handleShowModal = e => {
		const index =  e.target.parentElement.dataset.index;
		console.log(index);
		const soldierName = soldiersList[index].name;
		setSoldierToRemoveData({index: index, name: soldierName});
		setShowModal(true);
	}

	useEffect(() => {
		const lsWizardName = JSON.parse(localStorage.getItem('wizard-name'));
		const lsApprenticeName = JSON.parse(localStorage.getItem('apprentice-name'));
		// const lsCastersList = localStorage.getItem('casters-list') || [];
		const lsSoldiersList = JSON.parse(localStorage.getItem('soldiers-list'));
		lsWizardName && setWizardName(lsWizardName);
		lsApprenticeName && setApprenticeName(lsApprenticeName);
		// lsCastersList && setCastersList(lsCastersList);
		lsSoldiersList && setSoldiersList(lsSoldiersList);
	},[]);

  return (
    <StyledFrostgraveWarbandContainer>
			<div className='top-container'>
				<h1>Frostgrave Warband Sheet</h1>
				<div className='buttons-container'>
					<button onClick={addSoldier}>Add Soldier</button>
				</div>
				<div className='warband-cost'>
					<span className='font-bold'>Warband Cost: </span><span>{warbandCost} gc</span>
				</div>
			</div>

			<CasterContainer
				wizardStats={wizardStats}
				magicSchools={magicSchools}
				casterName={wizardName}
				handleCasterNameChange={handleCasterNameChange}/>
			<CasterContainer
				baseStats={wizardStats}
				casterName={apprenticeName}
				handleCasterNameChange={handleCasterNameChange}/>

			<SoldiersContainer
				soldiersList={soldiersList}
				handleSoldierChange={handleSoldierChange}
				handleShowModal={handleShowModal}/>
			
			{showModal && <Modal 
				handleRemove={handleModalRemove} 
				handleCancel={handleModalCancel}
				soldierData={soldierToRemoveData}
			/>}

    </StyledFrostgraveWarbandContainer>
  )
}

export default FrostgraveWarbandContainer