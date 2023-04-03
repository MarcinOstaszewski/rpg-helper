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
	const [showRemoveContent, setShowRemoveContent] = useState(false);
	const [showStatTestContent, setShowStatTestContent] = useState(false);
	const [soldierToRemoveData, setSoldierToRemoveData] = useState({});
	const [statToBeTested, setStatToBeTested] = useState();

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
		if (e.currentTarget.dataset.index > 5) return;
		console.log(e.currentTarget.dataset);
		setShowStatTestContent(true)
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
				handleCasterNameChange={handleCasterNameChange}
				showTestModal={showTestModal}/>
			<CasterContainer
				baseStats={wizardStats}
				casterName={apprenticeName}
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
			/>}

    </StyledFrostgraveWarbandContainer>
  )
}

export default FrostgraveWarbandContainer