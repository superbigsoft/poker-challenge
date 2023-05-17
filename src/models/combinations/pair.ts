import { GroupCombination } from "./groupCombination";

export class Pair extends GroupCombination {
    getRank(): number {
        return 2
    }
    
    isMatched(): boolean {
        return this.getCardGroupsInfo().isPair()
    }
    
}