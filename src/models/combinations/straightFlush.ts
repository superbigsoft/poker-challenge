import { StraightCombination } from "./straightCombination"

export class StraightFlush extends StraightCombination {
    getRank(): number {
        return 9
    }

    isMatched(): boolean {
        return this.isSameSuit() && this.isStraight()
    }
    
}