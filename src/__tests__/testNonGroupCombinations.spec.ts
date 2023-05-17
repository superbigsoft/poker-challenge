import { Card } from '../models/card';
import { Flush } from '../models/combinations/flush';
import { HighCard } from '../models/combinations/highCard';
import { RoyalFlush } from '../models/combinations/royalFlush';
import { Straight } from '../models/combinations/straight';
import { StraightFlush } from '../models/combinations/straightFlush';

test('combination is straight', () => {
  const straight1 = new Straight(Card.createCardsFromString('2C 3S 6D 5H 4C'))
  expect(straight1.isMatched()).toBe(true)
  expect(straight1.getScore()).toBe(20)

  const straight2 = new Straight(Card.createCardsFromString('2C 3S AD 5H 4C'))
  expect(straight2.isMatched()).toBe(false)
});

test('combination is flush', () => {
  const flush1 = new Flush(Card.createCardsFromString('2C 3C 7C 5C 4C'))
  expect(flush1.isMatched()).toBe(true)

  const flush2 = new Flush(Card.createCardsFromString('2C 3C 7C 5C 4D'))
  expect(flush2.isMatched()).toBe(false)
});

test('combination is straight flush', () => {
  const straightFlush1 = new StraightFlush(Card.createCardsFromString('2H 3H 6H 5H 4H'))
  expect(straightFlush1.isMatched()).toBe(true)
  expect(straightFlush1.getScore()).toBe(20)

  const straightFlush2 = new StraightFlush(Card.createCardsFromString('2H 3H 7H 5H 4H'))
  expect(straightFlush2.isMatched()).toBe(false)

  const straightFlush3 = new StraightFlush(Card.createCardsFromString('2H 3H 6C 5H 4H'))
  expect(straightFlush3.isMatched()).toBe(false)
});

test('combination is royal flush', () => {
  const royalFlush1 = new RoyalFlush(Card.createCardsFromString('AH QH KH TH JH'))
  expect(royalFlush1.isMatched()).toBe(true)
  expect(royalFlush1.getScore()).toBe(60)

  const royalFlush2 = new RoyalFlush(Card.createCardsFromString('AH QH KH 9H JH'))
  expect(royalFlush2.isMatched()).toBe(false)

  const royalFlush3 = new RoyalFlush(Card.createCardsFromString('AH QH KH TH JC'))
  expect(royalFlush3.isMatched()).toBe(false)
});

test('combination throw error when invalid number of cards', () => {
  expect(() => new HighCard(Card.createCardsFromString('AH QH KH TH'))).toThrowError()
  expect(() => new HighCard(Card.createCardsFromString('AH QH KH TH JH JH'))).toThrowError()
});
