import { GroupCombination } from "./groupCombination";

export class FourOfAKind extends GroupCombination {
    getRank(): number {
        return 8
    }

    isMatched(): boolean {
        return this.getCardGroupsInfo().isFourOfAKind()
    }
    
}