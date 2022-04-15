export const GAME_STATE = {
	0: {
		state: "",
		prevState: "mainMenu",
		nextState: "mainMenu"
	},
	mainMenu: {
		state: "mainMenu",
		prevState: "mainMenu",
		nextState: "setPlayers",
	},
	setPlayers: {
		state: "setPlayers",
		prevState: "mainMenu",
		nextState: "shuffle"
	},
	shuffle: {
		state: "shuffle",
		prevState: "setPlayers",
		nextState: "setDecks"
	},
	setDecks: {
		state: "setDecks",
		prevState: "shuffle",
		nextState: "drawCards"
	},
	// Game loop states
	drawCards: {
		state: "drawCards",
		prevState: "setDecks",
		nextState: "playerChooseCard"
	},
	playerChooseCard: {
		state: "playerChooseCard",
		prevState: "drawCards",
		nextState: "revealCard"
	},      // loops four times until all players have chosen card
	revealCard: {
		state: "revealCard",
		prevState: "playerChooseCard",
		nextState: "determineSkirmishWinner"
	},
	determineSkirmishWinner: {
		state: "determineSkirmishWinner",
		prevState: "revealCard",
		nextState: "skirmishResultScreen"
	},
	skirmishResultScreen: {
		state: "skirmishResultScreen",
		prevState: "determineSkirmishWinner",
		nextState: "playerChooseCard"
	},      // loops back to choose another card
	determineBattleWinner: {
		state: "determineBattleWinner",
		prevState: "determineSkirmishWinner",
		nextState: "battleResultScreen"
	},
	battleResultScreen: {
		state: "battleResultScreen",
		prevState: "determineBattleWinner",
		nextState: "drawCards"
	},   	// loops back to draw another hand of cards
	determineWarWinner: {
		state: "determineWarWinner",
		prevState: "battleResultScreen",
		nextState: "resultScreen"
	},
	resultScreen: {
		state: "resultScreen",
		prevState: "determineWarWinner",
		nextState: "mainMenu"
	}

}