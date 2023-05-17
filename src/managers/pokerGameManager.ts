import { Player } from '../models/player'
import { PokerRoundManager } from './pokerRoundManager'

export class PokerGameManager {
    players: Player[] = []

    roundManager: PokerRoundManager

    static parseRoundsTokensForPlayers(playerCount: number, roundsTokens:string[]): Array<Array<string[]>> {
        const result: Array<Array<string[]>> = []
        for(let i = 1; i <= playerCount; i += 1) {
            result.push([])        
        } 

        roundsTokens.forEach(roundTokensString => {
            const roundTokens = roundTokensString.split(' ')
            for(let i = 0; i < playerCount; i+=1) {
                result[i].push(roundTokens.slice(i * 5, i * 5 + 5))
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



