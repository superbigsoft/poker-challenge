import { GroupCombination } from "./groupCombination";

export class Flush extends GroupCombination {
    getRank(): number {
        return 6
    }
    
    isMatched(): boolean {
        return this.isSameSuit()
    }
}