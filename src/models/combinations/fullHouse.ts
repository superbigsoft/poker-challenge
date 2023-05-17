import { GroupCombination } from "./groupCombination";

export class FullHouse extends GroupCombination {
    getRank(): number {
        return 7
    }
    
    isMatched(): boolean {
        return this.getCardGroupsInfo().isFullHouse()
    }
    
}