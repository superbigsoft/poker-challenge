import * as _ from 'lodash';
import { Combination } from "./combination";

export class StraightFlush extends Combination {
    getRank(): number {
        return 9
    }
    
    getScore(): number {
        return this.sumScoreOfStraight()
    }

    isMatched(): boolean {
        return this.isSameSuit() && this.isStraight()
    }
    
}