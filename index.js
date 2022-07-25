// obj for all Dice roll Strings and Values
let obj = {
	D2: 2,
	D4: 4,
	D6: 6,
	D8: 8,
	D10: 10,
	D12: 12,
	D20: 20,
	D100: 100,
};

// iterates through and finds all html elements
//then creates an event listener to call DiceRoller with the Value
var roll = document.getElementById("box");
Object.keys(obj).forEach((element) => {
	document.getElementById(`${element}`).addEventListener("click", () => {
		DiceRoller(obj[element]);
		roll.scroll({
			top: -roll.scrollHeight, //scroll to the bottom of the element
			behavior: "smooth", //auto, smooth, initial, inherit
		});
	});
});

// the DiceRoller, takes a value and rolls a random number greater than 0
// if there is a modifier adds that too
let curMod = 0;
const DiceRoller = (rollNumber) => {
	let value = 0;
	((number) => {
		value = Math.floor(Math.random() * number + 1);
		if (value == 0 && rollNumber > 2) {
			value++;
		}
		return value;
	})(rollNumber);
	if (curMod > 0) {
		value += curMod;
	}
	const node = document.createElement("li");
	const textnode = document.createTextNode(
		`You rolled a ${value} on a D${rollNumber}`
	);
	console.log(value, curMod);
	node.appendChild(textnode);
	document.getElementById("box").appendChild(node);
};

const Mod = (name) => {
	let input = document.getElementById(name);
};

class Character {
	constructor(
		name,
		stren,
		dex,
		con,
		intel,
		wis,
		char,
		_per,
		_prof,
		_init,
		_strenMod,
		_dexMod,
		_conMod,
		_intelMod,
		_wisMod,
		_charMod
	) {
		//stats
		this.name = name;
		this.stren = stren;
		this.dex = dex;
		this.con = con;
		this.intel = intel;
		this.wis = wis;
		this.char = char;
		//stat modifiers
		this._strenMod = this.statmodgetter(stren);
		this._dexMod = this.statmodgetter(dex);
		this._conMod = this.statmodgetter(con);
		this._intelMod = this.statmodgetter(intel);
		this._charMod = this.statmodgetter(char);
		this._wisMod = this.statmodgetter(wis);
		this._per = 10 + this._wisMod;
	}

	statmodgetter(stat) {
		let tempStat = stat;
		tempStat -= 10;
		return Math.floor(tempStat / 2);
	}
}

class Warlock extends Character {
	constructor(
		name,
		stren,
		dex,
		con,
		intel,
		wis,
		char,
		level,
		cantrips,
		spellsKnown,
		spellSlots,
		slotLevel,
		invocations,
		hitDice,
		savingThrows,
		skills,
		_speCastAbil
	) {
		super(name, stren, dex, con, intel, wis, char);
		this.level = level;
		this.cantrips = cantrips;
		this.spellsKnown = spellsKnown;
		this.spellSlots = spellSlots;
		this.slotLevel = slotLevel;
		this.invocations = invocations;
		this.hitDice = hitDice;
		this.savingThrows = savingThrows;
		this.skills = skills;
		this._speCastAbil = _speCastAbil;
	}

	current(level) {
		this.level = level;
	}
	levelUp(levelNum) {
		this.current(1);
		this.leveler(this.level, levelNum);
	}

	leveler(oldLevel, curLevel) {
		levelList(curLevel)
		function levelList(curLevel) {
			switch (curLevel) {
				case 1:
					levelOne()
					break;
				case 2:
					return levelTwo();
					break;
				case 3:
					return levelThree();
					break;
				case 0:
					levelOne();
					break;
				case 1:
					break;
				

				default:
					break;
			}
			function levelOne() {
				this.level = this.level + 1;
				this._prof = 2;
				this.catrips = 2;
				this.spellsKnown = 2;
				this.spellSlots = 1;
				this.slotLevel = 1;
				this.invocations = 0;
			}
			function levelTwo() {
				this.level = 2;
				this.spellsKnown = 3;
				this.spellSlots = 2;
				this.slotLevel = 1;
				this.invocations = 2;
			}
			function levelThree() {
				this.level = 3;
				this.spellsKnown = 4;
				this.spellSlots = 2;
				this.slotLevel = 2;
			}
		}
	}
}
let x = {
	value: 5,
	level() {
		console.log("shit");
	},
};

