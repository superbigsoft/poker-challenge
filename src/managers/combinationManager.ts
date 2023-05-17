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


function initRakedCombinations(cards: Card[]) {
    return [
        new RoyalFlush(cards),
        new StraightFlush(cards),
        new FourOfAKind(cards),
        new FullHouse(cards),
        new Flush(cards),
        new Straight(cards),
        new ThreeOfAKind(cards),
        new TwoPairs(cards),
        new Pair(cards),
        new HighCard(cards)
    ];
}

export function setupBestCombination(cardTokens: string[]): Combination {
    const cards = cardTokens.map(cardToken => Card.createCardFromString(cardToken))
    const bestCombination = initRakedCombinations(cards).find((combination => combination.isMatched()))
    return bestCombination!
}