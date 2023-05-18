import { StraightCombination } from "./straightCombination"

export class Straight extends StraightCombination {
    getRank(): number {
        return 5
    }
    
    isMatched(): boolean {
        return this.isStraight()
    }
}