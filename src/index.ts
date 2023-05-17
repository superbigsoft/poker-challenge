import fs from 'fs'
import {EOL} from 'os'
import { exit } from 'process'
import { PokerGameManager } from './managers/pokerGameManager'

const main = async () => {
  const roundsToken = fs.readFileSync(0, 'utf-8').toString().split(EOL)
  const gameManager = new PokerGameManager(2, roundsToken)
  const results = gameManager.checkGame()
  results.forEach(result => console.log(result))
  exit()
}

main();
