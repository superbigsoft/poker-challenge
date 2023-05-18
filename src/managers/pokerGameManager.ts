import { Card } from '../models/card'
import { Player } from '../models/player'
import { PokerRoundManager } from './pokerRoundManager'

export class PokerGameManager {
    players: Player[] = []

    roundManager: PokerRoundManager



    /**
     * Split the input roundsTokens read from STDIN into chunks.
     * Each chunk is for one player and is a list of game rounds.
     * Each round has a list of cards
     * @static
     * @param {number} playerCount
     * @param {string[]} roundsTokens
     * @return {*}  {Array<Array<Card[]>>}
     * @memberof PokerGameManager
     */
    static parseRoundsTokensForPlayers(playerCount: number, roundsTokens:string[]): Array<Array<Card[]>> {
        const result: Array<Array<Card[]>> = []
        for(let i = 1; i <= playerCount; i += 1) {
            result.push([])        
        } 

        roundsTokens.forEach(roundTokensString => {
            const roundTokens = roundTokensString.split(' ')
            for(let i = 0; i < playerCount; i+=1) {
                result[i].push(
                    roundTokens.slice(i * 5, i * 5 + 5)
                               .map(cardToken => Card.createCardFromString(cardToken)))
            } 
        })

        return result
    }

    constructor(playerCount: number, roundsTokens:string[]) {
        this.createPlayers(playerCount, roundsTokens)
        this.roundManager = new PokerRoundManager(this.players)
    }

    private createPlayers(playerCount: number, roundsTokens: string[]) {
        this.players = PokerGameManager.parseRoundsTokensForPlayers(playerCount, roundsTokens)
            .map((routeTokens, idx) => new Player(idx + 1, routeTokens))
    }

    checkGame(): string[] {
        this.roundManager.checkPlayerHands()
        return this.players.map(player => player.getResult())
    }
}



