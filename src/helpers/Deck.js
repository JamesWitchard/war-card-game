const SUITS = ["♥", "♦", "♣", "♠"];
const VALUES = ["A", "2", "3", "4", "5",
				"6", "7", "8", "9", "10",
				"J", "Q", "K"];
export const CARD_VALUE_MAP = {
	"2": 2,
	"3": 3,
	"4": 4,
	"5": 5,
	"6": 6,
	"7": 7,
	"8": 8,
	"9": 9,
	"10":10,
	"J": 11,
	"Q": 12,
	"K": 13,
	"A": 14
}

export default class Deck {
	constructor(cards = freshDeck()) {
		this.cards = cards;
	}

	get numberOfCards() {
		return this.cards.length;
	}

	shuffle() {
		for (let i = this.numberOfCards - 1; i > 0; i--) {
			const newIndex = Math.floor(Math.random() * (i + 1));
			const oldValue = this.cards[newIndex];
			this.cards[newIndex] = this.cards[i];
			this.cards[i] = oldValue;
		}
	}
};

class Card {
	constructor(suit, value) {
		this.suit = suit;
		this.value = value
	}
}

const freshDeck = () => {
	// flatten out both arrays into a single array of 1♥, 2♥, etc...
	return SUITS.flatMap(suit => VALUES.map(value => new Card(suit, value)));
}