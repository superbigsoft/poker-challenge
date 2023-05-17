import { PokerRoundManager } from '../managers/pokerRoundManager'
import { Card } from '../models/card';
import { Combination } from '../models/combinations/combination';
import { HighCard } from "../models/combinations/highCard";

const getMockCombination = (): Combination => new HighCard(Card.createCardsFromString('4H 3C 6S 7S KD'))

test('when same rank winner is one with higher score', () => {
  const hand1 = getMockCombination(); 
  hand1.getRank = jest.fn().mockReturnValue(1);
  hand1.getScore = jest.fn().mockReturnValue(1);

  const hand2 = getMockCombination();
  hand2.getRank = jest.fn().mockReturnValue(1);
  hand2.getScore = jest.fn().mockReturnValue(2);

  const hand3 = getMockCombination();
  hand3.getRank = jest.fn().mockReturnValue(1);
  hand3.getScore = jest.fn().mockReturnValue(3);

  const hands = [hand1, hand2, hand3]
  PokerRoundManager.decideWinner(hands)
  expect(hand1.isWinner).toBe(false)
  expect(hand2.isWinner).toBe(false)
  expect(hand3.isWinner).toBe(true)
});


test('when different rank winner is one with higher rank', () => {
  const hand1 = getMockCombination(); 
  hand1.getRank = jest.fn().mockReturnValue(1);
  hand1.getScore = jest.fn().mockReturnValue(3);

  const hand2 = getMockCombination();
  hand2.getRank = jest.fn().mockReturnValue(2);
  hand2.getScore = jest.fn().mockReturnValue(2);

  const hand3 = getMockCombination();
  hand3.getRank = jest.fn().mockReturnValue(3);
  hand3.getScore = jest.fn().mockReturnValue(1);

  const hands = [hand1, hand2, hand3]
  PokerRoundManager.decideWinner(hands)
  expect(hand1.isWinner).toBe(false)
  expect(hand2.isWinner).toBe(false)
  expect(hand3.isWinner).toBe(true)
});

test('when top 2 hands has same rank & score then no winner', () => {
  const hand1 = getMockCombination(); 
  hand1.getRank = jest.fn().mockReturnValue(2);
  hand1.getScore = jest.fn().mockReturnValue(1);

  const hand2 = getMockCombination();
  hand2.getRank = jest.fn().mockReturnValue(2);
  hand2.getScore = jest.fn().mockReturnValue(1);

  const hand3 = getMockCombination();
  hand3.getRank = jest.fn().mockReturnValue(1);
  hand3.getScore = jest.fn().mockReturnValue(5);

  const hands = [hand1, hand2, hand3]
  PokerRoundManager.decideWinner(hands)
  expect(hand1.isWinner).toBe(false)
  expect(hand2.isWinner).toBe(false)
  expect(hand3.isWinner).toBe(false)
});


