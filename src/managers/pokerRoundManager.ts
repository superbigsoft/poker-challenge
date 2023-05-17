import { Combination } from "../models/combinations/combination";
import { Player } from "../models/player";

export class PokerRoundManager {
    players: Player[];

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
        if (!winnerFirstSortedHands[0].isDraw(winnerFirstSortedHands[1])) {
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


