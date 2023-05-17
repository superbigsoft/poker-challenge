const SUITES = ['H', 'D', 'S', 'C']

export class Card {
    public value = ''

    public suit = ''

    public score = 0

    static createCardsFromString(cardTokens: string): Card[] {
        return cardTokens.split(' ').map(cardToken => Card.createCardFromString(cardToken))
    }

    static createCardFromString(cardToken: string): Card {
        return new Card(cardToken[0], cardToken[1])
    }
    
    constructor(value: string, suit: string) {
        // Validate SUTIES
        if (SUITES.indexOf(suit) < 0) {
            throw Error(`Invalid suit: ${suit}`)
        }

        // Determine score
        if (value === 'T') {
            this.score = 10
        } else if (value === 'J') {
            this.score = 11
        } else if (value === 'Q') {
            this.score = 12
        } else if (value === 'K') {
            this.score = 13
        } else if (value === 'A') {
            this.score = 14
        } else if (Number.isNaN(Number(value))) {
            throw Error(`Invald card value: ${ value}`)
        } else {
            this.score = Number(value)
            if (this.score < 2 || this.score > 9) {
                throw Error(`Invald card value: ${ value}`)
            }
        }

        this.value = value
        this.suit = suit
    }

    isAce(): boolean {
        return this.value === 'A'
    }
}
