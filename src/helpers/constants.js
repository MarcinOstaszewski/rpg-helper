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

const apprenticeStats = {
    Move: 6,
    Fight: wizardStats.Fight - 2,
    Shoot: 3,
    Armour: 10,
    Will: wizardStats.Will - 2,
    Health: wizardStats.Health - 2,
    Level: 6,
    Experience: 0,
}

const statNames = [
    "Move",
    "Fight",
    "Shoot",
    "Armour",
    "Will",
    "Health",
    "Cost",
    "Notes",
];

const soldierTypesStats = {
    "Thug": ["basic",6,2,0,10,-1,10,0,"Hand Weapon"],
    "Thief": ["basic",7,1,0,10,0,10,0,"Dagger"],
    "War Hound": ["basic",8,0,10,-2,8,10,"Animal"],
    "Infantryman": ["basic",6,3,0,11,0,10,50,"Two-Handed Weapon, Light Armour"],
    "Man-at-Arms": ["basic",6,3,0,12,1,12,75,"Hand Weapon, Shield, Light Armour"],
    "Apothecary": ["basic",6,1,0,10,3,12,75,"Staff, Healing Potion"],
    "Archer": ["special",6,1,2,11,0,10,75,"Bow, Quiver, Dagger, Light Armour"],
    "Crossbowman": ["special",6,1,2,11,0,10,75,"Crossbow, Quiver, Dagger, Light Armour"],
    "Treasure Hunter": ["special",7,3,0,11,2,12,100,"Hand Weapon, Dagger, Light Armour"],
    "Tracker": ["special",7,1,2,11,1,12,100,"Staff, Bow, Quiver, Light Armour"],
    "Knight": ["special",5,4,0,13,1,12,125,"Hand Weapon, Dagger, Shield, Heavy Armour"],
    "Templar": ["special",5,4,0,12,1,12,125,"Two-Handed Weapon, Heavy Armour"],
    "Ranger": ["special",7,2,2,11,2,12,125,"Bow, Quiver, Hand Weapon, Light Armour"],
    "Barbarian": ["special",6,4,0,10,3,14,125,"Two Handed Weapon, Dagger"],
    "Marksman": ["special",5,2,2,12,1,12,125,"Crossbow, Quiver, Hand Weapon, Heavy Armour"],
}

const magicSchools = [
  "Chronomancer",
  "Elementalist",
  "Enchanter",
  "Illusionist",
  "Necromancer",
  "Sigilist",
  "Soothsayer",
  "Summoner",
  "Thaumaturge",
  "Witch",
];

export {
    wizardStats,
    apprenticeStats,
    statNames,
    soldierTypesStats,
    magicSchools
}