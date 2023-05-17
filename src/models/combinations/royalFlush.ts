import { StraightFlush } from "./straightFlush";

export class RoyalFlush extends StraightFlush {
    getRank(): number {
        return 10
    }

    isMatched(): boolean {
        return super.isMatched() && this.cards[this.cards.length - 1].isAce()
    }
}