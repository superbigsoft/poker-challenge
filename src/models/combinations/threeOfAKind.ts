import { GroupCombination } from "./groupCombination";

export class ThreeOfAKind extends GroupCombination {
    getRank(): number {
        return 4
    }
    
    isMatched(): boolean {
        return this.getCardGroupsInfo().isThreeOfAKind()
    }
    
}