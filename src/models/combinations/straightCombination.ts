import _ from "lodash";
import { Combination } from "./combination";

/**
 * * This is the base class for the straight combinations
 *
 * @export
 * @abstract
 * @class StraightCombination
 * @extends {Combination}
 */
export abstract class StraightCombination extends Combination {
    getScore(): number {
        return _.sumBy(this.cards, card => card.score)
    }
}