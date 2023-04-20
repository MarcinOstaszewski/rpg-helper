import React, { useEffect, useState } from 'react';
import { casterTypes, localStorageKeys } from '../../helpers/constants';
import { getRandomCharacterName, getSoldiersCost, saveToLocalStorage, 
	saveWarbandDataInLocalStorage } from '../../helpers/helperFunctions';
import { BsPersonPlusFill } from 'react-icons/bs';
import SoldiersContainer from '../../components/SoldiersContainer/SoldiersContainer';
import StyledFrostgraveWarbandContainer from './FrostgraveWarbandContainer.styles';
import CasterContainer from '../../components/CasterConteiner/CasterContainer';
import Modal from '../../components/Modal/Modal';
import SpellbookModal from '../../components/SpellbookModal/SpellbookModal';

const FrostgraveWarbandContainer = () => {
	const [soldiersList, setSoldiersList] = useState([]);
	const [castersData, setCastersData] = useState({});
	const [warbandCost, setWarbandCost] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [showRemoveContent, setShowRemoveContent] = useState(false);
	const [showStatTestContent, setShowStatTestContent] = useState(false);
	const [showSpellbookModal, setShowSpellbookModal] = useState(false);
	const [soldierToRemoveData, setSoldierToRemoveData] = useState({});
	const [statToBeTested, setStatsToBeTested] = useState();

	const getValueFromTarget = value => {
		if (value === "true") return true;
		if (value === "false") return false;
		if (parseInt(value) > 0) return parseInt(value);
		return value;
	}

	const updateCastersData = e => {
		const target = e.currentTarget || e.target;
		const {type, property} = target.dataset;
		const newCastersData = {...castersData};
		const newValue = getValueFromTarget(target.value);
		newCastersData[type][property] = newValue;
		console.log(type, property, newValue, newCastersData);
		setCastersData(newCastersData);
		saveToLocalStorage(localStorageKeys.CASTERS_DATA, newCastersData);
	}
	const updateWizardSpells = spellData => {
		const spellName = spellData.name;
		const newSpellList = {...castersData[casterTypes.WIZ].spellList};
		const newCastersData = {...castersData};
		if (newSpellList[spellName]) {
			delete newCastersData[casterTypes.WIZ].spellList[spellName];
		} else {
			newCastersData[casterTypes.WIZ].spellList = {
				...newSpellList,
				[spellName]: spellData.castingNumber
			}
		}
		setCastersData(newCastersData);
		saveToLocalStorage(localStorageKeys.CASTERS_DATA, newCastersData);
	}
	const updateSoldiersList = (newSoldiersList) => {
		setSoldiersList(newSoldiersList);
		saveToLocalStorage(localStorageKeys.SOLDIERS_DATA, newSoldiersList);
		setWarbandCost(getSoldiersCost(newSoldiersList));
	}
	const handleSoldierChange = e => {
		const {property, index} = e.target.dataset;
		const newSoldiersList = [...soldiersList];
		newSoldiersList[index][property] = e.target.value;
		updateSoldiersList(newSoldiersList);
	}
	const addSoldier = () => {
		const newSoldiersList = [...soldiersList];
		newSoldiersList.push({name: getRandomCharacterName(false), type: 'Thug'});
		updateSoldiersList(newSoldiersList);
	}
	const handleModalRemove = e => {
		const index =  e.target.parentElement.parentElement.dataset.index;
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
	const handleSpellbookClose = () => {
		setShowSpellbookModal(false);
	}
	const handleShowRemoveModal = e => {
		const index = e.target.parentElement.parentElement.dataset.index;
		const soldierName = soldiersList[index].name;
		setSoldierToRemoveData({index: index, name: soldierName});
		setShowRemoveContent(true)
		setShowModal(true);
	}
	const showTestModal = e => {
		const index = parseInt(e.currentTarget.dataset.index);
		if (index > 4) return;
		const { stat, value, name } = e.currentTarget.dataset;
		setStatsToBeTested({stat, value, name});
		setShowStatTestContent(true);
		setShowModal(true);
	}
	const handleSpellbookClicked = e => {
		setShowSpellbookModal(true);
	}

	useEffect(() => {
		saveWarbandDataInLocalStorage({
			setCastersData, setSoldiersList, setWarbandCost, setCastersData
		});
	},[]);

  return (
    <StyledFrostgraveWarbandContainer>
			<div className='top-container'>
				<header>
					<h1 className='top-container-header'>Warband Creator for Frostgrave 2nd ed.</h1>
				</header>
				<main>
					<div className='wizards-gold'>
						<span>Wizards gold: </span>
						<span>400 gc</span>
					</div>
					<div className='warband-cost'>
						<span>Warband cost: </span>
						<span className={warbandCost > 400 ? 'text-danger' : ''}>{warbandCost} gc</span>
					</div>
					<div className='buttons-container'>
						<button onClick={addSoldier} className='add-soldier'>
							<BsPersonPlusFill />Add Soldier
						</button>
					</div>
				</main>
			</div>

			<CasterContainer
				isWizard={true}
				castersData={castersData}
				updateCastersData={updateCastersData}
				handleSpellbookClicked={handleSpellbookClicked}
				showTestModal={showTestModal}/>
			<CasterContainer
				isWizard={false}
				castersData={castersData}
				updateCastersData={updateCastersData}
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

			{showSpellbookModal && <SpellbookModal 
				handleClose={handleSpellbookClose}
				castersData={castersData}
				setCastersData={setCastersData}
				updateCastersData={updateCastersData}
				updateWizardSpells={updateWizardSpells}
			/>}

    </StyledFrostgraveWarbandContainer>
  )
}

export default FrostgraveWarbandContainer;