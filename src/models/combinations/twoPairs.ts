import { GroupCombination } from "./groupCombination";

export class TwoPairs extends GroupCombination {
    getRank(): number {
        return 3
    }
    
    isMatched(): boolean {
        return this.getCardGroupsInfo().isTwoPair()
    }
    
}