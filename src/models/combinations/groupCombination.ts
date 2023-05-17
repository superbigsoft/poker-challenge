import { Combination } from "./combination";

export abstract class GroupCombination extends Combination {
    getScore(): number {
        return this.getCardGroupsInfo().getScore();
    }
}