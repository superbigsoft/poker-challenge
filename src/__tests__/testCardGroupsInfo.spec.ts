import { Card } from '../models/card'
import { CardGroupsInfo } from '../models/combinations/cardGroupsInfo'

test('combination is high card', () => {
  const cards1 = Card.createCardsFromString('2C 3S 5D 6H AC')
  const groupsInfo1 = new CardGroupsInfo(cards1)
  expect(groupsInfo1.isHighCard()).toBe(true)

  const cards2 = Card.createCardsFromString('7C 9S TD QH KC')
  const groupsInfo2 = new CardGroupsInfo(cards2)
  expect(groupsInfo2.isHighCard()).toBe(true)  

  expect(groupsInfo1.getScore()).toBeGreaterThan(groupsInfo2.getScore())

});

test('combination is pair', () => {
  const cardsPairOf2 = Card.createCardsFromString('2C QS KD 2H AC')
  const groupsInfo1 = new CardGroupsInfo(cardsPairOf2)
  expect(groupsInfo1.isPair()).toBe(true)

  const cardsPairOf3 = Card.createCardsFromString('3C 2S 3D 4H 5C')
  const groupsInfo2 = new CardGroupsInfo(cardsPairOf3)
  expect(groupsInfo2.isPair()).toBe(true)  

  expect(groupsInfo2.getScore()).toBeGreaterThan(groupsInfo1.getScore())

});

test('combination is 2 pairs', () => {
  const cardsPairsOfAceAnd2 = Card.createCardsFromString('2C AS AD 2H 3C')
  const groupsInfo1 = new CardGroupsInfo(cardsPairsOfAceAnd2)
  expect(groupsInfo1.isTwoPair()).toBe(true)

  const cardsPairsOfKingAndQueen = Card.createCardsFromString('KC QS KD QH AC')
  const groupsInfo2 = new CardGroupsInfo(cardsPairsOfKingAndQueen)
  expect(groupsInfo2.isTwoPair()).toBe(true)  

  expect(groupsInfo1.getScore()).toBeGreaterThan(groupsInfo2.getScore())
});

test('combination is 3 of a kind', () => {
  const cards3Aces = Card.createCardsFromString('AC AS AD 2H 3C')
  const groupsInfo1 = new CardGroupsInfo(cards3Aces)
  expect(groupsInfo1.isThreeOfAKind()).toBe(true)

  const cards3Kings = Card.createCardsFromString('KC AS KD QH KC')
  const groupsInfo2 = new CardGroupsInfo(cards3Kings)
  expect(groupsInfo2.isThreeOfAKind()).toBe(true)  

  expect(groupsInfo1.getScore()).toBeGreaterThan(groupsInfo2.getScore())
});

test('combination is full house', () => {
  const cards3AcesPair2 = Card.createCardsFromString('AC AS AD 2H 2C')
  const groupsInfo1 = new CardGroupsInfo(cards3AcesPair2)
  expect(groupsInfo1.isFullHouse()).toBe(true)

  const cards3KingsPairAce = Card.createCardsFromString('KC KS KD AH AC')
  const groupsInfo2 = new CardGroupsInfo(cards3KingsPairAce)
  expect(groupsInfo2.isFullHouse()).toBe(true)  

  expect(groupsInfo1.getScore()).toBeGreaterThan(groupsInfo2.getScore())
});

test('combination is four of a kind', () => {
  const cards3Three = Card.createCardsFromString('3C 4S 3D 3H 3C')
  const groupsInfo1 = new CardGroupsInfo(cards3Three)
  expect(groupsInfo1.isFourOfAKind()).toBe(true)

  const cards4Two= Card.createCardsFromString('2C 2S AD 2H 2C')
  const groupsInfo2 = new CardGroupsInfo(cards4Two)
  expect(groupsInfo2.isFourOfAKind()).toBe(true)  

  expect(groupsInfo1.getScore()).toBeGreaterThan(groupsInfo2.getScore())
});


