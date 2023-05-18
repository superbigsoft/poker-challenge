import _ from "lodash"
import { Card } from "../card"

const SCORING_BASE_FACTOR = 15 // max score of a straight is 14 so we set SCORING_FACTOR to 15 


/**
 * This class is used to calculate the score of the combinations requiring us  
 * to compare each group of cards in that combination to determine the winner
 * between two combinations having same rank.
 * @export
 * @class CardGroupsInfo
 */
export class CardGroupsInfo {
    sortedGroups: Array<Card[]> = []

    constructor(cards: Card[]) {
        this.groupCardsAndOrderByRank(cards) 
    }


    /**
     * Organise cards into groups based on its score and order asc the groups based on:
     * + its number of cards (because: four of a kind > three of a kind > pair > high card)
     * + its card's value (because: pair of 3 > pair of 2, high card 3 > high card 2)
     * 
     * @private
     * @param {Card[]} cards
     * @memberof CardGroupsInfo
     */
    private groupCardsAndOrderByRank(cards: Card[]) {
        const dict = _.groupBy(cards, card => card.score)
        const groups = Object.values(dict)
        this.sortedGroups = groups.sort((group1, group2) => {
            if (group1.length !== group2.length) {
                return group1.length - group2.length
            }

            return group1[0].score - group2[0].score
        })
    }

    /**
     * Calculate the score of this combination which is used to compare with another combination having the same rank.
     * + Use the index of each each group and multiply with the SCORING_BASE_FACTOR to calculate the scoring factor of that group.
     * + Use the scoring factor and multiply with the score of a card in that group to get the final score of a group.
     * + Sum all the group's score to get the final score of the combination
     * @return calulated score  {number}
     * @memberof CardGroupsInfo
     */
    getScore(): number {
        let score = 0
        for(let i = 0; i < this.sortedGroups.length; i+=1) {
            score += this.sortedGroups[i][0].score * (SCORING_BASE_FACTOR**i)
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