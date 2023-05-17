import { Combination } from "./combination";

export class Straight extends Combination {
    getRank(): number {
        return 5
    }
    
    getScore(): number {
        return this.sumScoreOfStraight()
    }

    isMatched(): boolean {
        return this.isStraight()
    }
}