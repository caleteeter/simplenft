# SimpleNft - Sample of sample NFT in Ethereum

This demonstrates a very simple use of Truffle to build a simple NFT in Ethereum.

## Prerequisites

- NodeJS - [16.x](https://nodejs.org/en/)

- Truffle - [latest](https://trufflesuite.com/docs/truffle/getting-started/installation.html)

- Ganache-CLI - [latest](https://www.npmjs.com/package/ganache-cli)

## Build

```
truffle compile
```

## Test

```
ganache-cli
truffle test
```

## Interaction

```
ganache-cli (if not started earlier)
truffle console
compile
let t1 = await SimpleNft.new()
await t1.mintItem(<address>, <url>);
await t1.balanceOf(<address>);
await t1.transferFrom(<address>, <another address>, 1);
```
