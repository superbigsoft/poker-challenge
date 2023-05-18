# Typescript Poker Challenge

This is the implementation for Argenti's poker challenge.

## Implementation Report
- Spent time: 16 hours.
- Language: Typescript
- Design: Object Oriented.
- Unittest: 99.5% code coverage.

## Lessons Learnt
- Typescript: I have just finished the Typescript lesson of Linkedin Learning last week and decided to try it with this challenge. Compared to Javascript I feel more confident and much faster to code with Typescript thank to rich tooling support in VSCode including Intellisense and Refactoring.

- Jest: This is the first time I use Jest. It's quite straightforward to implement simple unit tests. However I had difficulty trying to use jest-ts-auto-mock to create mock object from a class in my test cases. Due to time constraint I had fallen back to using core mock function of Jest.

## Solution discussion
The most difficult part of this challenge is to determine the winner among the list of players. This means we need to:
1. Find the highest rank combination for the given cards of each player:
- Preparing a list of Combination matchers ordered by rank descending.
- The first matched Combination for the provided cards is the final result.
2. Identify the combination having highest rank and if same rank having the highest sub ranks:
- Each Combination has its own rank so it's straight forward to solve the first part.
- When two combinations have same rank we will calculate the score of each combination to find the winner:
  - Group 1: Straight combinations (Straight, Straight Flush, Royal Flush) => sum of card's value.
  - Group 2: Group combinations (all others):
    - Organise cards into groups based on its score and order asc the groups based on:
      - its number of cards (because: four of a kind > three of a kind > pair > high card)
      - its card's value (because: pair of 3 > pair of 2, high card 3 > high card 2)
    - Calculate the score:
      - Use the index of each each group and multiply with the SCORING_BASE_FACTOR to calculate the scoring factor of that group.
      - Use the scoring factor and multiply with the score of a card in that group to get the final score of a group.
      - Sum all the group's score to get the final score of the combination.

The design of this solution includes a class diagram and a sequence diagram created with StarUML and  is placed in folder `docs/design`. It also supports more than 2 players.
## Running the code

Install Typescript globally:

```bash
npm install -g typescript
```

Install dependent packages :

```bash
yarn
```

Run the code using the provided test file `poker-hands.txt` in bin folder :

```bash
yarn start
```

## Testing the code

Execute unit test and generate code coverage report in folder `coverage`:

```bash
yarn test
```

## Build

Build Typescript and output Javascript in folder `dist`.

```bash
yarn build
```

## Execute built tool

Use the below command to execute the built tool.

```bash
cat ./bin/poker-hands.txt | node dist/index.js
```