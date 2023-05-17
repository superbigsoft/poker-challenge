import _ from "lodash"
import { Card } from "../card"

const SCORING_FACTOR = 15 // max score of a straight is 14 so we set SCORING_FACTOR to 15 

export class CardGroupsInfo {
    sortedGroups: Array<Card[]>

    constructor(cards: Card[]) {
        const dict = _.groupBy(cards, card => card.score)
        const groups = Object.values(dict)

        this.sortedGroups = _.sortBy(groups, 'length') 
    }

    getScore(): number {
        let score = 0
        for(let i = 0; i < this.sortedGroups.length; i+=1) {
            score += _.sumBy(this.sortedGroups[i], card => card.score) * SCORING_FACTOR**i
        }

        return score
    }

    isFourOfAKind(): boolean {
        return _.some(this.sortedGroups, (group) => group.length === 4)
    }

    isFullHouse(): boolean {
        return _.some(this.sortedGroups, (group) => group.length === 3) && _.some(this.sortedGroups, (group) => group.length === 2)
    }

    isThreeOfAKind(): boolean {
        return _.some(this.sortedGroups, (group) => group.length === 3) && this.sortedGroups.length === 3
    }

    isTwoPair(): boolean {
        return _.filter(this.sortedGroups, (group) => group.length === 2).length === 2
    }

    isPair(): boolean {
        return _.some(this.sortedGroups, (group) => group.length === 2) && this.sortedGroups.length === 4
    }

    isHighCard(): boolean {
        return _.filter(this.sortedGroups, (group) => group.length === 1).length === 5
    }
}