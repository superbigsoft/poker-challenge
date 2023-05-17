import _ from "lodash";
import { Card } from "../card";
import { CardGroupsInfo } from "./cardGroupsInfo";

export abstract class Combination {

    isWinner: boolean = false

    cards: Card[]

    constructor(cards: Card[]) {
        this.cards = cards
        if (cards.length !== 5) {
            throw new Error(`Invalid number of cards. Expected 5 - Actual ${cards.length}`)
        }
    }

    abstract isMatched(): boolean

    abstract getRank(): number

    abstract getScore(): number

    setAsWinner(): void {
        this.isWinner = true
    }

    private sortCardsAsc(): void {
        this.cards = this.cards.sort((a, b) => a.score - b.score)
    }

    protected sumScoreOfStraight(): number {
        return _.sumBy(this.cards, card => card.score)
    }

    isSameSuit(): boolean {
        const dict = _.groupBy(this.cards, card => card.suit)
        return Object.keys(dict).length === 1
    }

    isStraight(): boolean {
        this.sortCardsAsc()

        let currentScore = this.cards[0].score
        for (let i = 1; i < this.cards.length; i+=1) {
            if (this.cards[i].score - currentScore !== 1) {
                return false
            }
            currentScore = this.cards[i].score
        }

        return true
    }

    getCardGroupsInfo(): CardGroupsInfo {
        return new CardGroupsInfo(this.cards)
    }

    isDraw(combination: Combination): boolean {
        return this.getRank() === combination.getRank() && this.getScore() === combination.getScore()
    }
}