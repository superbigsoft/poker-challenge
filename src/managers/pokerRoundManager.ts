import { Combination } from "../models/combinations/combination";
import { Player } from "../models/player";

export class PokerRoundManager {
    players: Player[];

    static isDraw(combination1: Combination, combination2: Combination): boolean {
        return combination1.getRank() === combination2.getRank() && combination1.getScore() === combination2.getScore()
    }

    static decideWinner(hands: Combination[]) {
        const winnerFirstSortedHands = hands.sort((a, b) => {
            // First compare Rank
            if (a.getRank() !== b.getRank()) {
                return b.getRank() - a.getRank() 
            }

            // Same rank then compare score
            return b.getScore() - a.getScore()
        })

        // Handle draw case
        if (!PokerRoundManager.isDraw(winnerFirstSortedHands[0], winnerFirstSortedHands[1])) {
            winnerFirstSortedHands[0].setAsWinner()
        }
    }

    constructor(players: Player[]) {
        this.players = players;
    }

    /**
     * Get next hand of each player and decide winner for each round.
     */
    checkPlayerHands() {
        while (true) {
            const hands = this.players
                .map(player => player.getNextHand())
                .filter(hand => hand !== null) as Combination[];

            if (hands.length === 0) {
                break
            }

            PokerRoundManager.decideWinner(hands)
        }
    }
}


