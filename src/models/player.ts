import { CombinationManager } from "../managers/combinationManager"
import { Combination } from "./combinations/combination"

export class Player {
    rounds: Array<string[]>

    bestCombinations: Combination[] = []

    playerNumber: number

    constructor(playerNumber: number, rounds: Array<string[]>) {
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
        const cardTokens = this.rounds.shift()
        if (cardTokens !== undefined) {
            const bestCombination = CombinationManager.setupBestCombination(cardTokens)
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