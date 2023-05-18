import fs from 'fs'
import path from 'path';
import { PokerGameManager } from '../managers/pokerGameManager'

test('game manager parse input roundsTokens correctly', () => {
  const roundsTokens = [
    "9C 9D 8D 7C 3C 2S KD TH 9H 8H",
    "6C 5H AS 4H 7S 2S KD 7H 2C AC",
  ]
  const result = PokerGameManager.parseRoundsTokensForPlayers(2, roundsTokens)
  expect(result.length).toBe(2)
  expect(result[0][0].map(card => card.value + card.suit)).toEqual(['9C', '9D', '8D', '7C', '3C'])
  expect(result[0][1].map(card => card.value + card.suit)).toEqual(['6C', '5H', 'AS', '4H', '7S'])
  expect(result[1][0].map(card => card.value + card.suit)).toEqual(['2S', 'KD', 'TH', '9H', '8H'])
  expect(result[1][1].map(card => card.value + card.suit)).toEqual(['2S', 'KD', '7H', '2C', 'AC'])
});

test('game manager returns correct result for 8 rounds', () => {
  const roundsTokens = [
    "4H 4C 6S 7S KD 2C 3S 9S 9D TD",
    "5D 8C 9S JS AC 2C 5C 7D 8S QH",
    "2D 9C AS AH AC 3D 6D 7D TD QD",
    "4D 6S 9H QH QC 3D 6D 7H QD QS",
    "2H 2D 4C 4D 4S 3C 3D 3S 9S 9D",
    "AH QH KH TH JH 2H 3H 6H 5H 4H",
    "AH QH KH TH JH 2H 2H 2H 2H 4H",
  ]
  const manager = new PokerGameManager(2, roundsTokens)
  const result = manager.checkGame()
  expect(result.length).toBe(2)
  expect(result[0]).toEqual('Player 1: 5 hands')
  expect(result[1]).toEqual('Player 2: 2 hands')
});


test('game manager can handle 3 players', () => {
  const roundsTokens = [
    "4H 4C 6S 7S KD 2C 3S 9S 9D TD TC AC JC KC QC",
    "5D 8C 9S JS AC TC AC JC KC QC 2C 5C 7D 8S QH",
    "TC AC JC KC QC 2D 9C AS AH AC 3D 6D 7D TD QD",
    "4D 6S 9H QH QC 3D 6D 7H QD QS TC AC JC KC QC",
    "TC AC JC KC QC 2H 2D 4C 4D 4S 3C 3D 3S 9S 9D",
  ]
  const manager = new PokerGameManager(3, roundsTokens)
  const result = manager.checkGame()
  expect(result.length).toBe(3)
  expect(result[0]).toEqual('Player 1: 2 hands')
  expect(result[1]).toEqual('Player 2: 1 hands')
  expect(result[2]).toEqual('Player 3: 2 hands')
});

test('game manager returns correct result for 500 rounds', () => {
  const data = fs.readFileSync(path.resolve(__dirname, './data/500Rounds.txt'), 'utf8')
  const roundsTokens = data.toString().split("\n")
  const manager = new PokerGameManager(2, roundsTokens)
  const result = manager.checkGame()
  expect(result.length).toBe(2)
  expect(result[0]).toEqual('Player 1: 263 hands')
  expect(result[1]).toEqual('Player 2: 237 hands')
});



