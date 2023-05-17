import { GroupCombination } from "./groupCombination";

export class HighCard extends GroupCombination {
    getRank(): number {
        return 1
    }
    
    isMatched(): boolean {
        return this.getCardGroupsInfo().isHighCard()
    }
}