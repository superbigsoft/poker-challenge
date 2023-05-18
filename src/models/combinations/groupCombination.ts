import { Combination } from "./combination";


/**
 * This is the base class for the combinations requiring us  
 * to compare each group of cards in that combination to determine the winner
 * between two combinations having same rank. 
 *
 * @export
 * @abstract
 * @class GroupCombination
 * @extends {Combination}
 */
export abstract class GroupCombination extends Combination {
    getScore(): number {
        return this.getCardGroupsInfo().getScore();
    }
}