import { Card } from '../models/card';

test('Card initialised correctly', () => {
  const testData: Array<[string, string, string, number]> = [
    ['2C', '2', 'C', 2],
    ['3S', '3', 'S', 3],
    ['4D', '4', 'D', 4],
    ['5H', '5', 'H', 5],
    ['6H', '6', 'H', 6],
    ['7H', '7', 'H', 7],
    ['8H', '8', 'H', 8],
    ['9H', '9', 'H', 9],
    ['TH', 'T', 'H', 10],
    ['JH', 'J', 'H', 11],
    ['QH', 'Q', 'H', 12],
    ['KH', 'K', 'H', 13],
    ['AH', 'A', 'H', 14],
  ]
  testData.forEach(cardInfo => {
    const card = Card.createCardFromString(cardInfo[0])
    expect(card.value).toEqual(cardInfo[1])
    expect(card.suit).toEqual(cardInfo[2])
    expect(card.score).toEqual(cardInfo[3])
  })
});

test('card init throws error', () => {
  const invalidCardTokens = [
    'XH', '1H', '10H', '2X'
  ]

  invalidCardTokens.forEach(cardToken => {
    expect(() => Card.createCardFromString(cardToken)).toThrowError()
  })
});



