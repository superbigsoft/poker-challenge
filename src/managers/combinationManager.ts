import { Card } from "../models/card";
import { Combination } from "../models/combinations/combination";
import { Flush } from "../models/combinations/flush";
import { FourOfAKind } from "../models/combinations/fourOfAKind";
import { FullHouse } from "../models/combinations/fullHouse";
import { HighCard } from "../models/combinations/highCard";
import { Pair } from "../models/combinations/pair";
import { RoyalFlush } from "../models/combinations/royalFlush";
import { Straight } from "../models/combinations/straight";
import { StraightFlush } from "../models/combinations/straightFlush";
import { ThreeOfAKind } from "../models/combinations/threeOfAKind";
import { TwoPairs } from "../models/combinations/twoPairs";

const RakedCombinationsTypes = [
    RoyalFlush,
    StraightFlush,
    FourOfAKind,
    FullHouse,
    Flush,
    Straight,
    ThreeOfAKind,
    TwoPairs,
    Pair,
    HighCard
]

export class CombinationManager {

    static setupBestCombination(cards: Card[]): Combination {
        for (let i = 0; i < RakedCombinationsTypes.length; i+=1) {
            const combination = new RakedCombinationsTypes[i](cards);

            if (combination.isMatched()) {
                return combination;
            }
        }

        throw Error(`Can't find combination for ${cards}`)
    }
}

