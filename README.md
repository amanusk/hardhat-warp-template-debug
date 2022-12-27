# Build Basic hh-warp compile repo

Have the latest `develop` of `warp`

`yarn` and `yarn build` `warp`

Have the latest `template` branch of `hardhat-warp`

Update the path to `venv` in `hardhat-warp/src/utils.ts`

`yarn` and `yarn build` `hardhat-warp`

Update the `package.json` of `hardhat-warp` to point to the `warp` directory

Update the `package.json` of this repo to point to `hardhat-warp`

```
yarn compile
yarn test
```
