const wizardStats = {
    Move: 6,
    Fight: 2,
    Shoot: 0,
    Armour: 10,
    Will: 4,
    Health: 14,
    Level: 0,
    Experience: 0,
}

const statNames = [
    'Move',
    'Fight',
    'Shoot',
    'Armour',
    'Will',
    'Health',
    'Cost',
    'Notes',
		'Type'
];

const statsEligibleForCombatTest = [
  statNames[1],
  statNames[2]
];

const soldierTypesStats = {
    'Thug': [6,2,0,10,-1,10,0,'Hand Weapon','Soldier'],
    'Thief': [7,1,0,10,0,10,0,'Dagger','Soldier'],
    'War Hound': [8,1,0,10,-2,8,10,'Animal','Soldier'],
    'Infantryman': [6,3,0,11,0,10,50,'Two-Handed Weapon, Light Armour','Soldier'],
    'Man-at-Arms': [6,3,0,12,1,12,75,'Hand Weapon, Shield, Light Armour','Soldier'],
    'Apothecary': [6,1,0,10,3,12,75,'Staff, Healing Potion','Soldier'],
    'Archer': [6,1,2,11,0,10,75,'Bow, Quiver, Dagger, Light Armour','Specialist'],
    'Crossbowman': [6,1,2,11,0,10,75,'Crossbow, Quiver, Dagger, Light Armour','Specialist'],
    'Treasure Hunter': [7,3,0,11,2,12,100,'Hand Weapon, Dagger, Light Armour','Specialist'],
    'Tracker': [7,1,2,11,1,12,100,'Staff, Bow, Quiver, Light Armour','Specialist'],
    'Knight': [5,4,0,13,1,12,125,'Hand Weapon, Dagger, Shield, Heavy Armour','Specialist'],
    'Templar': [5,4,0,12,1,12,125,'Two-Handed Weapon, Heavy Armour','Specialist'],
    'Ranger': [7,2,2,11,2,12,125,'Bow, Quiver, Hand Weapon, Light Armour','Specialist'],
    'Barbarian': [6,4,0,10,3,14,125,'Two Handed Weapon, Dagger','Specialist'],
    'Marksman': [5,2,2,12,1,12,125,'Crossbow, Quiver, Hand Weapon, Heavy Armour','Specialist'],
};

const magicSchools = [
  'Chronomancer',
  'Elementalist',
  'Enchanter',
  'Illusionist',
  'Necromancer',
  'Sigilist',
  'Soothsayer',
  'Summoner',
  'Thaumaturge',
  'Witch',
];

const casterTypes = {
  WIZ: 'Wizard',
  APP: 'Apprentice'
};

const propertyNames = {
  CURRENT_HEALTH: 'currentHealth',
  NAME: 'name',
  WIZARDS_SCHOOL: 'wizardsSchool',
  STATS: 'stats',
  TYPE: 'type'
};

const localStorageKeys = {
  SOLDIERS_DATA: 'soldiers-data',
  CASTERS_DATA: 'casters-data'
}

const columnsWithPlusIndexes = [1, 2, 4];
const targetNumbersArray = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const modifiersNumberArray = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9,10];
const opponentFightArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
const opponentArmourArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const weaponDamageModifierArray = [-1,1,2];

export {
    wizardStats,
    statNames,
    statsEligibleForCombatTest,
    soldierTypesStats,
    magicSchools,
    casterTypes,
    propertyNames,
    localStorageKeys,
		columnsWithPlusIndexes,
		targetNumbersArray,
		modifiersNumberArray,
    opponentFightArray,
    opponentArmourArray,
    weaponDamageModifierArray,
}