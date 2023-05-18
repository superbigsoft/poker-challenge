import { CombinationManager } from "../managers/combinationManager"
import { Card } from "./card"
import { Combination } from "./combinations/combination"

export class Player {
    rounds: Array<Card[]>

    bestCombinations: Combination[] = []

    playerNumber: number

    constructor(playerNumber: number, rounds: Array<Card[]>) {
        this.playerNumber = playerNumber
        this.rounds = rounds
    }


    /**
     * Take out the first cardTokens in player's rounds and compile the combination with highest rank.
     * If no more rounds then return null.
     *
     * @return {(Combination | null)} The combination with highest rank
     */
    getNextHand(): Combination | null {
        const cards = this.rounds.shift()
        if (cards !== undefined) {
            const bestCombination = CombinationManager.setupBestCombination(cards)
            this.bestCombinations.push(bestCombination)
            return bestCombination
        }

        return null
    }

    getResult(): string {
        const wonCombinations = this.bestCombinations.filter(combination => combination.isWinner)

        return `Player ${this.playerNumber}: ${wonCombinations.length} hands`;
    }
}